const fileInput = document.getElementById('fileInput');
const fileListContainer = document.getElementById('fileList');
const chooseBtn = document.getElementById('chooseBtn');

let selectedFiles = [];

chooseBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const newFiles = Array.from(fileInput.files);

  newFiles.forEach(newFile => {
    const isDuplicate = selectedFiles.some(existing =>
      existing.name === newFile.name &&
      existing.size === newFile.size &&
      existing.lastModified === newFile.lastModified
    );

    if (!isDuplicate) {
      selectedFiles.push(newFile);
    }
  });

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
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2';

    const fileCard = document.createElement('div');
    fileCard.className = 'media-item';

    const fileSizeKB = Math.round(file.size / 1024);

    const preview = document.createElement(file.type.startsWith('image/') ? 'img' : 'video');
    preview.className = 'media-preview';
    preview.title = file.name;
    preview.src = URL.createObjectURL(file);
    if (file.type.startsWith('video/')) {
      preview.controls = true;
    }

    const info = document.createElement('div');
    info.className = 'file-name-size mt-1';
    info.innerText = `${file.name} (${fileSizeKB} KB)`;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-btn btn btn-sm btn-danger mt-3';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeFile(index);

    fileCard.appendChild(preview);
    fileCard.appendChild(info);
    fileCard.appendChild(removeBtn);
    col.appendChild(fileCard);
    fileListContainer.appendChild(col);
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
