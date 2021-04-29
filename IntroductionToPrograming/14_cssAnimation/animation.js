let header=document.getElementById('header');
let degree=0;
let opacity=1.0;

function rotateHeader() {
  opacity-=0.01;
  if(opacity<0) opacity+=1.0;
  degree+=6;
  degree%=360;
  if((0<=degree&&degree<90)||(270<=degree&&degree<360)) {
    header.className='face';
  } else {
    header.className='back';
  }
  header.style.opacity=opacity;
  header.style.transform='rotateX('+degree+'deg)';
}
setInterval(rotateHeader,20);