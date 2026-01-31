const sentence = 'I am good and hard working person';
console.log(sentence.split()); // string ke array te rupantor kore fele
console.log(sentence.split('')); // empty rakha hoile protekta letter dhore dhore alada kore fele
console.log(sentence.split('a')); // specific letter/ word dile seta dia sob vag kore fele


const friend = 'rohim,korim,borim,zigzig';
console.log(friend.split(',')); // protekta upadhan ke alada updhan e rupantor kore



const real = [ 'rohim', 'korim', 'borim', 'zigzig' ];
console.log(real.join()); // string e convert kore fele
console.log(real.join('')); //kono gap chara milaiya felabe
console.log(real.join('|'));
console.log(real.join('-'));
