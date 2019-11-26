import { Component, OnInit } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'ngx-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

    message : string =" ";
    topic : string =" ";
    checked = false;
    QoS: any = "";
  
  constructor(private mqttService: MqttService) { 
      
  }
  
  toggle(checked: boolean){
      this.checked = checked;
  } 
  
  

  public publish(topic:string, message:string)
  {
      this.mqttService.unsafePublish(topic, message, {qos: this.QoS, retain: this.checked});
  }

  

  ngOnInit() {
  }

}