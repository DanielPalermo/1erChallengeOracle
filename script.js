function imprimir(frase){
    document.write(frase);
}


// function encriptar(palabra){
//     lista_letras = ["a","e","i","o","u"];

//     for(var i=0;i<palabra.length;i++){
//         if(palabra[i]=="a"){
//             imprimir(lista_letras[0]+"i ");
//         }else if(palabra[i]=="e"){
//             imprimir(lista_letras[1]+"nter ");
//         }else if (palabra[i] == "i"){
//             imprimir(lista_letras[2] + "mes ");
//         }else if (palabra[i] == "o"){
//             imprimir(lista_letras[3] + "ber ");
//         }else if (palabra[i] == "u"){
//             imprimir(lista_letras[4] + "fat ");
//         }
//     }
// }


// imprimir(encriptar("hola a todos amigos como estan"))

function validacion(frase){
    for(var i=0; i<frase.length; i++){
        if(!((frase.charCodeAt(i)>96 && frase.charCodeAt(i)<123) || (frase.charCodeAt(i)>47 && frase.charCodeAt(i)<58))){
            alert("Se ingreso letra mayuscula, tilde o caracter. \n\nNo se encriptará");
        }
    }
}


function encriptar(palabra){
    palabra=(palabra.replaceAll("e", "enter"));
    palabra=(palabra.replaceAll("i","imes"));
    palabra=(palabra.replaceAll("a", "ai"));
    palabra=(palabra.replaceAll("o", "ober"));
    palabra=(palabra.replaceAll("u", "ufat"));
    return palabra;
}

function desEncriptar(palabra){
    palabra=(palabra.replaceAll("enter", "e"));
    palabra=(palabra.replaceAll("imes","i"));
    palabra=(palabra.replaceAll("ai", "a"));
    palabra=(palabra.replaceAll("ober", "o"));
    palabra=(palabra.replaceAll("ufat", "u"));
    return palabra;
}

function printDOM (msg){
    const sectionAside =document.querySelector(".section-aside");
    sectionAside.innerHTML=`
        <div class= "results">
            <div class="text-result">${msg}</div>
            <button id="btn-copiar" class="section-btn"> Copiar</button>
        </div>
    `
}


let text = document.querySelector("#textarea");

let img = document.querySelector(".img");

let text_2 = document.querySelector("#textarea2");

let aviso= document.querySelector("#aviso");



let encriptador = document.querySelector("#btn_1");
encriptador.addEventListener("click",()=>{
    text_2.value=encriptar(text.value);
    img.style.display = "none";
    aviso.style.display="none";
    printDOM(encriptar(text.value));
    document.getElementById("btn-copiar").addEventListener("click",function(){
    
        let text=document.querySelector(".text-result").textContent;
    
        navigator.clipboard.writeText(text).then(()=>{
    
            console.log("copiado");
        })
    })
});


let desencriptador = document.querySelector("#btn_2");
desencriptador.addEventListener("click",()=>{
    text_2.value=desEncriptar(text.value);
    img.style.display = "none";
    aviso.style.display="none";
    printDOM(desEncriptar(text.value));
    document.getElementById("btn-copiar").addEventListener("click",function(){
    
        let text=document.querySelector(".text-result").textContent;
    
        navigator.clipboard.writeText(text).then(()=>{
    
            console.log("copiado");
        })
    })
});

