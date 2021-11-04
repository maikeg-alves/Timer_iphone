(function () {
    var delay = 100;

    //variaveis sendo chamadas // 
    
    //horas //
    var h = document.getElementById('hors')
    var hors = parseInt(h.textContent);

    //minutos// 
    var m = document.getElementById('min')
    var min = parseInt(m.textContent);
    
    //segundos //
    var s = document.getElementById("seg");
    var seg =  parseInt(s.textContent);
    
    //botoes // 
    var pause = document.getElementById("btn1");
    var iniciar = document.getElementById("btn2");
    
  //===============================================//
  
    // contador //

         var t = new timer(function () {

            //segundos // 
            if (seg < 9 ) {
                 s.textContent =  `0${++seg} ` 
            }else{
                 s.innerHTML = ''
                 s.textContent = ++seg
             if (seg > 59 ) {
                 seg = 00
                 console.log (seg)
            if (seg == 00) {

            // minutos //  
            if (min < 9 ) {
                m.textContent =  `0${++min} ` 
            }else{
                m.innerHTML = ''
                m.textContent = ++min
            if (min > 59 ) {
                min = 00
                console.log (min)
            if (min == 00) {

            // HORAS //  
            if ( hors < 9 ) {
                h.textContent = `0${++hors}`
            } else{
                h.textContent = ''
                h.textContent = ++hors
             if ( hors > 59 ) {
                 hors = 00
                 console.log(hors)
             }  } } } } } } } }, delay);
         
   // ======================================================= // 
  
    iniciar.addEventListener("click", function () {
      t.resume();
      pause.style.color = '#cecece'
      pause.style.backgroundColor = '#333333'
      pause.style.transition = 'width 2s'
      pause.classList.remove("disabled");
      iniciar.classList.add("disabled");
      reset.classList.add("disabled");
      
      
    });
  
     pause.addEventListener("click", function () {
      t.pause();

      pause.classList.add("disabled");
      iniciar.classList.remove("disabled");
      reset.classList.remove("disabled");
      
    });

    reset.addEventListener("click", function () {
       t.reset();

       pause.classList.add("disabled");
       iniciar.classList.remove("disabled");
       reset.classList.remove("disabled")
        
    });

    })();
  
  //========== BASE TIME ========= //
  function timer(callback, delay) {
    var timerId;
    var start;
    var remaining = delay;
  
    this.pause = function () {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };
  
    var resume = function () {
      start = new Date();
      timerId = window.setTimeout(function () {
        remaining = delay;
        resume();
        callback();
        
      }, remaining);
    };
    this.resume = resume;
  
    this.reset = function () {
      remaining = delay;
    };
  }

  //creditos BASE TIME: https://rossener.com/como-criar-um-timer-com-resume-pause-e-reset-usando-javascript/ 