
document.addEventListener("mousemove", (e) => {
  const money = document.createElement("div");
  money.classList.add("money");
  money.textContent = "💵";
  money.style.left = e.pageX + "px";
  money.style.top = e.pageY + "px";
  document.body.appendChild(money);
  setTimeout(() => money.remove(), 1000);
});

// Check which page we're on
if (document.getElementById("addEmployeeForm")) {
  initEmployeePage();
}
if (document.getElementById("addStubForm")) {
  initStubPage();
}

function initEmployeePage() {
  const form = document.getElementById("addEmployeeForm");
  const table = document.getElementById("employeeTable").querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("empId").value;
    const name = document.getElementById("empName").value;
    const dept = document.getElementById("empDept").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${id}</td>
      <td contenteditable="true">${name}</td>
      <td contenteditable="true">${dept}</td>
      <td>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </td>
    `;
    table.appendChild(row);
    form.reset();
  });

  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("tr").remove();
    }
  });
}


function initStubPage() {
  const form = document.getElementById("addStubForm");
  const table = document.getElementById("stubTable").querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("stubId").value;
    const name = document.getElementById("stubName").value;
    const hours = document.getElementById("stubHours").value;
    const pay = document.getElementById("stubPay").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${id}</td>
      <td contenteditable="true">${name}</td>
      <td contenteditable="true">${hours}</td>
      <td contenteditable="true">$${pay}</td>
      <td>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </td>
    `;
    table.appendChild(row);
    form.reset();
  });

  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("tr").remove();
    }
  });
}
