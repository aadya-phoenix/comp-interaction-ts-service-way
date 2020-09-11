import { Component } from '@angular/core';
import {CommonServiceService } from './common-service.service';

@Component({
  selector:'second-app',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']

})
export class AppComponent{
  title:'';

  cal:string;
  isHide:boolean;
  cssClass:string;
  tookInput:string;

  constructor(private service:CommonServiceService){
    this.cal='this is calling from app ts';
    this.isHide = true;
    this.cssClass = 'green';
    this.tookInput="";
    
  }
  sendToService(event):void{
    this.title= event.target.value;
 this.service.setServiceData(event.target.value);
  }


  showHide():void{
    this.isHide =!this.isHide;
  }
  takeInput(event):void{
    this.tookInput=event.target.value;

  }
}