const links = document.querySelector('.links');
const hamburguer = document.getElementById('hamburguer');
const link = document.querySelectorAll('.links a');
const conten = document.getElementById('conten')

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
