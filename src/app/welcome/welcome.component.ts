import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private main: MainService
  ) {
    this.loginForm = new FormGroup({
      bandName: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.main.login(this.loginForm.controls.bandName.value);
    }
  }

}
