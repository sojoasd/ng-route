import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  PlusNum: string;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.PlusNum = this.route.snapshot.params['type'];
    //snapshot 只會執行一次，但是 type 參數會不斷變動，所以不適用

    this.route.queryParams.subscribe((params)=>{
      // console.log(params);
    });

    this.route.params.subscribe((params)=>{
      this.PlusNum = params['type'];
      console.log(params);
    });
  }

  PlusOne(){
    this.router.navigate(['/cards', parseInt(this.PlusNum) + 1]);
  }

}
