import { Component, OnInit, Output } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private service: DataService , private fb:FormBuilder) { }

  enteredPersonName = '';

  onCreatePerson() {

    this.service.addPerson(this.enteredPersonName);
    //this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';


  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }

  onLoadDataClicked():void{
  //   this.employeeForm.patchValue({
  //     fullname: "Vikas war",
  //     email: "Vikas@gmail.com",
  //     skill: {
  //       skillName: "Angular 7",
  //       experienceInYears: 1,
  //       proficiency: "beginner"
  //   }
  // });
  this.logKeyValuePairs(this.employeeForm);
}

logKeyValuePairs(group: FormGroup):void {
  Object.keys(group.controls).forEach((key: string)=>{
    const abstractControl = group.get(key);
    if(abstractControl instanceof FormGroup){
      this.logKeyValuePairs(abstractControl);
    }else{
      console.log("key = "+ key + " Value "+ abstractControl.value);
      abstractControl.disable();
    }
  });
}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullname: ['',[Validators.required , Validators.minLength(2),Validators.maxLength(10)]],
      email: [''],
      skill: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })
    });
  }

}
