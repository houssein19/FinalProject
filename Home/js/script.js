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


function addlog(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.style.scale = "1";
    login.style.scale = "1";
    formsigin.style.scale ="0";
}
function addsig(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.style.scale = "1";
    login.style.scale = "0";
    formsigin.style.scale ="1";
}
function close(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.hidden= true;
    

}
function toggle(){
    var blur = document.getElementById('ct');
    blur.classList.toggle('active');
}
