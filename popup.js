// function click(e) {
//     chrome.tabs.executeScript(
//         {code:"document.body.style.backgroundImage='url(" + images[e.target.id] + "'"});
//         window.close();
// }

const spiderBackground = chrome.extension.getURL('web.png');
const pumpkinMouse = chrome.extension.getURL('pumpkinmouse.gif');
const witchBackground = chrome.extension.getURL('flyingwitch.gif');
const spiderMouse = chrome.extension.getURL('spider-mouse.png');
const witchMouse = chrome.extension.getURL('cauldron-mouse.png');
const catMouse = chrome.extension.getURL('cat-mouse.png');
//const songMM = chrome.extension.getURL('MonsterMash.mp3');

function click1() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #ff7200 !important; background-image:none !important; cursor:url('" + pumpkinMouse + "'), auto;}"});
    //window.close();
   // document.body.innerHTML = "<audio src='" + songMM + "' loop='' ></audio>";
}

//chrome.extension.getURL('img/btn_close.png')
function click2() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #ffffff !important; background-image:url('" + spiderBackground + "') !important; cursor:url('" + spiderMouse + "'), auto;}"});
}
function click3() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #000000 !important; background-image:url('" + witchBackground + "') !important; cursor:url('" + witchMouse + "'), auto;}"})
}
function click4() {
    chrome.tabs.insertCSS(null, {code: "body{background-color: #494a4a !important; cursor:url('" + catMouse + "'), auto;}"})
}

// function click2(e) {
//     chrome.tabs.insertCSS(null, {code: "'" + images[e.target.id] + "'"});
//     window.close();
// }

document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Pumpkin");
    firstClick.addEventListener("click", click1)
});

document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Spider");
    firstClick.addEventListener("click", click2)
});
document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Witch");
    firstClick.addEventListener("click", click3)
});
document.addEventListener('DOMContentLoaded', function(){
    const firstClick = document.getElementById("Black-cat");
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



