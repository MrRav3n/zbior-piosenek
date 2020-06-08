import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  band;
  songs;
  currentSong;
  currentPlaylist;
  bandName;
  api = 'https://zbior-piosenek-api.glitch.me/api/';

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

  refreshValues(): Observable<any> {
    return this.http.get<any>(`${this.api}band/allBand?bandName=${this.bandName}`).pipe(
      map(res => {
        this.band = res.band;
        this.songs = res.songs;
      }))
  }

  setCurrentSong(songID) {
    this.currentSong = this.songs.filter(v => v._id === songID);
  }

  addNewPlaylist(playlist) {
    this.http.post(this.api + 'band/add/playlist', playlist).subscribe(res => {
      this.toastr.success('Dodano nową playlistę.', 'Udało się!')
      this.refreshValues().subscribe(res => {});
    })
  }

  addNewSongToPlaylist(songToPlaylist): Observable<any> {
    return this.http.post(this.api + 'band/add/songToPlaylist', songToPlaylist)
  }

  addNewSong(song) {
    this.http.post(this.api + 'band/add/song', song).subscribe(res => {
      this.toastr.success('Dodano nową piosenkę.', 'Udało się!')
      this.refreshValues().subscribe(res => {});
    })
  }

}
