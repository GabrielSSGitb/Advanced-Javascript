function opensidemenu() {
   document.querySelector('.sidenav').style.width= '250px';
   document.querySelector('#links').style.display= 'block';
   document.querySelector('svg').style.display= 'none';
   document.querySelector('.sidenav').style.marginRight= '250px';
};
function closesidemenu() {
   document.querySelector('.sidenav').style.marginRight= '0';
   document.querySelector('.sidenav').style.width= '0';
   document.querySelector('#links').style.display= 'none';
   document.querySelector('svg').style.display= 'block';
};