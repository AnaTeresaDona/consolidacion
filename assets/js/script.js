let producto1 = document.getElementById('producto1');
let cantidad1 = document.getElementById('cantidad1');
let precio1 = document.getElementById('precio1');
let producto2 = document.getElementById('producto2');
let cantidad2 = document.getElementById('cantidad2');
let precio2 = document.getElementById('precio2');
let calcular = document.getElementById('calcular');

precio2.addEventListener('change', function(){
    document.getElementById('calcular').style.display ='block';
})

// Opciones: referenciar un id => addEventListener
//          function onclick =>javascript aplicar function
// value =>solo para los atributos input


calcular.addEventListener("click", function(e){
    e.preventDefault();

    /**Validación que sirve para saber si el usuario coloco la info: */

    /**Opción 1: que el usuario no te rompa el código usando if */

    if (cantidad1.value == "" || cantidad2.value == "" || precio1.value == "" || precio2.value ==""){
        alert(`El valor ingresado es incorrecto. Por favor revisa:
        - ¿Estoy usando números?
        - ¿Estoy usando cantidades que existen en la realidad física?
        - ¿Necesito un tiempo para meditar mi respuesta?`);
        return; /**importante Detiene la ejecución del código si se cumple la condición*/
    }

    if (precio1.value < 0 || cantidad2.value < 0  || precio1.value < 0  || precio2.value < 0 ){
        alert(`El valor ingresado es incorrecto. Por favor revisa:
        - ¿Estoy usando números?
        - ¿Estoy usando cantidades que existen en la realidad física?
        - ¿Necesito un tiempo para meditar mi respuesta?`);
        return; /**importante Detiene la ejecución del código si se cumple la condición*/
    }

    // document.getElementById('calcular').style.display='block';
    
    let total1 = cantidad1.value*precio1.value;
    let total2 = cantidad2.value*precio2.value;
    let total = total1 + total2;
    document.getElementById('total1').value = total1;
    document.getElementById('total2').value =total2;

    document.getElementById('total').innerHTML = total;
    console.log(cantidad1.value);

})



// Necesito que cantidad sea = presente, numero entero, que sea >=1
// Necesito que precio sea = presente, numero entero, que sea >=1