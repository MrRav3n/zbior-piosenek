import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  band;
  songs;
  currentSong;
  currentPlaylist;
  bandName;
  api = 'http://localhost:8081/api/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }
  login(bandName) {
    this.http.get<any>(`${this.api}band/allBand?bandName=${bandName}`).subscribe(res => {
      this.bandName = bandName;
      this.band = res.band;
      this.songs = res.songs;
      console.log(res);
      this.router.navigateByUrl('band')
    })
  }
  refreshValues() {
    this.http.get<any>(`${this.api}band/allBand?bandName=${this.bandName}`).subscribe(res => {
      this.band = res.band;
      this.songs = res.songs;
    })
  }
  setCurrentSong(songID) {
    this.currentSong = this.songs.filter(v => v._id === songID);
  }
  addNewPlaylist(playlist) {
    this.http.post(this.api + 'band/add/playlist', playlist).subscribe(res => {
      this.toastr.success('Dodano nową playlistę.', 'Udało się!')
      this.refreshValues();
    })
  }
  addNewSongToPlaylist(songToPlaylist) {
    this.http.post(this.api + 'band/add/songToPlaylist', songToPlaylist).subscribe(res => {
      this.toastr.success('Dodano nową piosenkę do playlisty.', 'Udało się!')
      this.refreshValues();
    })
  }
  addNewSong(song) {
    this.http.post(this.api + 'band/add/song', song).subscribe(res => {
      this.toastr.success('Dodano nową piosenkę.', 'Udało się!')
      this.refreshValues();
    })
  }
}
