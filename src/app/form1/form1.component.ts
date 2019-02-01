import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  data: any = { Title: "Hello", SubTitle: "World"};

  IsGroup1Checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  Test(obj:NgForm){
    console.log(obj.value);
  }

  doNext(group1: NgForm){
    console.log(group1);
    // group1.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });
    this.IsGroup1Checked = true;
  }

  doSubmit(obj:NgForm){
    console.log(obj);
  }

}
