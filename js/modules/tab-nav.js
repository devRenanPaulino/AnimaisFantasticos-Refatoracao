export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("active", direcao);
  }

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add("active");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
