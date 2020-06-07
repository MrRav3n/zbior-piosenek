import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  constructor(
    public main: MainService
  ) { }

  ngOnInit() {
  }

}
