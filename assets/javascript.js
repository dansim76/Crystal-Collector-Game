$(document).ready(function(){

var random = Math.floor(Math.random()*101+19)

$('#randomNumber').text(random);

var jewel1 = Math.floor(Math.random()*11+1)
var jewel2 = Math.floor(Math.random()*11+1)
var jewel3 = Math.floor(Math.random()*11+1)
var jewel4 = Math.floor(Math.random()*11+1)

var win = 0;
var loses =0;
var totalScore = 0;

 $('#win').text(win);
 $('#loses').text(loses);

 $('#one').on('click',function(){
totalScore += jewel1;
$('#finalTotal').text(totalScore);
if(totalScore == random){
 	winner();
 }
 else if(totalScore >random){

 	loser();
 }

 });


 $('#two').on('click',function(){
totalScore += jewel2;
$('#finalTotal').text(totalScore);
if(totalScore == random){
 	winner();
 }
 else if(totalScore >random){

 	loser();
 }

 });

 $('#three').on('click',function(){
totalScore += jewel3;
$('#finalTotal').text(totalScore);
if(totalScore == random){
 	winner();
 }
 else if(totalScore >random){

 	loser();
 }

 });

 $('#four').on('click',function(){
totalScore += jewel4;
$('#finalTotal').text(totalScore);
if(totalScore == random){
 	winner();
 }
 else if(totalScore >random){

 	loser();
 }

 });
/* if(totalScore == random){
 	winner();
 }
 else if(totalScore >random){

 	loser();
 }*/


 function reset(){
 	totalScore = 0;
 	jewel1 = Math.floor(Math.random()*11+1)
    jewel2 = Math.floor(Math.random()*11+1)
    jewel3 = Math.floor(Math.random()*11+1)
    jewel4 = Math.floor(Math.random()*11+1)
    

    random = Math.floor(Math.random()*101+19)
     $('#randomNumber').text(random);
     $('#finalTotal').text(totalScore);



 }

function winner(){
win++;
$('#wins').text(win);
reset()

}
function loser(){
loses--;
$('#loses').text(loses);
reset()
}






});