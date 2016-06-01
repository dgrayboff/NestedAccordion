
// WORKS - ON CLICK, PARAGRAPH APPEARS, BUT CAN'T CLICK AGAIN //
// frm = document.querySelectorAll('.header');
// var txt = document.querySelector('.text_section');
                // ^ was querySelector or querySelectorAll and had .dot before class name //

/*frm.addEventListener('click', function () {
	txt.classList.remove("text_section");
});*/

////////////////////////////////////////////////////////////////

///// Vanilla JS, Original Working Code ///////

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

///////////////////////////////////////////////////////////////

///// jQuery code for week 3 assignment ///////

var frm = $('.header');

$(frm).each(function(i, frm){
  $(frm).on('click', function() {
    $(frm).next().toggle();
})
})
