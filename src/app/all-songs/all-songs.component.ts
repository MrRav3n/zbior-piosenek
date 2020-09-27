import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit {
  songs;
  originalSongs;
  searchForm: FormGroup;
  constructor(
    public main: MainService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.main.currentPlaylist = undefined;
    this.songs = this.main.songs;
    this.originalSongs = this.main.songs;
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    })
    this.searchForSong();
  }
  searchForSong() {
    this.searchForm.get('search').valueChanges.subscribe(val => {
      this.songs = this.originalSongs.filter(song => {
        return song.name.includes(val);
      })
    })
  }
  setCurrentSong(id) {
    this.main.currentSong = this.main.songs.filter(v => v._id === id)[0];
    this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
    this.router.navigateByUrl('band/current-song');
  }
  delete(id) {
    this.main.delete(id);
  }

}
