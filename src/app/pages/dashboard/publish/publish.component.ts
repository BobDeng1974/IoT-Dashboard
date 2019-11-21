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
  
  constructor(private mqttService: MqttService) { 
      console.log(this.mqttService);
  }
  
  toggle(checked: boolean){
      this.checked = checked;
  }

  public publish(topic:string, message:string)
  {
      this.mqttService.unsafePublish(topic, message, {qos: 1, retain: this.checked});
  }

  

  ngOnInit() {
  }

}