function init(){
//add your javascrip between these two lines of code
 
  var yourName = 'Adrian Zaremba'; // <-- replace with your own name
 
  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');
 
  button.addEventListener('click', function () {
    var text = input.value;
 
    // Alert with your name and a colon before the text box contents
    alert(yourName + ': ' + text);
 
    // Update h2 with the exact contents of the text box
    output.textContent = text;
  });
 
//add your javascrip between these two lines of code
}
 
window.addEventListener('load', init);
 
