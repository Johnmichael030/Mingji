const noteTextarea = document.getElementById('note-textarea');
const saveNoteButton = document.getElementById('save-note');
const clearNoteButton = document.getElementById('clear-note');
const notesList = document.getElementById('notes-list');
const addAttachmentButton = document.getElementById('add-attachment');
const attachmentList = document.getElementById('attachment-list');

let notes = []; // Array to store notes
let attachments = []; // Array to store attachments

// Save note functionality
saveNoteButton.addEventListener('click', () => {
  const noteContent = noteTextarea.value.trim();
  if (noteContent) {
    notes.push(noteContent); // Save note
    updateNotesList(); // Update notes list
    noteTextarea.value = ''; // Clear the textarea
    alert('Note saved successfully!');
  } else {
    alert('Please write something before saving.');
  }
});

// Clear note functionality
clearNoteButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear the note?')) {
    noteTextarea.value = '';
  }
});

// Update recent notes list
function updateNotesList() {
  notesList.innerHTML = ''; // Clear current list
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = `Note ${index + 1}: ${note.substring(0, 30)}...`; // Shortened note
    li.addEventListener('click', () => {
      noteTextarea.value = note; // Load note into textarea
    });
    notesList.appendChild(li);
  });
}

// Add attachment functionality
addAttachmentButton.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '*/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);
  fileInput.click();

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      attachments.push(file.name); // Save attachment name
      updateAttachmentList(); // Update attachment list
    }
    document.body.removeChild(fileInput); // Remove file input after use
  });
});

// Update attachment list
function updateAttachmentList() {
  attachmentList.innerHTML = ''; // Clear current list
  attachments.forEach((attachment, index) => {
    const li = document.createElement('li');
    li.textContent = `Attachment ${index + 1}: ${attachment}`;
    attachmentList.appendChild(li);
  });
}
