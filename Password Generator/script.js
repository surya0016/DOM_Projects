const inputBox = document.getElementById('password')
const genBtn = document.getElementById('generate-btn')
const icon = document.getElementById('icn')
inputBox.value = ''
inputBox.disabled = true
const map = new Map

function gen(){
    let res = ''
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_{}[]><?'
    
    for (let i = 0; i < 8; i++) {
        const index = Math.floor(Math.random()*char.length)
        res += char.charAt(index)
    }
    
    inputBox.value = res
    icon.addEventListener('click',()=>{
        navigator.clipboard.writeText(res)
        icon.innerHTML = 'Copied!';
        icon.style.color = '#019f55'
        setTimeout(()=>{
            icon.innerHTML = '<i class="fa-regular fa-clone copy-btn">'
        },2000)
        console.log('Copy button clicked');
    })
}

genBtn.addEventListener('click',gen)
