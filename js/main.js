//initializing variables
let addbtn = document.getElementById('addbtn');
let inputfield = document.getElementById('inputfield');
let outputdiv = document.getElementById('outputdiv');
let rmbtn = document.getElementById('rmbtn');

addbtn.addEventListener('click',function () {
  //alert('button clicked thanks');  //to test if the button works
  var divt = document.createElement('div');
  divt.innerHTML = inputfield.value;
  outputdiv.appendChild(divt);
  inputfield.value = "";
  divt.addEventListener('click', function(){

    divt.style.textDecoration='line-through';


  })

  rmbtn.addEventListener('click',function () {
    outputdiv.removeChild(divt);
    
  })

})
