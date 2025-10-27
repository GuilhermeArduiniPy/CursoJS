export default function iniAccordion() {
  const accordionItem = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
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
