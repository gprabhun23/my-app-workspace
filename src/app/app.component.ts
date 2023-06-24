import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-workspace';
  myForm!: FormGroup;
  isCaptachaValidated: boolean = false;

  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['test'],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
  }

  onCaptchaChange(e: boolean){
    this.isCaptachaValidated = e;
  }
}
