import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {
  // @Input() public alertType: AlertType = AlertType.INFO;
  @Input() public textMessage: string = "";


  constructor() { }

  public ngOnInit(): void {
  }

  public getTextToDistplay():string {
    return this.textMessage;
  }

}
