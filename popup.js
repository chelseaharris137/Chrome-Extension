// function click(e) {
//     chrome.tabs.executeScript(
//         {code:"document.body.style.backgroundImage='url(" + images[e.target.id] + "'"});
//         window.close();
// }

var images = {
chelsea: "'body{background-color: #ff7200 !important; cursor:url('images/halloween-mouse.gif')}'",
joe: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
chris: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
david: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}



function click1() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #ff7200 !important; cursor:url('images/halloween-mouse.gif')}"})
}
function click2() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #1c2b67 !important; cursor:url('images/halloween-mouse.gif')}"})
}
function click3() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #000000 !important; cursor:url('images/halloween-mouse.gif')}"})
}
function click4() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #ffffff !important; cursor:url('images/halloween-mouse.gif')}"})
}

// function click2(e) {
//     chrome.tabs.insertCSS(null, {code: "'" + images[e.target.id] + "'"});
//     window.close();
// }

document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Halloween");
    firstClick.addEventListener("click", click1)
});

document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Halloween2");
    firstClick.addEventListener("click", click2)
});
document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Halloween3");
    firstClick.addEventListener("click", click3)
});
document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Halloween4");
    firstClick.addEventListener("click", click4)
});


// document.addEventListener('DOMContentLoaded', function(){
//     var divs = document.querySelectorAll('div');
//     console.log(divs)
//     for(let i =0; i < divs.length; i++) {
//         divs[i].addEventListener('click', click2);
//        // console.log(divs[i])
//     }
// });



