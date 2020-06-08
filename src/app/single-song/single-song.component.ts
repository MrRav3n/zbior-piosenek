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
    const iterator = this.main.currentSong.iterator + 1;
    const id = this.main.currentPlaylist.songs[iterator];
    console.log(id);
    console.log( this.main.currentSong.iterator);
    console.log(this.main.currentSong);
    if (id) {

      this.main.currentSong = this.main.songs.filter(v => v._id === id)[0];
      this.main.currentSong.iterator = iterator;
      console.log(this.main.currentSong);
    } else {
      this.toastr.error('Koniec playlisty!')
    }
  }

}
