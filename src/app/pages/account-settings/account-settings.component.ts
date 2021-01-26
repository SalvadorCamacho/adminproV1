
import { Component, Inject, OnInit } from '@angular/core';

import { SettingsService } from "../../services/service.index";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
              public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCcheck();
  }

  cambiarColor(tema: string, link: any){
    this.aplicarCheck(link); //Aplica el check
    this._ajustes.aplicarTema(tema);

  }

  aplicarCheck( link: any){
     let selectores: any = document.getElementsByClassName('selector');

     for(let ref of selectores){ //Se asegura de quitar el check a todos
         ref.classList.remove('working'); 
     }
       link.classList.add('working'); //Solo pone check al seleccionado

  }

   colocarCcheck(){
    let selectores: any = document.getElementsByClassName('selector');
    
    let tema = this._ajustes.ajustes.tema;
     
    for(let ref of selectores){ //Se asegura de quitar el check a todos
       if( ref.getAttribute('data-theme')=== tema){
         ref.classList.add('working');
       }
       
    }


   }


}
