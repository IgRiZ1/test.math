





function random(min, max , raden) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (raden == num){
        console.log('juist getal geraden'); 
         
    } else {
        console.log('fout getal');
    }
return num ;
  
  }
  
  console.log(random(1,10,4));
  