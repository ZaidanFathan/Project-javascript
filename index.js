function add() {
  const getValue = document.getElementById("inputValue");

  if (getValue.value == "") {
    return alert("You have to type something");
  }
  const getDiv = document.getElementsByClassName("main-row");

  //   Membuat div col-12
  const div = document.createElement("div");
  div.className = "col-12 mt-3";

  //   Membuat div Iframe
  const divFrame = document.createElement("div");
  divFrame.className = "ratio ratio-16x9";

  // Membuat iframe
  const frame = document.createElement("iframe");
  const url = getValue.value;
  frame.src = url;
  divFrame.appendChild(frame);

  const col = getDiv[0].appendChild(div);

  col.appendChild(divFrame);

  getValue.value = "";

  //   Make Delete button
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-danger my-3";
  const btnTxt = document.createTextNode("Delete");
  btnDelete.appendChild(btnTxt);
  div.appendChild(btnDelete);

  //   Make Update button
  const btnUpdate = document.createElement("button");
  btnUpdate.className = "btn btn-warning mx-3 my-3";
  const btnTxtU = document.createTextNode("Update");
  btnUpdate.appendChild(btnTxtU);
  btnUpdate.setAttribute("id", "btnupdate");
  btnUpdate.setAttribute("data-bs-target", "#btnUpdate");
  btnUpdate.setAttribute("data-bs-toggle", "modal");
  div.appendChild(btnUpdate);

  // Ketika tombol delete di tekan
  const deleteBtn = document.getElementsByClassName("btn-danger");
  for (let index = 0; index < deleteBtn.length; index++) {
    deleteBtn[index].addEventListener("click", () => {
      deleteBtn[index].parentElement.style.display = "none";
    });
  }

  // Ketika tombol update di tekan
  /** note
   * Gunakan modal untuk memasukan inputan
   */
  const updateBtn = document.getElementsByClassName("btn-warning");
  const confirmBtn = document.getElementById("btnConfirm");
  const valueUpdate = document.getElementById("inputValue2");
  for (let index = 0; index < updateBtn.length; index++) {
    updateBtn[index].addEventListener("click", () => {
      let iframe = document.getElementById(index);
      confirmBtn.onclick = () => {
        if (valueUpdate.value != "") {
          iframe.src = valueUpdate.value;
          valueUpdate.value = "";
        } else {
          alert("Harap diisi terlebih dahulu");
        }
      };
    });
  }

  // Menambahkan id ke setiap frame
  const getIframe = document.getElementsByTagName("iframe");
  for (let index = 0; index < getIframe.length; index++) {
    console.log(getIframe[index].setAttribute("id", index));
  }
}
