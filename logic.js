function myfunction(){
    let b1=document.getElementById("b1").value;
    let b2=document.getElementById("b2").value;
    let b3=document.getElementById("b3").value;
    let b4=document.getElementById("b4").value;
    let b5=document.getElementById("b5").value;
    let b6=document.getElementById("b6").value;
    let b7=document.getElementById("b7").value;
    let b8=document.getElementById("b8").value;
    let b9=document.getElementById("b9").value;

    let b1btn=document.getElementById("b1");
    let b2btn=document.getElementById("b2");
    let b3btn=document.getElementById("b3");
    let b4btn=document.getElementById("b4");
    let b5btn=document.getElementById("b5");
    let b6btn=document.getElementById("b6");
    let b7btn=document.getElementById("b7");
    let b8btn=document.getElementById("b8");
    let b9btn=document.getElementById("b9");

    if(b1==="X" && b2==="X" && b3==="X"){
        document.getElementById("text").textContent="Player X won"
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b1btn.style.color="red"
        b2btn.style.color="red"
        b3btn.style.color="red"
    }
    else if(b1==="X" && b4==="X" && b7==="X"){
        document.getElementById("text").textContent="Player X won"
        b2btn.disabled=true;
        b3btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b1btn.style.color="red"
        b4btn.style.color="red"
        b7btn.style.color="red"
    }
    else if(b1==="X" && b5==="X" && b9==="X"){
        document.getElementById("text").textContent="Player X won"
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b1btn.style.color="red"
        b5btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b2==="X" && b5==="X" && b8==="X"){
        document.getElementById("text").textContent="Player X won"
        b1btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b9btn.disabled=true;
        b2btn.style.color="red"
        b5btn.style.color="red"
        b8btn.style.color="red"
    }
    else if(b3==="X" && b5==="X" && b7==="X"){
        document.getElementById("text").textContent="Player X won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b3btn.style.color="red"
        b5btn.style.color="red"
        b7btn.style.color="red"
    }
    else if(b3==="X" && b6==="X" && b9==="X"){
        document.getElementById("text").textContent="Player X won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b3btn.style.color="red"
        b6btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b7==="X" && b8==="X" && b9==="X"){
        document.getElementById("text").textContent="Player X won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.style.color="red"
        b8btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b4==="X" && b5==="X" && b6==="X"){
        document.getElementById("text").textContent="Player X won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b4btn.style.color="red"
        b5btn.style.color="red"
        b6btn.style.color="red"
    }
    //
    else if(b1==="O" && b2==="O" && b3==="O"){
        document.getElementById("text").textContent="Player O won"
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b1btn.style.color="red"
        b2btn.style.color="red"
        b3btn.style.color="red"
    }
    else if(b1==="O" && b4==="O" && b7==="O"){
        document.getElementById("text").textContent="Player O won"
        b2btn.disabled=true;
        b3btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b1btn.style.color="red"
        b4btn.style.color="red"
        b7btn.style.color="red"
    }
    else if(b1==="O" && b5==="O" && b9==="O"){
        document.getElementById("text").textContent="Player O won"
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b1btn.style.color="red"
        b5btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b2==="O" && b5==="O" && b8==="O"){
        document.getElementById("text").textContent="Player O won"
        b1btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b9btn.disabled=true;
        b2btn.style.color="red"
        b5btn.style.color="red"
        b8btn.style.color="red"
    }
    else if(b3==="O" && b5==="O" && b7==="O"){
        document.getElementById("text").textContent="Player O won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b3btn.style.color="red"
        b5btn.style.color="red"
        b7btn.style.color="red"

    }
    else if(b3==="O" && b6==="O" && b9==="O"){
        document.getElementById("text").textContent="Player O won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b3btn.style.color="red"
        b6btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b7==="O" && b8==="O" && b9==="O"){
        document.getElementById("text").textContent="Player O won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.style.color="red"
        b8btn.style.color="red"
        b9btn.style.color="red"
    }
    else if(b4==="O" && b5==="O" && b6==="O"){
        document.getElementById("text").textContent="Player O won"
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;
        b4btn.style.color="red"
        b5btn.style.color="red"
        b6btn.style.color="red"
    }
    else if((b1==="X" || b1==='O') && (b2==="X" || b2==='O') &&
    (b3==="X" || b3==='O') && (b4==="X" || b4==='O') &&
    (b5==="X" || b5==='O') && (b6==="X" || b6==='O') &&
    (b7==="X" || b7==='O') && (b8==="X" || b8==='O') &&
    (b9==="X" || b9==='O')){
        document.getElementById("text").textContent="Match Tie"
    }
    else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('text') 
				.innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('text') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
   
}
function reset() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 
flag=1;

function myfunction1(){
    if(flag===1){
        b1.value="X";
        document.getElementById("b1").disabled=true;
        flag=0;
    }
    else{
        b1.value="O";
        document.getElementById("b1").disabled=true;
        flag=1;
    }
}
function myfunction2(){
    if(flag===1){
        b2.value="X";
        document.getElementById("b2").disabled=true;
        flag=0;
    }
    else{
        b2.value="O";
        document.getElementById("b2").disabled=true;
        flag=1;
    }
}
function myfunction3(){
    if(flag===1){
        b3.value="X";
        document.getElementById("b3").disabled=true;
        flag=0;
    }
    else{
        b3.value="O";
        document.getElementById("b3").disabled=true;
        flag=1;
    }
}
function myfunction4(){
    if(flag===1){
        b4.value="X";
        document.getElementById("b4").disabled=true;
        flag=0;
    }
    else{
        b4.value="O";
        document.getElementById("b4").disabled=true;
        flag=1;
    }
}
function myfunction5(){
    if(flag===1){
        b5.value="X";
        document.getElementById("b5").disabled=true;
        flag=0;
    }
    else{
        b5.value="O";
        document.getElementById("b5").disabled=true;
        flag=1;
    }
}
function myfunction6(){
    if(flag===1){
        b6.value="X";
        document.getElementById("b6").disabled=true;
        flag=0;
    }
    else{
        b6.value="O";
        document.getElementById("b6").disabled=true;
        flag=1;
    }
}
function myfunction7(){
    if(flag===1){
        b7.value="X";
        document.getElementById("b7").disabled=true;
        flag=0;
    }
    else{
        b7.value="O";
        document.getElementById("b7").disabled=true;
        flag=1;
    }
}
function myfunction8(){
    if(flag===1){
        b8.value="X";
        document.getElementById("b8").disabled=true;
        flag=0;
    }
    else{
        b8.value="O";
        document.getElementById("b8").disabled=true;
        flag=1;
    }
}
function myfunction9(){
    if(flag===1){
        b9.value="X";
        document.getElementById("b9").disabled=true;
        flag=0;
    }
    else{
        b9.value="O";
        document.getElementById("b9").disabled=true;
        flag=1;
    }
}
var data=window.location.search
var params=new URLSearchParams(data);
let x=params.get("name1")
let y=params.get("name2")
console.log(x)
console.log(y)
document.getElementById("player1").textContent=x;
document.getElementById("player2").textContent=y;


