
let btn = document.getElementById('button');
console.log(btn);
btn.addEventListener('click', darkTheme);


function darkTheme() {
    var body = document.getElementsByTagName('body')[0];
    if (body.className == "") {
        body.className = "dark";
    } else {
        body.className = "";
        btn.value("Light Theme");
    }
}
