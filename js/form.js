

let cotiza = document.getElementById('cotiza')

   cotiza.addEventListener('submit', calcExpenses)

function calcExpenses(e) {
   e.preventDefault(); 
   let nombrep = document.getElementById('nombrep').value;
   let npaginas = document.getElementById('npaginas').value;
   let sproyecto = document.getElementById('sproyecto').value;
   let pjs = document.getElementById('pjs').value;


   console.log(nombrep,npaginas,sproyecto,pjs)

   let expenses = 2000*parseInt(npaginas)+500*parseInt(sproyecto)+4000*parseInt(pjs);
   let calculo = document.getElementById("calculo");
   calculo.innerHTML = nombrep + "  Este es el monto aproximado: $"+expenses;

    static 
} 