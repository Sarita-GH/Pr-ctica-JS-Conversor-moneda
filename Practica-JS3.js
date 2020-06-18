function reset() {
    document.getElementById("resultado").innerText="";
}
function convertir() {
    let moneda1=window.document.forms[0].elements[0].value;
    let moneda2=window.document.forms[0].elements[1].value;
    let cantidad=window.document.forms[0].elements[2].value;
    if (moneda1=="Euros" && moneda2=="Euros") {
        let result=parseFloat(cantidad)*1
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Euros" && moneda2=="Libras") {
        let result=parseFloat(cantidad)/1.12
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Euros" && moneda2=="Dólares") {
        let result=parseFloat(cantidad)*1.12
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Euros" && moneda2=="Rupias") {
        let result=parseFloat(cantidad)*85.66
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Libras" && moneda2=="Euros") {
        let result=parseFloat(cantidad)*1.12
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Libras" && moneda2=="Libras") {
        let result=parseFloat(cantidad)*1
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Libras" && moneda2=="Dólares") {
        let result=parseFloat(cantidad)*1.25
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Libras" && moneda2=="Rupias") {
        let result=parseFloat(cantidad)*95.53
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Dólares" && moneda2=="Euros") {
        let result=parseFloat(cantidad)/1.12
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Dólares" && moneda2=="Libras") {
        let result=parseFloat(cantidad)/1.25
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Dólares" && moneda2=="Dólares") {
        let result=parseFloat(cantidad)*1
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Dólares" && moneda2=="Rupias") {
        let result=parseFloat(cantidad)*76.22
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Rupias" && moneda2=="Euros") {
        let result=parseFloat(cantidad)/85.57
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Rupias" && moneda2=="Libras") {
        let result=parseFloat(cantidad)/95.53
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Rupias" && moneda2=="Dólares") {
        let result=parseFloat(cantidad)/76.22
        document.getElementById("resultado").innerHTML=result;
    }
    else if (moneda1=="Dólares" && moneda2=="Rupias") {
        let result=parseFloat(cantidad)*1
        document.getElementById("resultado").innerHTML=result;
    }
}