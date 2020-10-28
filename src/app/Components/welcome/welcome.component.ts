import { Component, OnInit } from '@angular/core';
import { MainService } from "../../Core/services/main-service/main.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "../../Core/services/shared-service/shared.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private sharedService: SharedService,
    private main: MainService
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.loginForm.controls.name.patchValue('Test');
    this.loginForm.controls.password.patchValue('123');
    this.login();
  }
  openRegister() {
    this.sharedService.openRegister();
  }
  login() {
    if (this.loginForm.valid) {
      this.main.login(this.loginForm.value);
    }
  }

}
