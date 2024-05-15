import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  sampleForm!: FormGroup;
  ngOnInit(): void {
    // create an instance of form group// for the object passed, the key identifies the control name, the value identifies the actual control// the Validators provides validator functions that need to be applied to the control value
    this.sampleForm = new FormGroup({'name': new FormControl('', [Validators.required]),
     'emailAddress': new FormControl('', [Validators.required, Validators.email]),
     'age': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+')])
    })
  }
  handleSubmit(form:any): void {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
     }
}
