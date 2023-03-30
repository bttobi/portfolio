const isInView = () => {
  const articleElems = [...document.getElementsByClassName("article")];
  const buttons = [...document.getElementsByClassName("nav-button")];
  articleElems.forEach((el, index)=>{
    const bounding = el.getBoundingClientRect();
    buttons[index].classList.remove("active-nav");
    if(bounding.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) && //checking if element is in view
      bounding.bottom >= (window.innerHeight/2 || document.documentElement.clientHeight/2)){
        buttons[index].classList.add("active-nav");
    }
  });
}

export default isInView;