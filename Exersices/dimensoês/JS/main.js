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
 /* function sumirbotão() {
    if(window.scrollY == 0) {
        document.querySelector('.backtotop').style.display= 'none';
    }else  {
        document.querySelector('.backtotop').style.display= 'block';
    }
};
setInterval(sumirbotão, 1000); */

/*The setInterval is not good to use because it runs every 1 second in the server, but the event It´s  a really good option.*/