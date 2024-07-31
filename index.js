const nav = document.getElementById("nav-bar");
const arrowEl = document.getElementById("arrow-up");

window.addEventListener('scroll', ()=> {

    if(window.scrollY >= 50){  
        nav.classList.add('active-nav');
    } else{
        nav.classList.remove('active-nav');
    }

    if(window.scrollY >= 300){  
        arrowEl.style.opacity = "1";
    }
    else{
        arrowEl.style.opacity = "0";
    }
});

/*gece modu*/ (function(window, document, undefined){
  "use strict";
  var nightMode = document.cookie.indexOf("nightMode=true") !== -1;
  var lightMode = document.cookie.indexOf("nightMode=false") !== -1;
  if (nightMode){
    document.documentElement.className += " night-mode";
 }else{
	 document.documentElement.className += " light-mode";
 }
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  //Önceden lihtmode seçilmemiş ise
  if (!lightMode){
    if (userPrefersDark){
      //Cihaz koyu mod kullanıyor ise
      document.documentElement.className += " night-mode";
   }
 }else{
	if (userPrefersLight){
      //Cihaz koyu mod kullanıyor ise
      document.documentElement.className += " light-mode";
   }
 }
})(window, document);
(function(window, document, undefined){
  "use strict";
  var nav = document.querySelector(".theme-mode");
  //HTML .theme-mode class butonu ekle
  nav.innerHTML +=
    '<span id="night-mode"><a role="button" title="nightMode" href="javascript:void(0);">🌓</a></span>';
  var nightMode = document.querySelector("#night-mode");
  nightMode.addEventListener(
    "click",
    function(event){
      event.preventDefault();
      document.documentElement.classList.toggle("light-mode, night-mode");
      if (document.documentElement.classList.contains("night-mode")){
        //nightMode cookie etkinleştir
        return (document.cookie =
          "nightMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;");
     }
      //nightMode cookie etkisizleştir
      document.cookie =
        "nightMode=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;";
   },
    false
  );
})(window, document);
/*gece modu*/
