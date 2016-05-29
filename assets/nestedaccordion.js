
// WORKS - ON CLICK, PARAGRAPH APPEARS, BUT CAN'T CLICK AGAIN //
// frm = document.querySelectorAll('.header');
// var txt = document.querySelector('.text_section');
                // ^ was querySelector or querySelectorAll and had .dot before class name //

/*frm.addEventListener('click', function () {
	txt.classList.remove("text_section");
});*/

////////////////////////////////////////////////////////////////

// when paragraph is shown, and then you click, change the class again

/*for (var i = 0; i <frm.length; i++) {
  frm[i].addEventListener('click', function () {
  	txt.classList.remove("text_section");
  });*/

/*for (var i = 0; i < frm.length; i++) {
  frm[i].addEventListener('click', function () {
   txt.classList.toggle("text_section");
});
}*/

/*var frm = document.getElementsByClassName("header");
for (var i = 0; i < frm.length; ++i) {
  frm[i].addEventListener("click", function(){
    var textSection = this.nextElementSibling;
    var style = window.getComputedStyle(textSection);

     if(style.display === 'none'){
         textSection.style.display = 'initial';

     }
     else {
         textSection.style.display = 'none';
     }
 });
}*/

var frm = document.getElementsByClassName("header");

for (var i = 0; i < frm.length; ++i) {
  frm[i].addEventListener("click", function(){
    var textSection = this.nextElementSibling;
    var style = window.getComputedStyle(textSection);


     if(style.display === 'none'){
         textSection.style.display = 'initial';

     }
     else {
         textSection.style.display = 'none';
     }
 });
}

/*var arrow = document.getElementsByClassName("fa")
for (var i = 0; i < frm.length; ++i) {
   frm[i].addEventListener("click", function(){
      arrow


     i {
       transform: rotateZ(45deg);*/
