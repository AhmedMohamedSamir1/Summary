let items = [
    { id:1,  name: "Stand1" },
    { id:2,  name: "Stand2" },
    { id:3,  name: "Stand3" },
    { id:4,  name: "Stand4" },
]

function addItem(event){

    event.preventDefault();

    const tbody = document.querySelector("#table-added-items tbody");
    const newRow = document.createElement("tr");
    const index = tbody.rows.length;

    // Create a new <td> for the select input
    const tdSelect = document.createElement("td");
    const select = document.createElement("select");
    select.id = `select-item-${index}`;     // Unique ID for the select input
    select.name = `Project.items[${index}].Id`; // Name attribute for proper form binding
    select.classList.add("form-control");
    select.multiple = true; // tom select will be 

    // Creating options with items
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerHTML = item.name;
        select.append(option);
    });

    tdSelect.appendChild(select);

    const tdQuantity = document.createElement("td");
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1"; // Minimum quantity
    quantityInput.value = "1"; // Default quantity
    quantityInput.name = `Project.items[${index}].Quantity`; // Name attribute for proper form binding
    quantityInput.classList.add("form-control"); // Add Bootstrap styling if needed
    quantityInput.addEventListener("keydown", function(event){
        if (event.key === 'Enter') {
               event.preventDefault(); // Prevent form submission
        }
    })
    tdQuantity.append(quantityInput);

    // Create a delete button for the row
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger");

    deleteButton.addEventListener("click", function (event) {
        deleteRow(event);
    });

    // Append delete button to the row
    const tdDelete = document.createElement("td");
    tdDelete.appendChild(deleteButton);

    // Append the <td> elements to the new row
    newRow.appendChild(tdSelect);
    newRow.appendChild(tdQuantity);
    newRow.appendChild(tdDelete);

    // Append the row to the tbody
    tbody.appendChild(newRow);

    new TomSelect(`#select-item-${index}`,{
        placeholder: 'Select item',
        plugins: ['dropdown_input', 'no_backspace_delete',],
    })

}

function deleteRow(event) {

    event.preventDefault();

    const row = event.target.closest("tr");
    if(row)
        row.remove();

    // reindex rows

    const tableBodyRows = document.querySelectorAll("#table-added-items tbody tr");

    tableBodyRows.forEach((row, index) => {
        // Update select element
    
        const select = row.querySelector("select");
        if (select) {
            select.id = `select-item-${index}`;
            select.name = `Project.items[${index}].Id`;
        }

        // Update quantity input element
        const quantityInput = row.querySelector("input[type='number']");
        if (quantityInput) {
            quantityInput.name = `Project.items[${index}].Quantity`;
        }

    });
}

