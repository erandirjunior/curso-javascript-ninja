// Truthy e Falsy

1 === 'b'; //false

1; //1

var teste; //undefined

if (1) { teste = true; } else { teste = //false; }
true

teste; //true

if (0) { teste = true; } else { teste = //false; }
false

teste; //false

// Truthy -> valor booleano representado por true, ex: todos os outros valores

if ('0') { teste = true; } else { teste = false; } //true

teste; //true

if ({}) { teste = true; } else { teste = false; } //true

teste; //true

if ([]) { teste = true; } else { teste = false; } //true

teste; //true

// Falsy -> valor booleano representado por false, ex: false, undefined, null, NaN, 0, -0, '' e ""

if ('') { teste = true; } else { teste = false; } //false

teste; //false

if (undefined) { teste = true; } else { teste = false; } //false

teste; //false

if (null) { teste = true; } else { teste = false; } //false

teste; //false

if (NaN) { teste = true; } else { teste = false; } //false

teste; //false

if (-0) { teste = true; } else { teste = false; } //false

teste; //false

if (false) { teste = true; } else { teste = false; } //false

teste; //false

// Descobrir a representação booleana de um valor -> !!

!1; //false

!true; //false

!false; //true

!!true; //true

!!0; //false

!!2 //true

!!'junior' //true

!!'' //false

!!"" //false

!!NaN //false

!!false //false

!!true //true

!!1 //true

!!'0'; //true