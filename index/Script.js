var radio = document.querySelector(".manual-btn")

var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio' + cont).checked = true
}

window.sr = ScrollReveal({reset: true});

sr.reveal('.portifolio-box, .portifolio-layer', {duration: 1800});


const portfolioBoxes = document.querySelectorAll('.portifolio-box');

function handleScroll() {
  portfolioBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    // Selecionando o elemento '.portifolio-layer' dentro do box
    const layer = box.querySelector('.portifolio-layer');

    if (isInView) {
      // Removendo transição existente (se houver)
      layer.style.transition = '';

      // Animação com delay e duração de 2 segundos
      setTimeout(() => {
        layer.style.transition = 'transform 2s ease-in-out';
        layer.style.transform = 'translateY(0)';
      }, 0);
    } else {
      // Resetando a transformação e transição caso saia da viewport
      layer.style.transform = '';
      layer.style.transition = '';
    }
  });
}

window.addEventListener('scroll', handleScroll);