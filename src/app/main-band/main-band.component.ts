import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-band',
  templateUrl: './main-band.component.html',
  styleUrls: ['./main-band.component.scss']
})
export class MainBandComponent implements OnInit {

  constructor(
    public main: MainService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  setCurrentPlaylist(id) {
    this.main.currentPlaylist = this.main.band.playlist.filter(v => v._id === id)[0];
    this.router.navigateByUrl('band/current-playlist');
  }
}
