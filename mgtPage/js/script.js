$(window).scroll(function(){
  if ($(window).scrollTop()){
      $("nav").addClass("black");
      $(".navbar").addClass("navtit");
  }
  else{
      $("nav").removeClass("black");
      $(".navbar").removeClass("navtit");
      
}
});




function toggleSuite(suiteId) {
  var suite = document.getElementById(suiteId);

  if (suite.style.maxHeight) {
    suite.style.maxHeight = null;
    document.querySelector(`#${suiteId} .lireLaSuite`).innerText = "Lire la suite";
  } else {
    suite.style.maxHeight = suite.scrollHeight + "px"; 
    document.querySelector(`#${suiteId} .lireLaSuite`).innerText = "Cacher la suite";
  }
}
