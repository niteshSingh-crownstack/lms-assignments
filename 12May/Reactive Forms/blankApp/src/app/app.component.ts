import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { zipcodeValidator, passValidator } from './validator';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  alive = true;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: '',
      cnfpass: ['', passValidator],
      zip: ['', zipcodeValidator],
    });

    this.form.controls.password.valueChanges
      .pipe(takeWhile((_) => this.alive))
      .subscribe((x) => this.form.controls.cnfpass.updateValueAndValidity());
  }
  ngOnDestroy() {
    this.alive = false;
  }
  onSubmit() {
    // console.log(this.form.controls.zip);
    this.form.markAsTouched();
  }
}
