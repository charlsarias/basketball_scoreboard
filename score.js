  let obj_homescore = document.getElementById("homescore");
    let obj_awayscore = document.getElementById("awayscore");
    let scoreteam1 = 0;
    let scoreteam2 = 0;
    //funcion para equipo 1
   function homeaumentar1(){
   			scoreteam1 += 1; 
            obj_homescore.textContent = scoreteam1;
   }
   function homeaumentar2(){
   			scoreteam1 += 2;
            obj_homescore.textContent = scoreteam1;
   }
   function homeaumentar3(){
   			scoreteam1 += 3;
            obj_homescore.textContent = scoreteam1;
   }
   
   // para equipo 2
   function awayaumentar1(){
   			scoreteam2 += 1;
            obj_awayscore.textContent = scoreteam2;
   }
   function awayaumentar2(){
   			scoreteam2 += 2;
            obj_awayscore.textContent = scoreteam2;
   }
   function awayaumentar3(){
   			scoreteam2 += 3;
            obj_awayscore.textContent = scoreteam2;
   }

	//funcion para reset del marcador
    function reset(){
    	scoreteam1 = 0;
       obj_homescore.textContent = scoreteam1;
       scoreteam2 = 0;
       obj_awayscore.textContent = scoreteam2;
    }