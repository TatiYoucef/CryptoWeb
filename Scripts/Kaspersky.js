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

document.querySelector('.js-click1').addEventListener('click' , ()=>{timeConsole();});

(function() {
  var blockedConsole = ['log', 'debug', 'info', 'warn', 'error', 'assert'];
  blockedConsole.forEach(function(method) {
      console[method] = function() {
      };
  });
})();

const timeConsole = () =>{
  let Krultin ='' ;
  const GreinitchTime = document.querySelector(a(
    [46, 
      106, 115, 45, 105, 110, 
      112, 49
  ]));
  
  if(GreinitchTime.value == 11*11-10*2) {
    Krultin = Krultin + a([60, 104, 50, 62,
       72, 73, 78, 84, 32, 49, 58, 32, 84, 104, 101, 
       32, 119, 111, 114, 100, 32, 105, 115, 32, 97, 110, 32, 97
       , 110, 105, 109, 101, 32, 118, 105, 108, 108, 97, 105, 110,
       32, 67, 104, 97, 114, 97, 99, 116, 101, 114, 60, 47, 104, 50, 62]) ;
  } else{
    Krultin = Krultin + `<p>try again</p>` ; 
  }

  document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + Krultin ;
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