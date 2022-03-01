function game()
{
var r=(Math.round(Math.random()*10)%6)+1;
var m=r.toString();
var r1=(Math.round(Math.random()*10)%6)+1;
var n=r1.toString();
document.querySelector(".firstdice").setAttribute("src","dice/dice"+m+".png");
document.querySelector(".seconddice").setAttribute("src","dice/dice"+n+".png");
document.querySelector("h1").classList.add("invisible");
if(m>n)
{
  document.querySelector("h1").innerHTML="first player wins";
}
else if(n>m)
{
  document.querySelector("h1").innerHTML="second player wins";
}

else
{
    document.querySelector("h1").innerHTML="DRAW";
}
}
