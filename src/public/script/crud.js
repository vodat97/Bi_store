const modal = document.getElementById('modal-delete');
//var btnDel = document.getElementById("delete");
const Xspan = document.getElementsByClassName('close')[0];
const deleteBtn = document.getElementById('deleteBtn');
const deleteBtn2 = document.getElementsByClassName('btn-delete');
const cancelBtn = document.getElementById('cancelBtn');


function HandleNumber(num) {
    return num.replace(/^0+/, '').replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function addDotNumber() {
    var value = document.getElementsByClassName("number").value;
    document.getElementsByClassName("number") = HandleNumber(value);
}

cancelBtn.onclick = function(){
    modal.style.display = 'none';
}
Xspan.onclick = function() {
    modal.style.display = "none";
}
function showPopup(){
    modal.style.display = 'block';
}