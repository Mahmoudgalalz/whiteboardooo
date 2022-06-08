const canvas=document.querySelector('#canvas')
const ctx=canvas.getContext('2d');
const key="Drawing"



 function saveCanvas() {
    localStorage.setItem(key, canvas.toDataURL());
  }
  
   function loadCanvas() {
    const dataURL = localStorage.getItem(key);
    const img = new Image();
  
    img.src = dataURL;
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
  }
  
   function clearCanvas() {
    localStorage.removeItem(key);
  }

export{saveCanvas,loadCanvas,clearCanvas}