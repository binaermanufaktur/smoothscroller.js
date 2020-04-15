
function Smoothscroller(identifier){
	//class to be used to identify smoothscrolling links. defaults to "smoothscroller"
	this.identifier = identifier || 'smoothscroller';

	this.init = function() {

	  //check for smoothScrollTarget query parameter in URL
    let params = window.location.search;
    let splitParams = params.split("&");
    for (let i = 0; i < splitParams.length; i++){
      if  (splitParams[i].includes("smoothScrollTarget")){
        let scrollTarget = splitParams[i].split("=").pop();
        smoothScrollTo(scrollTarget);
        break;
      }
    }

    //check for scrollTarget in sessionStorage
    if (sessionStorage.getItem('smoothScrollTarget')) {
      let scrollTarget = sessionStorage.getItem('smoothScrollTarget');
      sessionStorage.removeItem('smoothScrollTarget');
      smoothScrollTo(scrollTarget);
    }

    //set click events on smoothscrollers
    var smoothscrollers = document.querySelectorAll('.' + this.identifier);
    //add click listener to all smoothscroller links
    for (let i = 0; i < smoothscrollers.length; i++) {
      smoothscrollers[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        let scrollTarget = this.dataset.scrollTarget;
        let path = this.dataset.scrollPath || "/";
        if (path === window.location.pathname) {

          smoothScrollTo(scrollTarget);
        } else {
          sessionStorage.setItem('smoothScrollTarget', scrollTarget);
          window.open(path + params, "_self");
        }
      });
    }
  }
}
export {Smoothscroller};

function smoothScrollTo(scrollTarget) {
  if (typeof scrollTarget == 'undefined') {
    console.log('no scrollTarget for smoothscroller');
    return;
  }
  let target = document.getElementById(scrollTarget);
  if (!target) {
    console.log('target of smoothscroller does not exist');
    return;
  }
  window.scroll({top: target.offsetTop, left: 0, behavior: 'smooth'});
}
