import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ad-component',
  templateUrl: './ad-component.component.html',
  styleUrls: ['./ad-component.component.css']
})
export class AdComponentComponent implements OnInit {

  public label:string = 'Play';
  public contentToDisplayLoaded:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.fetchAdData();
  }

  private fetchAdData(): void {
    // TODO: this where ad is loaded. 
    this.contentToDisplayLoaded = true;
  }

  

  public onPlay():void {
    this.label = "Playing video";
    setTimeout(()=> {
      this.label = 'Play';
      this.contentToDisplayLoaded = false;
    }, 2000);
  }
}
