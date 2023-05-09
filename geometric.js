const myModule = (()=>{
    'use strict'
    const pc = (side) => side * 4;
    const ac = (side) => side * side;

    //Botones de nuestro proyecto
    const btnpcu = document.getElementById('btnpcu');
    const btnacu = document.getElementById('btnacu');
    const btnpt = document.getElementById('btnpt');
    const btnat = document.getElementById('btnat');
    const btndci = document.getElementById('btndci');
    const btnaci = document.getElementById('btnaci');
    const btnpci = document.getElementById('btnpci');

    btnpcu.addEventListener('click',()=>{
        let inputSide = document.getElementById('sidec');//obtener la informacion de ese elemento id, cuando obtenemos los valores son de tipo String
        let value = Number(inputSide.value);//Hacemos una conversión de String a y recuperamos el valor numerico
        const result = `El perimetro del cuadrado es: ${pc(value)} cm`;
        document.getElementById('result').innerText = result;
    });
        

    btnacu.addEventListener('click', function(){
        let inputSide = document.getElementById('sidec');
        let value = Number(inputSide.value);//Hacemos una conversión de String a y recuperamos el valor numerico
        const result = `El área del cuadrado es: ${ac(value)} cm`;
        document.getElementById('result').innerText = result;//modifica el resultado del div answer
    });
    

    //triangulo
    btnpt.addEventListener('click',function(l1, l2, l3){
        l1 = document.getElementById('side1');
        let value1 = Number(l1.value);//convertimos de string a numerico
        l2 = document.getElementById('side2');
        let value2 = Number(l2.value);//convertimos de string a numerico
        l3 = document.getElementById('side3');
        let value3 = Number(l3.value);//convertimos de string a numerico
        let pt = value1 + value2 + value3;
        const result = `El perimetro del triangulo es: ${pt} cm`;
        document.getElementById('result').innerText = result;
    });

    btnat.addEventListener('click', function(base, altura){
        base = document.getElementById('side4');
        altura = document.getElementById('side5');
        let side4 = Number(base.value);
        let side5 = Number(altura.value);
        let area = (side4 * side5)/2;
        const result = `El área del triangulo es: ${area} cm<sup>2</sup>`;
        document.getElementById('result').innerHTML = result;
    });


    btnpci.addEventListener('click', function(radio){
        radio = document.getElementById('radioc');
        let radioc = Number(radio.value);
        let pcir = 2 * Math.PI * radioc;
        const result = `El perimetro del circulo es: ${pcir} cm`;
        document.getElementById('result').innerText = result;
    });

    btnaci.addEventListener('click', function(radio){
        radio = document.getElementById('radioc');
        let radioc = Number(radio.value);
        let area = Math.PI * Math.pow(radioc, 2);
        const result = `El área del circulo es: ${area} cm<sup>2</sup>`;
        document.getElementById('result').innerHTML = result;
    });

    btndci.addEventListener('click', function(radio){
        radio = document.getElementById('radioc');
        let radioc = Number(radio.value);
        let diametro = 2 * radioc;
        const result = `El diámetro del circulo es: ${diametro} cm<sup>2</sup>`;
        document.getElementById('result').innerHTML = result;
    });
})();


