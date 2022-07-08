var container = document.getElementById("calculadora");
var input = document.createElement("input");
var input2 = document.createElement("input");
var label = document.createElement("input");
var resultado = 0;
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button"); 

container.appendChild(input);
container.appendChild(input2);
container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(button4);
container.appendChild(label);

button1.textContent = "+";
button2.textContent = "-";
button3.textContent = "x";
button4.textContent = "/";

button1.addEventListener("click",() => {
    var sum = parseInt(input.value) + parseInt(input2.value);
    resultado = sum;
    label.value = "="+ resultado;
    console.log(sum);
    return sum;
});
button2.addEventListener("click",() => {
    var res = parseInt(input.value) - parseInt(input2.value);
    resultado = res;
    label.value = "="+ resultado;
    console.log(res);
    return res;
});
button3.addEventListener("click",() => {
    var mul = parseInt(input.value) * parseInt(input2.value);
    resultado = mul;
    label.value = "="+ resultado;
    console.log(mul);
    return mul;
});
button4.addEventListener("click",() => {
    var div = parseInt(input.value) / parseInt(input2.value);
    resultado = div;
    label.value = "="+ resultado;
    console.log(div);
    return div;
});