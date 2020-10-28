import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from "../../../Core/services/shared-service/shared.service";

@Component({
  selector: 'app-sure-confirmation',
  templateUrl: './sure-confirmation.component.html',
  styleUrls: ['./sure-confirmation.component.scss']
})
export class SureConfirmationComponent implements OnInit {
  @ViewChild('sureConfirmationButton') sureConfirmationButton;
  constructor(
    private shared: SharedService
  ) { }

  ngOnInit(): void {
    this.shared.openSureConModal.subscribe(() => {
      this.sureConfirmationButton.nativeElement.click();
    })
  }

}
