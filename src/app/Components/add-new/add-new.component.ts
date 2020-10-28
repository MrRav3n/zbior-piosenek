import { Component, OnInit } from '@angular/core';
import { MainService } from "../../Core/services/main-service/main.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

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
    public main: MainService,
    private toastr: ToastrService
  ) {
    this.addNewPlaylistForm = new FormGroup({
      playlistName: new FormControl('', Validators.required)
    })
    this.addSongToPlaylistForm = new FormGroup({
      songID: new FormControl('', Validators.required),
      playlistID: new FormControl('', Validators.required),
      bandID: new FormControl('', Validators.required)
    })
    this.addNewSongForm = new FormGroup({
      songName: new FormControl('', Validators.required),
      textToSend: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {}
  onEditClick(val: any) {
    this.songs = this.main.songs.filter((item) => {
      return !this.main.band.playlist[val.split('$')[1]].songs.includes(item._id);
    });
  }

  addNewPlaylist() {
    if (this.addNewPlaylistForm.valid) {
      this.addNewPlaylistForm.setControl('bandID', new FormControl(this.main.band._id))
      this.main.addNewPlaylist(this.addNewPlaylistForm.value);
    }
  }

  addNewSongToPlaylist() {
    this.addSongToPlaylistForm.controls.playlistID.setValue(this.addSongToPlaylistForm.get('playlistID').value.split('$')[0]);
    this.addSongToPlaylistForm.controls.bandID.setValue(this.main.band._id);
    if (this.addSongToPlaylistForm.valid) {
      this.main.addNewSongToPlaylist(this.addSongToPlaylistForm.value).subscribe(res => {
        this.toastr.success('Dodano nową piosenkę do playlisty.', 'Udało się!')
        this.main.refreshValues().subscribe(res => {
          this.main.refresh();
        });
      });
    }
  }
  addNewSong() {
    if (this.addNewSongForm.valid) {
      this.addNewSongForm.setControl('bandID', new FormControl(this.main.band._id))
      this.main.addNewSong(this.addNewSongForm.value);
    }
  }

}
