
const canvas=document.querySelector('#canvas')
const ctx=canvas.getContext('2d');
const body=document.querySelector('body');

export let col;
export let LineSize;



function colorPanel(){
    body.style.cursor='cell'
    stroke.style.display='none'
    erase.style.display='none'
    if(colors.style.display==='none')
    {
        ctx.strokeStyle=col
        colors.style.display='block'
    }
    else
    colors.style.display='none'
}


//sizing

function sizePanel(){

    body.style.cursor='cell'
    colors.style.display='none'
    erase.style.display='none'
    ctx.strokeStyle=lastColor;
    if(stroke.style.display==='none'){
        
        stroke.style.display='block'
    }
    
    else
    stroke.style.display='none'
}



//erasing

function eraserPanel(){
    body.style.cursor='not-allowed'
    ctx.strokeStyle='white'
    colors.style.display='none'
    stroke.style.display='none'
    if(erase.style.display==='none')
    erase.style.display='block'
    else
    erase.style.display='none'
}

// rest on draw



export{eraserPanel,sizePanel,colorPanel}