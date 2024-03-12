//Arrays//
//COLECCION DE OBJETOS DEFINIDA POR CORCHETES Y SEPARANDO LOS ELEMENTOS CON COMAS

const animales = ["Leon", "Foca", "Elefante", "Mono", "Aguila"];

// const solamente guarda la dirección de memoria de inicio del array
// evita sobreescribirlo

console.log(animales);
console.log(animales.length);
console.log(animales.indexOf("Foca"));

animales.push("Ballena");
console.log(animales);

animales.push("Delfín");
console.log(animales);

animales.pop();
console.log(animales);

animales[3] = "Pantera";
console.log(animales);

console.log(animales.length);

for(let i=(animales.length-1); i>=0;i--){
    console.log("Animal "+(i+1)+": "+animales[i]);
    document.getElementById("animals").innerHTML += "Animal "+(i+1)+": "+animales[i]+"<br>";
}
