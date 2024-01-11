const inputBox = document.getElementById('password')
const genBtn = document.getElementById('generate-btn')
const icon = document.getElementById('icon')
inputBox.value = ''
inputBox.disabled = true
const map = new Map

function generatePassword(){
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const number = '1234567890'
    const symbols = '!@#$%^&*()_+=-<>?/{}[]'
    const char = upper+lower+number+symbols;
    let res = ''
    ;
    res += getRandomChar(lower)
    res += getRandomChar(number)
    res += getRandomChar(upper)
    res += getRandomChar(symbols)
    
    
    for (let i = 0; i < 4; i++) {
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

    function getRandomChar(charset) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        return charset.charAt(randomIndex);
      }
}



genBtn.addEventListener('click',generatePassword)
