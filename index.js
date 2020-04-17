// initially set to display images
document.querySelector(".img1").setAttribute("src","images/dice6.png");
document.querySelector(".img2").setAttribute("src","images/dice6.png");

// generate random numbers
var randomVariable;
var randomVariable2;
var n=Math.random()*6;
var m=Math.random()*6;
randomVariable=Math.floor(n) + 1;
randomVariable2=Math.floor(m) + 1;


// use random numbers to change image each time box is refreshed
document.querySelector(".img1").setAttribute("src","images/dice"+randomVariable+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomVariable2+".png");


// check which dice value is higher to change h1 text
if(randomVariable>randomVariable2){
    document.querySelector("h1").innerHTML="👌Player 1 Wins";
}else if(randomVariable2>randomVariable){
    document.querySelector("h1").innerHTML="👌Player 2 Wins";  
}else{
    document.querySelector("h1").innerHTML="📣Its a draw";
}
