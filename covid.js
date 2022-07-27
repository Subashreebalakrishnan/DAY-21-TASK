async function popu()
{

var cc = document.getElementById('box').value 
let data1 = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)
let res1 = await data1.json()

console.log(res1)

let index = res1.length-1;

var result = res1[index].Active;
var aa = res1[index].Confirmed;
var bb = res1[index].Deaths;


document.getElementById("active").innerText=`Total Active Cases:${result}`;
document.getElementById("confirmed").innerText=`Total Confirmed Cases:${aa}`;
document.getElementById("death").innerText=`Total Death Cases:${bb}`;

}
