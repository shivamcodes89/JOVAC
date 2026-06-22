// jab mujhe pta ho ki loop kaha se start hoga, kaha tak jana hai, kitna gap hoga to "for" loop use karege.
for(let i=0; i<10; i++){
  console.log(i);
}

// jab pta na ho ki loop kitni baar chalega to while loop use karte hai
// ye code sirf brawser me chlega kyuki promt usi me chalta hai
let i = "";
while(i != "12345"){
  i = prompt("enter password");
  if(i === "12345"){
    console.log("login")
    break;
  }
}