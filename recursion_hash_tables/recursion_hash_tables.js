const suitCase = new Map();

suitCase.set('box-0', '')
    .set('box-1', '')
    .set('box-2', '')
    .set('box-3', '')
    .set('box-4', 'key')
    .set('box-5', '')
    .set('box-6', '');

function search (suit) {
    for (let [key, value] of suit) {
        if (value === 'key') {
            console.log(`Found ${value} at ${key}!`);
        }
    }
}

search(suitCase); // prints Found key at box-4!