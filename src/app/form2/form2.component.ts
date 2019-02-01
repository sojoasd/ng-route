import { Person } from './../person';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  person: Person;

  data: Array<Person> = [
    {name: "kerker", tel:"0911123321", email:"kerker@aaa.com"},
    {name: "qoo", tel:"0988876678", email:"cc@aaa.com"},
    {name: "hojo", tel:"0911333456", email:"hojo@aaa.com"}
  ];

  // AjaxData = {
  //   Title: "Hello2",
  //   SubTitle: "World2",
  //   People: this.data
  // };

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    const PersonGroups = this.data.map(person => this.fb.group(person));
    const PersonFormArray = this.fb.array(PersonGroups);


    //已經先定義 form，Template 可以直接拿來用
    this.form = this.fb.group({
      Title: ['Hello', Validators.required],
      SubTitle: ['World',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      // People: this.fb.array([
      //   this.fb.group({
      //     name: 'Zeal',
      //     tel: '0911123321',
      //     email: 'aaa'
      //   }),
      //   this.fb.group({
      //     name: 'Curry',
      //     tel: '0977789876',
      //     email: 'bbb'
      //   }),
      // ])

    });

    this.form.setControl('People', PersonFormArray);

    // this.form.setValue(this.AjaxData);
    // this.form.reset(this.AjaxData);

    this.form.get('Title').valueChanges.subscribe((value)=>{
      console.log(value);
    });

  }

  AddPerson(){
    let People = this.form.get('People') as FormArray;

    People.push(this.fb.group({
      name: '',
      tel: '',
      email: 'bbb'
    }));
  }

}
