import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input('parentdata')
   parentdata:string;
   msg:string;
   serviceData:string; 

   @Output()
   sendtochild:EventEmitter<string> = new EventEmitter<string> ();
   
  constructor(private _service:CommonServiceService) { }
 
  public get service():CommonServiceService{
    return this._service;
  }

  getData():void{
    this.serviceData = this._service.getServiceData();

  }

  send(val:string):void{
    this.sendtochild.emit(val);
  }

  showParent(myData:string){
   this.msg = myData;
  }
  ngOnInit() {
  }

}
