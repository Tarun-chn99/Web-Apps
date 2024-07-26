// replace space with '@40'

const text = 'The sky is blue';

const replaceSpace = (arr) => {

    let text = arr.split("");
    let n = text.length;

    for(let i=0; i<n; ++i)
        if(text[i] === ' ')
            text[i] = '@40';

    return text.join("");

}

console.log(replaceSpace(text));