import { Component } from '@angular/core';
import { MainService } from "./Core/services/main-service/main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private main: MainService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.main.band) {
      this.router.navigateByUrl('all-songs');
    } else {
      this.router.navigateByUrl('');
    }
  }

}
