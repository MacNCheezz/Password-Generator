const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let n1 = document.querySelector("#p1");
let n2 = document.querySelector("#p2");

// function copy() {
//   const storage1 = document.createElement('textarea');
//   const storage2 = document.createElement('textarea');

//   n1.addEventListener('click', function() {
//     storage1.value = n1.innerHTML;
//     n1.appendChild(storage1);
//     storage1.select();
//     storage1.setSelectionRange(0, 99999); //mobile
//     document.execCommand('copy');
//     n1.removeChild(storage1);
//     // console.log('Button clicked!');
//   });
  
//   n2.addEventListener('click', function() {
//     storage2.value = n2.innerHTML;
//     n2.appendChild(storage2);
//     storage2.select();
//     storage2.setSelectionRange(0, 99999); //mobile
//     document.execCommand('copy');
//     n2.removeChild(storage2);
//     // console.log('Button clicked!');
//   });
  
// } 


function randomize() {
  let r1 = "";
  let r2 = "";
  for (let i = 0; i < 15; i++) {
    r1 += characters[Math.floor(Math.random()*characters.length)];
    r2 += characters[Math.floor(Math.random()*characters.length)];
  }
  // console.log(r1);
  // console.log(r2);
  n1.textContent = r1;
  n1.value = r1;
  n2.textContent = r2;
  n2.value = r2;
}


