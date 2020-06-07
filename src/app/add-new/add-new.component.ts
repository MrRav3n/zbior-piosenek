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
  }
  addNewPlaylist() {
    this.addNewPlaylistForm.setControl('bandID', new FormControl(this.main.band._id))
    this.main.addNewPlaylist(this.addNewPlaylistForm.value);
  }
  addNewSongToPlaylist() {
    this.addSongToPlaylistForm.setControl('bandID', new FormControl(this.main.band._id))
    this.main.addNewSongToPlaylist(this.addSongToPlaylistForm.value);
  }
  addNewSong() {
    this.addNewSongForm.setControl('bandID', new FormControl(this.main.band._id))
    this.main.addNewSong(this.addNewSongForm.value);
  }
}
