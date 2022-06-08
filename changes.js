const colors=document.querySelector('#colors')
const stroke=document.getElementById('stroks')
const ctx=canvas.getContext('2d');
const erase=document.querySelector('#erase')

function changeColor(color){
    ctx.strokeStyle=color;
    col=color
    colors.style.display='none'
}

function eraser(){
    ctx.strokeStyle='white'
    ctx.lineWidth=LineSize;
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
    stroke.style.display='none'
}