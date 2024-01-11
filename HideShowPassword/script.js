const inputval = document.querySelector("#input-box")
const icon = document.querySelector('.icon')

icon.addEventListener('click',(e)=>{
    if (e.target.classList[2]==='hide') {
        inputval.setAttribute('type','password')
        icon.innerHTML = '<i class="fa-solid fa-eye-slash unhide">'
        console.log('clicked');
    }else{
        inputval.setAttribute('type','text')
        icon.innerHTML = '<i class="fa-solid fa-eye hide">'
    }
    
})