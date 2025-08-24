let notes = [];

function addNote() {
  let noteInput = document.getElementById("noteInput");
  let noteText = noteInput.value.trim();

  if (noteText !== "") {
    notes.push(noteText);
    noteInput.value = "";
    displayNotes();
  }
}

function displayNotes() {
  let notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.textContent = note;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => deleteNote(index);

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}
