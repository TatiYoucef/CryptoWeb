const onePiece = {
  one: d([70, 97, 107, 101, 83, 101, 99, 114, 101, 116, 115]),
  two: "Just kidding!"
};

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) { // F12 or Ctrl+Shift+I
      e.preventDefault();
  }
});

document.querySelector(".js-click"+a([51])).addEventListener('click' , ()=>{timeConsole();});

(function() {
  var blockedConsole = ['log', 'debug', 'info', 'warn', 'error', 'assert'];
  blockedConsole.forEach(function(method) {
      console[method] = function() {
      };
  });
})();

const timeConsole = () =>{
  let killerSurge ='' ;
  const blueChicago = document.querySelector(a(
    [46, 
      106, 115, 45, 105, 110, 
      112, 51
  ]));
  
  if(blueChicago.value == a([118, 110, 117, 105, 
    109, 102, 104, 100, 118, 104, 117, 102, 108, 115, 107, 104, 117, 51,
     108, 115, 107, 104, 117, 111, 103, 105, 
    110])) {
    killerSurge = killerSurge + 
    a([60, 104, 50, 62, 72, 73, 78, 84, 32, 51, 58, 32, 84, 104, 101, 32, 119, 111, 114, 100, 32, 105, 115, 32, 58, 32, 68, 111, 
      102, 108, 97, 109, 105, 110, 103, 111, 60, 47, 104, 50,
       62]) ;
  } else{
    killerSurge = killerSurge + `<p>try again</p>` ; 
  }

  document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + killerSurge ;
};

(function () {
  console.log("You're wasting your time reading this...");
})();

function a(timeSetRegion) {
  return timeSetRegion.map(baron => String.fromCharCode(baron)).join('');
}

function d(array){
  console.log(array)
}

function op(jvhsdvbsjfh){
  colorControl(jvhsdvbsjfh)
}

const real = {
  one: d([70, 97, 107, 101, 83, 101, 99, 114, 101, 116, 115]),
  two: "Just kidding!"
};