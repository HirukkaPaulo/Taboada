function multiplicar(){
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    if (num1.value.lenght == 0 || num2.value.length == 0 ){
         window.alert('Digite algum valor no(s) campo(s) em branco')
    }
    else { 
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var x = 0
        var r = ''
        var res = document.getElementById('resposta')
        res.innerHTML = `A tabuada do é ${n1} é: <br>`  
        do {
            r = n1*x
            res.innerHTML += `${n1} x ${x} = ${r} <br>`
            x++
        } while (x <= n2)
        }
    }
