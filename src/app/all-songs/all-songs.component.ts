import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit {

  constructor(
    public main: MainService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  setCurrentSong(id) {
    this.main.currentSong = this.main.songs.filter(v => v._id === id)[0];
    this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
    this.router.navigateByUrl('band/current-song');
  }
}
