// const friendlyWords = require('friendly-words');
import * as friendlyWords from 'friendly-words';

const getName = () => {
    let randO = Math.floor((Math.random() * friendlyWords.objects.length-1) + 1);
    let randP = Math.floor((Math.random() * friendlyWords.predicates.length-1) + 1);
    return `${friendlyWords.objects[randO]}-${friendlyWords.predicates[randP]}`;
}

export { getName }