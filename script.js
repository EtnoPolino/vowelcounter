const input = document.querySelector('input');
const button = document.querySelector('button');

function checkVowel(e){
    if(!input.value) return;

    const tableInput = [...input.value]
    const regexVowel = /^[aeiouy]/i

    const result = tableInput.reduce((total, item) => {
        if(item.match(regexVowel)){
            total++;
        }
        return total;
    }, 0);
    
    alert(`Hey, there are ${result} vowels !`);

input.value = '';
}

button.addEventListener('click', checkVowel)