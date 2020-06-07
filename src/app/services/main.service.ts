import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  band;
  songs;
  currentSong;
  currentPlaylist;
  api = 'http://localhost:8081/api/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(bandName) {
    this.http.get<any>(`${this.api}band/allBand?bandName=${bandName}`).subscribe(res => {
      this.band = res.band;
      this.songs = res.songs;
      this.router.navigateByUrl('band')
      console.log(res);
    })
  }
  setCurrentSong(songID) {
    this.currentSong = this.songs.filter(v => v._id === songID);
  }
  addNewPlaylist(playlist) {
    this.http.post(this.api + 'band/add/playlist', playlist).subscribe(res => {
      this.band.playlist.push(playlist);
    })
  }
  addNewSongToPlaylist(songToPlaylist) {
    this.http.post(this.api + 'band/add/songToPlaylist', songToPlaylist).subscribe(res => {
      this.band.playlist.push(songToPlaylist);
    })
  }
  addNewSong(song) {
    this.http.post(this.api + 'band/add/song', song).subscribe(res => {
      this.band.playlist.push(song);
    })
  }
}
