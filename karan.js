     let img=document.querySelectorAll("img");
     let imageIndex=0;
     for (let i = 0; i < img.length; i++) {
      img[i].style.display = "none";
    }
    img[imageIndex].style.display="block";
    
  document.getElementById("next").onclick=function(){
      ++imageIndex;

      slideimage(imageIndex);

 }
 document.getElementById("prev").onclick=function(){
  --imageIndex;

  slideimage(imageIndex);

}
    
 function slideimage(imageIndex) {
  if(imageIndex>=img.length){
    imageIndex=imageIndex%img.length;
  }
  
  if(imageIndex<0){
    imageIndex=(img.length)-1;
  }

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[imageIndex].style.display="block";
 
 }