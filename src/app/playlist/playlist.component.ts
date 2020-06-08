import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  songs = [];

  constructor(
    public main: MainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.songs = this.main.songs.filter((item) => {
      return this.main.currentPlaylist.songs.includes(item._id);
    });
  }

  setCurrentSong(id, i) {
    this.main.currentSong = this.main.songs.filter(v => v._id === id)[0];
    this.main.currentSong.iterator = i;
    this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
    this.router.navigateByUrl('band/current-song');
  }

}
