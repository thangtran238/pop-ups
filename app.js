var btnSuccess = document.querySelector(".cont .success");
var btnWarning = document.querySelector(".cont .warning");
var btnError = document.querySelector(".cont .error");


btnSuccess.addEventListener("click", function() {
  addToast('success')
});

btnWarning.addEventListener("click", function() {
  addToast('warning')
});

btnError.addEventListener("click", function() {
  addToast('error')
});

function addToast(status) {
  let theme = ``
  switch(status) {
    case 'success':
      theme = `
        <i class="fa-solid fa-circle-check"></i>
        <span class="message">This is success message</span>` 
      break;
    case 'warning':
      theme = `
      <i class="fa-solid fa-circle-check"></i>
      <span class="message">This is warning message</span>` 
      break;
    case 'error':
      theme = `
      <i class="fa-solid fa-circle-check"></i>
      <span class="message">This is error message</span>` 
      break;
  }


  var toast = document.createElement("div");
  toast.classList.add('toast')
  toast.classList.add(status)

  toast.innerHTML = `
    
    ${theme}
    <span class="countdown"></span>
  `;
  

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast)

  setTimeout(function(){
    toast.style.animation = `slidehide 1.5s ease forwards`
  },4500)
  setTimeout(function(){
    toast.remove()
  },6000)
}
