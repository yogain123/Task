  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content, but toggle buton is not showing at setting icon (need to be fix) */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
        function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
        function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
        
        function myFunction_repeating() {
    document.getElementById("myDropdownRepeating").classList.toggle("show");
        }
        

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
