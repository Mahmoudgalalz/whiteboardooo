const colors=document.querySelector('#colors')
const stroke=document.getElementById('stroks')
const ctx=canvas.getContext('2d');
const erase=document.querySelector('#erase')
const settings=document.querySelector('#settingBar')
let lastColor;

function changeColor(color){
    ctx.strokeStyle=color;
    lastColor=color
    colors.style.display='none'
}

function eraser(size){
    ctx.strokeStyle='white'
    ctx.lineWidth=size;
    erase.style.display='none'
}
function reset(){
    colors.style.display='none'
    stroke.style.display='none'
    erase.style.display='none'
}
function changeSize(size){

    ctx.lineWidth=size;
    LineSize=size;
    ctx.strokeStyle=lastColor
    stroke.style.display='none'
}

function markerPen(){
    ctx.lineWidth=20
    ctx.strokeStyle='rgba(254, 255, 116, 0.09)'
}

