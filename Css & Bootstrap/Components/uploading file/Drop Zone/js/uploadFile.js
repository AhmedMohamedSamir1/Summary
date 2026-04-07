const fileInput = document.getElementById('fileInput');
  const fileListContainer = document.getElementById('fileList');
  const chooseBtn = document.getElementById('chooseBtn');

  let selectedFiles = [];

  chooseBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', () => {
    selectedFiles = selectedFiles.concat(Array.from(fileInput.files));
    updateInputFiles();
    renderFileList();
  });

  function renderFileList() {
    fileListContainer.innerHTML = '';
    if (selectedFiles.length === 0) {
      fileListContainer.innerText = 'No files selected';
      return;
    }

    selectedFiles.forEach((file, index) => {
      const fileDiv = document.createElement('div');
      fileDiv.className = 'file-item';

      const fileSizeKB = Math.round(file.size / 1024);

      fileDiv.innerHTML = `
        <div class="file-name-size">${file.name} (${fileSizeKB} KB)</div>
        <button type="button" class="remove-btn" onclick="removeFile(${index})">Remove</button>
      `;

      fileListContainer.appendChild(fileDiv);
    });
  }

  function removeFile(index) {
    selectedFiles.splice(index, 1);
    updateInputFiles();
    renderFileList();
  }

  function updateInputFiles() {
    const dt = new DataTransfer();
    selectedFiles.forEach(file => dt.items.add(file));
    fileInput.files = dt.files;
  }