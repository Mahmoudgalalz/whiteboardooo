import {saveCanvas,loadCanvas,clearCanvas} from './store.js';
import {eraserPanel,sizePanel,colorPanel,col,SettingBar} from './controles.js'
export const canvas=document.querySelector('#canvas')
export const ctx=canvas.getContext('2d');
const body=document.querySelector('body');
const panelColor=document.querySelector('#colorPanel')
const panelSize=document.querySelector('#size');
const panelEraser=document.querySelector('#eraser')
const settingBar=document.querySelector('#settings')
const key="Drawing"
body.style.cursor='cell'


// tools listener via controles
settingBar.addEventListener('click',SettingBar)
panelColor.addEventListener('click', colorPanel);
panelSize.addEventListener('click', sizePanel);
panelEraser.addEventListener('click', eraserPanel);
canvas.addEventListener('mousedown', reset);

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
        saveCanvas(); 
    }
    //event listeners 
    loadCanvas();
    canvas.addEventListener('mousedown',startPostion)
    canvas.addEventListener('mouseup',finishedPostion)
    canvas.addEventListener('mousemove',draw)

    
    // touchable devices listener
    // Set up touch events for mobile, etc
    canvas.addEventListener("touchstart", function (e) {
    let mousePos = getTouchPos(canvas, e);
    let touch = e.touches[0];
    let mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
        });
    canvas.dispatchEvent(mouseEvent);
        }, false);
    
    
    canvas.addEventListener("touchend", function (e) {
    let mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
    }, false);


    canvas.addEventListener("touchmove", function (e) {
    let touch = e.touches[0];
    let mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
        });
    canvas.dispatchEvent(mouseEvent);
        }, false);

// Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
    let rect = canvasDom.getBoundingClientRect();
    return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
        };
    }

    

})


// Prevent scrolling when touching the canvas
canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();

}, false);
canvas.addEventListener("touchend", function (e) {

    e.preventDefault();

}, false);
canvas.addEventListener("touchmove", function (e) {

    e.preventDefault();
}, false);

//clearing the whole whiteboard and clear the local storage
document.getElementById('delete').addEventListener('click',()=>{
    canvas.width=canvas.width;
    changeSize(5)
    changeColor(col)
    clearCanvas(key)
})


