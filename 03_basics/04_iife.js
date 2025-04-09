// Innediately invoked function expression (iife)

(function chai () {
    console.log(`DB CONNECTED`);
})();

(function chai (){                // NAMED IIFE
    console.log(`CB CONNETD oneTWO`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();


                                       //UNNAME IIFE
                                       //and paira metar
( ( name ) => {    
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

