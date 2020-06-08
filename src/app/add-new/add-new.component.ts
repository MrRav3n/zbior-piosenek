import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  addNewPlaylistForm: FormGroup;
  addSongToPlaylistForm: FormGroup;
  addNewSongForm: FormGroup;
  songs = [];

  constructor(
    public main: MainService
  ) {
    this.addNewPlaylistForm = new FormGroup({
      playlistName: new FormControl('', Validators.required)
    })
    this.addSongToPlaylistForm = new FormGroup({
      songID: new FormControl('', Validators.required),
      playlistID: new FormControl('', Validators.required)
    })
    this.addNewSongForm = new FormGroup({
      songName: new FormControl('', Validators.required),
      textToSend: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.addSongToPlaylistForm.get('playlistID').valueChanges.subscribe(v => {
      this.songs = this.main.songs.filter((item) => {
        return !this.main.band.playlist[this.addSongToPlaylistForm.get('playlistID').value.split('$')[1]].songs.includes(item._id);
      });
    })
  }

  addNewPlaylist() {
    if (this.addNewPlaylistForm.valid) {
      this.addNewPlaylistForm.setControl('bandID', new FormControl(this.main.band._id))
      this.main.addNewPlaylist(this.addNewPlaylistForm.value);
    }
  }

  addNewSongToPlaylist() {
    if (this.addSongToPlaylistForm.valid) {
      this.addSongToPlaylistForm.setControl('bandID', new FormControl(this.main.band._id))
      this.addSongToPlaylistForm.setControl('playlistID', new FormControl(this.addSongToPlaylistForm.get('playlistID').value.split('$')[0]))
      this.main.addNewSongToPlaylist(this.addSongToPlaylistForm.value);
    }
  }
  addNewSong() {
    if (this.addNewSongForm.valid) {
      this.addNewSongForm.setControl('bandID', new FormControl(this.main.band._id))
      this.main.addNewSong(this.addNewSongForm.value);
    }
  }

}
