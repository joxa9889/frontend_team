$(function () {
    $('#picker').datetimepicker();
});


var image_put_display = document.getElementById("personal-img")
var image_bg = document.getElementById("for_putting-personal-img")
if (image_put_display.src.includes('profile-page')) {
    image_bg.style.display = "none"
    image_put_display.style.display='block'
}else{}


function password_show_hide() {
var x = document.getElementById("password");
var show_eye = document.getElementById("show_eye");
var hide_eye = document.getElementById("hide_eye");
hide_eye.classList.remove("d-none");
if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
} else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
}
}