
function setter() {
    var str =window.location.search;
    var href = document.getElementById('Idname');
    // console.log(str);
    href.innerHTML = "<a id = 'Idname' href = 'https://google.com/" + str + "'<button>Click me</button></a>";
    // console.log(href);
}


