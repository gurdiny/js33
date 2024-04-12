const someStr = "Some string esto es un string"

const countVowels = (phrase) => {
    const vowelsList = /[aeiouAEIOU]/g
    const phraseLength = phrase.length
    let total = 0
    
    for(let i = 0; i < phraseLength; i++){
    let isVowel = vowelsList.test(phrase.charAt(i))
    if(isVowel){
        total++
    }

    }
    return total
}

const test1 = countVowels(someStr)
console.log(test1)