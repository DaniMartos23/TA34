import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA34';
  pantalla='';
  resultado='';
  pulsaboton1(){
      this.pantalla+="1";
  }
  pulsaboton2(){
    this.pantalla+="2";
  }
  pulsaboton3(){
    this.pantalla+="3";
  }
  pulsaboton4(){
    this.pantalla+="4";
  }
  pulsaboton5(){
    this.pantalla+="5";
  }
  pulsaboton6(){
    this.pantalla+="6";
  }
  pulsaboton7(){
    this.pantalla+="7";
  }
  pulsaboton8(){
    this.pantalla+="8";
  }
  pulsaboton9(){
    this.pantalla+="9";
  }
  pulsaboton0(){
    this.pantalla+="0";
  }
  pulsaboton00(){
    this.pantalla+="00";
  }
  pulsabotoncoma(){
    this.pantalla+=".";
  }
  pulsabotonborrar(){
    this.pantalla="";
  }
  pulsabotondividir(){
    this.pantalla+="/";
  }
  pulsabotonmult(){
    this.pantalla+="·";
  }
  pulsabotonresta(){
    this.pantalla+="-";
  }
  pulsabotonsuma(){
    this.pantalla+="+";
  }
  pulsabotonresultado(){
      
      
  }
}

