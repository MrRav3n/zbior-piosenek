import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  band;
  songs;
  currentSong;
  currentPlaylist;
  bandName;
  api = 'https://zbior-piosenek-api.herokuapp.com/api/';
  apiLocalhost = 'http://localhost:8081/api/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
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

  refresh() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.location.path()]);
    });
  }
  delete(id) {
    this.http.post(this.api + 'band/delete/song', {songID: id}).subscribe(res => {
      this.toastr.success('usunięto piosenkę', 'Udało się!')
      this.refreshValues().subscribe(res => {});
    })
  }
  deletePlaylist(id) {
    this.http.post(this.api + 'band/delete/playlist', {bandID: this.band._id, playlistID: id}).subscribe(res => {
      this.toastr.success('usunięto playlistę', 'Udało się!')
      this.refreshValues().subscribe(res => {});
    })
  }
}
