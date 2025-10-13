function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");

  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); //adicionando ativo no primeiro item para quando entrar na pagina, já aparece descrição inicial do primeiro animal.

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
//Isolamos todo o codigo em uma function e dps chamamos ela.Porque disso? pra nao ter erro caso resolvamos chamar uma const com o mesmo nome, e colocando elas em um bloco, tornamos isso possivel e evitamos o erro.

//Acordion List é quando clica em uma pergunta e ela desliza a resposta rpa baixo. é o que vamos fazer com nosso FAQ. Com a mesma lógica do codigo acima, a ideia é criar uma class "ativo" e isso criar o evento de renderização do nosso css.
function iniAccordion() {
  const accordionItem = document.querySelectorAll(".js-accordion dt");
  const activoClass = "ativo";
  if (accordionItem.length) {
    accordionItem[0].classList.add(activoClass);
    accordionItem[0].nextElementSibling.classList.add(activoClass);

    function activeAcoordion(event) {
      // console.log(this); //Poderiamos suar o event.currentTarget
      this.classList.toggle(activoClass);
      this.nextElementSibling.classList.toggle(activoClass);
    }

    accordionItem.forEach((item) => {
      item.addEventListener("click", activeAcoordion);
    });
  }
}

iniAccordion();

//Adicionando um scroll suave nos links internos

function InitScrollSsuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

InitScrollSsuave();

//Agora, quando enrtar na section por ação de scroll, vai carregar ela lateralmente.
function initAniamcaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAniamcaoScroll();
