   function loadscroll() {
    document.querySelector('.backtotop').style.display= 'none';
    document.addEventListener('scroll', () => {
     if(window.scrollY == 0) {
        document.querySelector('.backtotop').style.display= 'none';
     }else {
        document.querySelector('.backtotop').style.display= 'block';
     }
})
   };

function backtotop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
 /* 
  the offsetheight and offsetwidth calculates the element´sheight and width.
  the clientwidth and clientheight doesn´t take the scroll of the element, just the content and padding.
  the scrollheight and scrollwidth takes only the content with padding and margin, but doesn´t take the scroll
  
 function sumirbotão() {
    if(window.scrollY == 0) {
        document.querySelector('.backtotop').style.display= 'none';
    }else  {
        document.querySelector('.backtotop').style.display= 'block';
    }
};
setInterval(sumirbotão, 1000); */

/*The setInterval is not good to use because it runs every 1 second in the server, but the event It´s  a really good option.*/
