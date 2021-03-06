import { Component, OnInit } from '@angular/core';
import { MainService } from "../../Core/services/main-service/main.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";

@Component({
  selector: 'app-single-song',
  templateUrl: './single-song.component.html',
  styleUrls: ['./single-song.component.scss']
})
export class SingleSongComponent implements OnInit {

  constructor(
    public main: MainService,
    private router: Router,
    private location: Location,
    private toastr: ToastrService
  ) { }

  ngOnInit() {}

  backToPlaylist() {
    this.router.navigateByUrl('band/current-playlist');
  }

  goBack() {
    this.location.back();
  }

  nextSong(iter?) {
    let iterator;
    if(!iter) {
      iterator = this.main.currentSong.iterator + 1;
    } else {
      iterator = iter+1;
    }
    const id = this.main.currentPlaylist.songs[iterator];
    if (id) {
      this.main.currentSong = this.main.songs.filter(v => {
        return v._id === id;
      })[0];
      if(!this.main.currentSong) {
        this.nextSong(iterator);
      } else {
        this.main.currentSong.iterator = iterator;
      }
    } else {
      this.toastr.error('Koniec playlisty!')
      return;
    }
  }

}
