const works = [];

function renderList() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  if (works.length === 0) {
    list.innerHTML = "<li>No works available.</li>";
  } else {
    works.forEach((work, idx) => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.innerHTML = `
        ${idx + 1}. <span>${work}</span>
        <span class="actions">
          <button onclick="removeWork(${idx})">Remove</button>
          <button onclick="updateWork(${idx})">Update</button>
        </span>
      `;
      list.appendChild(li);
    });
  }
}

function addWork() {
  const input = document.getElementById("newWork");
  const value = input.value.trim();
  if (value) {
    works.push(value);
    input.value = "";
    renderList();
  } else {
    alert("Please enter a work.");
  }
}

function removeWork(idx) {
  if (confirm(`Remove work: "${works[idx]}"?`)) {
    works.splice(idx, 1);
    renderList();
  }
}

function updateWork(idx) {
  const newWork = prompt("Enter the new work:", works[idx]);
  if (newWork && newWork.trim()) {
    works[idx] = newWork.trim();
    renderList();
  }
}

// Initial render
window.onload = renderList;