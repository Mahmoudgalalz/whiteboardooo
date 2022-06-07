
const canvas=document.querySelector('#canvas')
const ctx=canvas.getContext('2d');
const colors=document.querySelector('#colors')
const stroke=document.querySelector('#stroks')
const erase=document.querySelector('#erase')
const body=document.querySelector('body');
body.style.cursor='cell'
let col='black';


// coloring
function colorPanel(){
    body.style.cursor='cell'
    ctx.lineWidth=10;
    if(colors.style.display==='none')
    colors.style.display='block'
    else
    colors.style.display='none'
}
function changeColor(color){
    ctx.strokeStyle=color;
    col=color
    colors.style.display='none'
}

//sizing

function sizePanel(){
    body.style.cursor='cell'
    ctx.lineWidth=10;
    ctx.strokeStyle=col;
    if(stroke.style.display==='none')
    stroke.style.display='block'
    else
    stroke.style.display='none'
}
function changeSize(size){
    ctx.lineWidth=size;
    stroke.style.display='none'
}


//erasing
function eraser(size){
    ctx.strokeStyle='white'
    ctx.lineWidth=size;
    erase.style.display='none'
}
function eraserPanel(){
    body.style.cursor='not-allowed'
    ctx.strokeStyle='white'
    if(erase.style.display==='none')
    erase.style.display='block'
    else
    erase.style.display='none'
}

//clearing the whole whiteboard
document.getElementById('delete').addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

// rest on draw
function reset(){
    colors.style.display='none'
    stroke.style.display='none'
    erase.style.display='none'
}
// right click disabled
window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })



// draw
window.addEventListener('load',()=>{
    //auto resizing 
    canvas.height=window.innerHeight-2;
    canvas.width=window.innerWidth-2;
    
    //variables 
    let painting =false;

    function startPostion(e){
        painting=true;
        draw(e)
    }

    function finishedPostion(){
        painting=false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting)return;
        ctx.lineCap='round'

        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke();   
    }
    //event listeners 
    canvas.addEventListener('mousedown',startPostion)
    canvas.addEventListener('mouseup',finishedPostion)
    canvas.addEventListener('mousemove',draw)
})