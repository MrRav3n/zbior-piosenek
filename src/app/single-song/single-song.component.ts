import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-single-song',
  templateUrl: './single-song.component.html',
  styleUrls: ['./single-song.component.scss']
})
export class SingleSongComponent implements OnInit {

  constructor(
    public main: MainService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {}

  backToPlaylist() {
    this.router.navigateByUrl('band/current-playlist');
  }

  nextSong() {
    const id = this.main.currentPlaylist.songs[this.main.currentSong.iterator];
    if (id) {
      this.main.currentSong = this.main.songs.filter(v => v._id === id)[0];
    } else {
      this.toastr.error('Koniec playlisty!')
    }
  }

}
