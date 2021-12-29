import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
})
export class EducationDetailComponent implements OnInit {
  @Input() regForm: FormGroup;
  // formSubmitted: boolean = false;
  items: FormArray;
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([]),
    });
  }

  public skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      educationName: '',
      universityName: '',
      result: '',
      passingYear: 0
    });
  }

  addSkills() {
    this.skills().push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills().removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }

  // submit() {
  //   console.log('submitted');
  //   console.log(this.regForm.value);
  //   this.formSubmitted = true;
  // }

  step4Submitted() {}
}
