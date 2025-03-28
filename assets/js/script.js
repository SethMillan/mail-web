
const editor = document.getElementById('editor');
const boldBtn = document.getElementById('boldBtn');
const underlineBtn = document.getElementById('underlineBtn');
const uppercaseBtn = document.getElementById('uppercaseBtn');
const noText = document.querySelectorAll('.noText');
const btnEnviar =document.getElementById('btnSend');

// Función para aplicar formato negrita
boldBtn.addEventListener('click', () => {
    document.execCommand('bold', false, null);
});

// Función para aplicar subrayado
underlineBtn.addEventListener('click', () => {
    document.execCommand('underline', false, null);
});

noText.forEach(element =>{
    element.addEventListener('click', () => {
        element.style.display = 'none';
    });
    
    document.addEventListener('mouseup', () => {
        if(element.parentElement.innerText.trim()===''){
            element.style.display = 'block';
        }
    });
})

// Función para convertir el texto en mayúsculas
uppercaseBtn.addEventListener('click', () => {
    let selectedText = window.getSelection().toString();
    if (selectedText) {
        document.execCommand('insertText', false, selectedText.toUpperCase());
    } else {
        editor.innerHTML = editor.innerHTML.toUpperCase();
    }
});

btnEnviar.addEventListener('click', () => {
    alert('¡Mensaje enviado!');
  });

// Borrar texto de ayuda cuando el usuario empiece a escribir
editor.addEventListener('focus', () => {
    if (editor.innerText.trim() === "Escribe tu texto aquí .") {
        editor.innerText = "";
    }else{
        editor.inn
    }
});

// Mantener el foco en el editor después de hacer clic en un botón
const buttons = document.querySelectorAll('.toolbar button');
buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
});
