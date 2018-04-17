
// Arrays

// join() -> retorna os itens do array em fromato string, podendo ser escolhido o separador dos itens e não modifica o array principal

var arr = ['arroz', 'feijao', 'macarrao']; //undefined

arr; //[ 'arroz', 'feijao', 'macarrao' ]

arr.join(); //'arroz,feijao,macarrao'

arr; //[ 'arroz', 'feijao', 'macarrao' ]

arr.join(' '); //'arroz feijao macarrao'

arr.join(', '); //'arroz, feijao, macarrao'

// reverse() -> retorna o array com os itens do invertidos, modifica o array principal 

arr.reverse(); //[ 'macarrao', 'feijao', 'arroz' ]

arr; //[ 'macarrao', 'feijao', 'arroz' ]

arr.reverse(); //[ 'arroz', 'feijao', 'macarrao' ]

arr; //[ 'arroz', 'feijao', 'macarrao' ]

// sort() -> retorna os itens do array ordenados, modifica o array principal

arr.sort(); //[ 'arroz', 'feijao', 'macarrao' ]

arr.push('carne'); //4

arr.push('frango'); //5

arr; //[ 'arroz', 'feijao', 'macarrao', 'carne', 'frango' ]

arr.sort(); //[ 'arroz', 'carne', 'feijao', 'frango', 'macarrao' ]

arr; //[ 'arroz', 'carne', 'feijao', 'frango', 'macarrao' ]