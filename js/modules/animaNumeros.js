export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const duracao = 1000;
      const frameRate = 16;
      const totalFrames = duracao / frameRate;
      const incremento = Math.max(1, Math.ceil(total / totalFrames));

      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        if (start >= total) {
          numero.innerText = total;
          clearInterval(timer);
        } else {
          numero.innerText = start;
        }
      }, frameRate);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}