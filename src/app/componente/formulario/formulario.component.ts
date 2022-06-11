import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup} from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formValue!:FormGroup;

  public data_detalle: Array<any>=[];  
  public edad=[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,]
  public ciudad=["Armenia","Barranquilla","Bogotá","Bucaramanga","Cali","Cartagena","Cucuta","pasto","Ibagué","Manizales","Medellin","Pasto","Pereira","Santa Marta","villavicencio"]
  public contador: any
  constructor(
    
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
   this.obtenerCamposFormulario();

  }

  obtenerCamposFormulario(){

   this.formValue= this.formBuilder.group({
     
    nombres:[''],
    apellidos:[''],
    edad : [''],
    ciudad : [''],
    dinero : ['']


   })

  }

   guardar_detalle(detalleFomulario: any){
    
    if(detalleFomulario.value.nombres==""){
        alert("falta diligenciar los Nombres")
    }

    else if(detalleFomulario.value.apellidos==""){
      alert("falta diligenciar el Apellidos")

    }

    else if(detalleFomulario.value.edad==""){
      alert("falta seleccionar la Edad")

    }

    else if(detalleFomulario.value.ciudad==""){
      alert("falta seleccionar la Ciudad")

    }

    else if(detalleFomulario.value.dinero==""){
      alert("falta agregar la cantidad de dinero a donar")

    }







    else{
      
    this.data_detalle.push({

      nombres: detalleFomulario.value.nombres,
      apellidos: detalleFomulario.value.apellidos,
      ciudad: detalleFomulario.value.ciudad,
      edad: detalleFomulario.value.edad,
      dinero: detalleFomulario.value.dinero

    })
     this.contador=this.data_detalle.length
    alert("la donacion fue enviada exitosamente  ")

    this.formValue= this.formBuilder.group({
     
      nombres:[''],
      apellidos:[''],
      edad : [''],
      ciudad : [''],
      dinero : ['']
  
  
     })




     }
     
     
 

    

    
     
   }


   remover(indice:number){
    this.contador=this.data_detalle.length
    this.data_detalle.splice(indice, 1)
    alert("registro eliminado")
    this.contador=""
  }



}
