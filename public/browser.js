// @ts-nocheck

console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"> O'zgartirish
            </button>

            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"> O'chirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (createField.value.trim() === "") {
    alert("Please enter a value");
    createField.focus();
    return;
  }

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again");
    });
});

document.addEventListener("click", function (e) {
  // delete oper
  if (e.target.classList.contains("delete-me")) {
    console.log("Kutayabmiz...");

    if (confirm("Aniq o'chirmoqchimisiz?")) {
      console.log("STEP1: FRONTENDDAN BACKEND SERVERGA REQUIST KETTI!");

      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          // console.log(response.data);
          console.log("NIMADIR QILISH...");

          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }
  }

  // edit oper
  if (e.target.classList.contains("edit-me")) {
    let currentText =
      e.target.parentElement.parentElement.querySelector(
        ".item-text"
      ).innerHTML;
    let userInput = prompt("Ozgartirish kiriting", currentText);

    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  if (confirm("Hammasini o'chirasizmi?")) {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
      // alert(response.data.state);
      document.location.reload();
    });
  }
});
