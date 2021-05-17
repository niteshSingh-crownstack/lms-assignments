import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { zipcodeValidator, passValidator } from './validator';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  alive = true;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.formInit();
  }
  formInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: '',
      cnfpass: ['', passValidator],
      zip: ['', zipcodeValidator],
      address: this.fb.array([this.addAddressGroup()]),
    });

    this.form.controls.password.valueChanges
      .pipe(takeWhile((_) => this.alive))
      .subscribe((x) => this.form.controls.cnfpass.updateValueAndValidity());
  }
  addAddressGroup() {
    return this.fb.group({
      state: [null, Validators.required],
      city: [null, Validators.required],
    });
  }

  get addressArray() {
    return <any>this.form.get('address');
  }
  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index: number) {
    this.addressArray.removeAt(index);
  }
  ngOnDestroy() {
    this.alive = false;
  }
  onSubmit() {
    this.form.markAsTouched();
    console.log(this.form.value);
  }

  //for testing
  showForm() {
    console.log('worked');
  }
}
