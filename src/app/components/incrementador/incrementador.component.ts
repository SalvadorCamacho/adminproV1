import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


 @ViewChild('txtProgress') txtProgress: ElementRef;

 @Input() progreso: number = 50;
 @Input('nombre') leyenda: string = 'leyenda';

  constructor() { }
//Para poder emitir un número como valor
@Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();


  ngOnInit() {    
  }


onChanges( newValue: number){


 // let elemetHTML: any = document.getElementsByName('progreso')[0];
 // console.log(elemetHTML.value);

  if(newValue >= 100){
    this.progreso = 100;
  }else if(newValue <=0){
    this.progreso = 0;
  }else{
    this.progreso = newValue;
  }

 // elemetHTML.value = Number(this.progreso);
  this.txtProgress.nativeElement = this.progreso;

  this.cambioValor.emit(this.progreso);

}

  cambiarValor( valor: number){
    if(this.progreso >= 100 && valor > 0){
      this.progreso=100;
      return;
    }
    if(this.progreso<=0 && valor < 0){
      this.progreso = 0;
      return;
    } 

    this.progreso = this.progreso + valor;

    
   this.cambioValor.emit(this.progreso);
   this.txtProgress.nativeElement.focus();

  }


}
