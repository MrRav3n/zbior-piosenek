import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from "../../../Core/services/shared-service/shared.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MainService } from "../../../Core/services/main-service/main.service";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  registerForm: FormGroup;
  @ViewChild('openRegisterButton') openRegisterButton;
  constructor(
    private main: MainService,
    private sharedService: SharedService,
  ) {
    this.registerForm = new FormGroup({
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
    })
  }
  register() {
    if(this.registerForm.valid) {
      this.main.register(this.registerForm.value);
    }
  }
  ngOnInit(): void {
    this.sharedService.openRegisterModal.subscribe(() => {
      this.openRegisterButton.nativeElement.click();
    })
  }
}
