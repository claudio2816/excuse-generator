

let quien = ['el perro','mi abuela','la tortuga','mi pajaro'];
let que = ['come','molesta','aplasta','rompe'];
let cuando = ['despues de clases','justo a tiempo','cuando termine','durante mi almuerzo','mientras resaba'];

function onLoad (){
        let random= Math.floor(Math.random()*(quien.length));
         let elementoQuien= quien[random];

         let random2= Math.floor(Math.random()*(que.length));
         let elementoQue= que[random2];

         let random3= Math.floor(Math.random()*(cuando.length));
         let elementocuando= cuando[random3];

         let excusa= ("!!!" +elementoQuien+" " +elementoQue+" " +elementocuando +"!!!");
        return excusa;
}
let elemento = document.getElementById("excuse")
elemento.innerHTML = onLoad()


//let who = ['the dog','my granma','his turtle','my bird'];
//let what = ['eat','pissed','crushed','broked'];
//let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];