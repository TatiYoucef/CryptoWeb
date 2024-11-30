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

document.querySelector('.js-click2').addEventListener('click' , ()=>{timeConsole();});

(function() {
  var blockedConsole = ['log', 'debug', 'info', 'warn', 'error', 'assert'];
  blockedConsole.forEach(function(method) {
      console[method] = function() {
      };
  });
})();

const timeConsole = () =>{
  let KneeTime ='' ;
  const shool = document.
    querySelector(a(
      [46, 
        106, 115, 45, 105, 110, 
        112, 50
    ]));
  
  if(shool.value == a([79, 78, 69, 32, 80,
     73, 69, 67, 69, 32, 73, 83,
      32, 84, 72, 69, 32, 66, 69,
       83, 84, 32, 65, 78, 73, 77,
        69, 32, 69, 86, 69, 82, 32,
         69, 88, 73, 83, 84, 69, 68
        ])) {
    KneeTime = KneeTime + a([60, 104, 50, 62, 72,
       73, 78, 84, 32
       , 50, 58,
        32, 84, 104,
         105, 115, 32, 118, 105, 108, 108, 97, 105, 110, 32,
          119, 101, 97, 114, 115, 32, 97, 32, 112, 105, 110, 107, 32, 99, 108, 111, 
          97, 99, 107, 60, 47, 104, 50, 62]) ;
  } else{
    KneeTime = KneeTime + `<p>try again</p>` ; 
  }

  document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + KneeTime ;
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