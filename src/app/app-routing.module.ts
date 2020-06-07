import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { AllSongsComponent } from "./all-songs/all-songs.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { AddNewComponent } from "./add-new/add-new.component";
import { BandComponent } from "./band/band.component";
import { MainBandComponent } from "./main-band/main-band.component";
import { SingleSongComponent } from "./single-song/single-song.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'band', component: BandComponent, children: [
      {path: 'all-songs', component: AllSongsComponent},
      {path: '', component: MainBandComponent},
      {path: 'playlist', component: PlaylistComponent},
      {path: 'add-new', component: AddNewComponent},
      {path: 'current-playlist', component: PlaylistComponent},
      {path: 'current-song', component: SingleSongComponent},
    ]},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
