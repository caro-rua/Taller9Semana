import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']

})
export class CalculadoraComponent implements OnInit {

  formValue!:FormGroup;
  [x: string]: any;
  titulo="Mi calculadora"
  
  num1!:number;
  num2!: number;
  resultado!:number;
 
  l!:"";
  searchValue:string = '';
  searchValue2:string = '';
  searchValue3:string = '';
   
  mensaje_ok:any;
  mensaje_error:any;
  mensaje_numero_negativo:any;
 

  constructor( private formBuilder: FormBuilder

  ) { }

  ngOnInit(
     
  ): void {

  }
  
  sumar(){
   
    if(this.num1==null){
      this.mensaje_error="Espera, te falta digitar el número 1"
    }

    else if(this.num2==null){
      this.mensaje_error="Espera, te falta digitar el número 2"
    }

    else {

      this.resultado= this.num1+this.num2
      this.mensaje_ok="La operación de la suma fue correcta"
      
    }
  }

  multiplicar(){
   
    if(this.num1==null){
      this.mensaje_error="espera falta dijitar el número 1"

    }

    else if(this.num2==null){
     
      this.mensaje_error="espera falta dijitar el número 2"
    
    }

    else{
    this.resultado = this.num1*this.num2 
    this.mensaje_ok="la operación de la multplicación es correcta"
    }
}

dividir(){
 
  if(this.num1==null){
    this.mensaje_error="espera falta dijitar el número 1"

  }

  else if(this.num2==null){
   
    this.mensaje_error="espera falta dijitar el número 2"
     } 

  else if(this.num2 <=0 ){

   this.mensaje_numero_negativo = " El numero es < 0 o = 0 no es posible  realizar la operacion"
     
  }
  else{
  this.resultado = this.num1/this.num2
  this.mensaje_ok="la operación de la división es correcta"
  }
}

restar(){

  if(this.num1==null){
    this.mensaje_error="espera falta dijitar el número 1"

  }

  else if(this.num2==null){
   
    this.mensaje_error="espera falta dijitar el número 2"
     } 

  else if(this.num1<=0 || this.num2 <=0 ){

   this.mensaje_numero_negativo = " El numero es < 0 o = 0 no es posible  realizar la operacion"
     
  }

  else{
   
  this.resultado = this.num1-this.num2
  this.mensaje_ok="la operación de la resta  es correcta"

  }
 
}

borrar(){
  this.searchValue = 'null';
  this.searchValue2 = 'null';
  this.resultado= 0
 
}
}