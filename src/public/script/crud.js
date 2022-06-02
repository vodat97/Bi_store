const modal = document.getElementById('modal-delete');
//var btnDel = document.getElementById("delete");
const Xspan = document.getElementsByClassName('close')[0];
const deleteBtn = document.getElementById('deleteBtn');
const deleteBtn2 = document.getElementsByClassName('btn-delete');
const cancelBtn = document.getElementById('cancelBtn');

console.log(deleteBtn2.length);

cancelBtn.onclick = function(){
    modal.style.display = 'none';
}
Xspan.onclick = function() {
    modal.style.display = "none";
}
function showPopup(){
    modal.style.display = 'block';
}