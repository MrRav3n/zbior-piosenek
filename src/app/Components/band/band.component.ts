import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from "../../Core/services/main-service/main.service";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler;

  collapseNavbar() {
    if(window.innerWidth < 992) {
      this.navbarToggler.nativeElement.click();
    }
  }

  constructor(public main: MainService) { }

  ngOnInit() {}
}
