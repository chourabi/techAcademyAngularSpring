import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
   title:string  =   " Welcome to angular spring from the TS file ";

   arrayOfFruits = [ 
      { name:"Mango" , quantity:60 , isOld:true },
      { name:"Apples" , quantity:50 , isOld:false },
      { name:"Water malone" , quantity:30, isOld:false  },

   ]


   photoURL = ['https://wallpapercave.com/wp/wp3145243.jpg','https://wallpapercave.com/wp/aI60no1.jpg'];
   selectedIndex = 0;



  constructor(){

    setInterval(()=>{
      this.selectedIndex ++;

      if (this.selectedIndex == 2) {
        this.selectedIndex  = 0;

      }


    },2500)

  }

  
}
