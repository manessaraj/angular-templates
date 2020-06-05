import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSave() {

  }

}
