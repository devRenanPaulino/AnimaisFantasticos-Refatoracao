export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao calback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto
  // incrementa de 0 até o seu número final;
  static incrementarNumero(numero) {
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
  }

  // ativa incrementar número para cada
  // numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o mutationObserver para verificar quando a classe ativo é adicionado ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
