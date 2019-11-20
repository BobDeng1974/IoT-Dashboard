import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  
  constructor() { }

  ngOnInit() {
  }

}
