let hamburguer = document.getElementById('hamburguer');
let link = document.querySelectorAll('.links a');
let conten = document.getElementById('conten');



conten.style.display="none";
hamburguer.addEventListener('click', ()=>{
    if(conten.style.display == 'block'){
        conten.style.display = 'none';
        conten.innerHTML = '';
    }else{
      link.forEach(uno =>{
        conten.appendChild(uno)
        conten.classList.add('aparece')
        conten.style.display = 'block';
    })  
    }
    
})
