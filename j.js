function star() {
  const invaliu = document.getElementById("size").value;
  let output = '';
    for (let i = 1; i <= invaliu; i++) 
    {let row = ''
    for (let j = 1; j <= invaliu; j++) 
    {row += "* ";}
  output += row + '<br>';}
  document.getElementById("output").innerHTML = output;
  }









  function stars() {
  const invaliu = document.getElementById("sizes").value;
  let output = '';
    for (let i = 1; i <= invaliu; i++) 
  {let row = ''
    for (let j = 1; j <= i; j++) 
  {row += `* `;}
  output += row + '<br>';}
  document.getElementById("output").innerHTML = output;
}

function star3() {
const invaliu = document.getElementById("size3").value;
let output = '';
  for (let i = 1; i <=invaliu; i++ )
{let row = ''
  for (let j = 1; j <= i; j++)
{row += `*     `;}
output += row + '<br>';}
document.getElementById("output").innerHTML = output;
} 

