import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { AllSongsComponent } from "./Components/all-songs/all-songs.component";
import { PlaylistComponent } from "./Components/playlist/playlist.component";
import { AddNewComponent } from "./Components/add-new/add-new.component";
import { BandComponent } from "./Components/band/band.component";
import { MainBandComponent } from "./Components/main-band/main-band.component";
import { SingleSongComponent } from "./Components/single-song/single-song.component";


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
