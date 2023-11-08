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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="Player X Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
        document.getElementById("text").textContent="AI Won"
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
				.innerHTML = ""; 
		} 
		else { 
			document.getElementById('text') 
				.innerHTML = ""; 
		} 
	} 
   
}
function reset() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 
flag=1;
let arr=["b1","b2","b3","b4","b5","b6","b7","b8","b9"]
function myfunction1(){
    if(flag===1){
        b1.value="X";
        document.getElementById("b1").disabled=true;
    }
    arr=arr.filter(function(item){
       return item!=="b1"
    })
    let l=arr.length
    console.log(l)
    console.log(arr)
    let y=Math.floor(Math.random()*l)
    let ele=arr[y]
     arr=arr.filter(function(item){
       return item!==ele
    })
    console.log(ele)
    document.getElementById(ele).value="O"
    document.getElementById(ele).disabled=true;
}
function myfunction2(){
    if(flag===1){
        b2.value="X";
        document.getElementById("b2").disabled=true;
    }
    arr=arr.filter(function(item){
        return item!=="b2"
     })
     let l=arr.length
     console.log(l)
    console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;

}
function myfunction3(){
    if(flag===1){
        b3.value="X";
        document.getElementById("b3").disabled=true;
    }
    arr=arr.filter(function(item){
        return item!=="b3"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
}
function myfunction4(){
    if(flag===1){
        b4.value="X";
        document.getElementById("b4").disabled=true;
        
    }
    
    arr=arr.filter(function(item){
        return item!=="b4"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;

}
function myfunction5(){
    if(flag===1){
        b5.value="X";
        document.getElementById("b5").disabled=true;
       
    }

    arr=arr.filter(function(item){
        return item!=="b5"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
}
function myfunction6(){
    if(flag===1){
        b6.value="X";
        document.getElementById("b6").disabled=true;
      
    }
    arr=arr.filter(function(item){
        return item!=="b6"
     })
   
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
}
function myfunction7(){
    if(flag===1){
        b7.value="X";
        document.getElementById("b7").disabled=true;
       
    }

    arr=arr.filter(function(item){
        return item!=="b7"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
}
function myfunction8(){
    if(flag===1){
        b8.value="X";
        document.getElementById("b8").disabled=true;

    }
    arr=arr.filter(function(item){
        return item!=="b8"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
 
}
function myfunction9(){
    if(flag===1){
        b9.value="X";
        document.getElementById("b9").disabled=true;

    }
    arr=arr.filter(function(item){
        return item!=="b9"
     })
     let l=arr.length
     console.log(l)
     console.log(arr)
     let y=Math.floor(Math.random()*l)
     let ele=arr[y]
     console.log(ele)
     arr=arr.filter(function(item){
       return item!==ele
    })
     document.getElementById(ele).value="O"
     document.getElementById(ele).disabled=true;
   
}


