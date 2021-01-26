const scrollY = document.body.style.top;
// When the modal is shown, we want a fixed body
document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;
// When the modal is hidden...
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeModal = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}