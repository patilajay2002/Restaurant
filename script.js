function changepage(varr){
   
   var img=[
   "./images/background0.jpg",
   "./images/background1.jpg",
   "./images/background2.jpg",
   "./images/background3.jpg"
   ]
   
   var rand=Math.floor(Math.random()*5)
   var a=document.getElementById("welcome1").style.backgroundImage = "";
   var rr=Math.random()*4;
   var a=document.getElementById("welcome1").style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0.575),rgba(0, 0, 0, 0.575)),url("+img[rand]+")";
   // .getElements("content1")
   console.log(rand);
}

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      // alert("Hello");
      document.getElementById("myBtn").style.display = "block";
  } else {
   document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
//   console.log()
}