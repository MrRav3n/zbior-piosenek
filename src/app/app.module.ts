import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddNewComponent } from './add-new/add-new.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MainService } from "./services/main.service";
import { ReactiveFormsModule } from "@angular/forms";
import { BandComponent } from './band/band.component';
import { MainBandComponent } from './main-band/main-band.component';
import { SingleSongComponent } from './single-song/single-song.component';
import { HttpErrorInterceptor } from "./interceptor/http-error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AllSongsComponent,
    PlaylistComponent,
    AddNewComponent,
    BandComponent,
    MainBandComponent,
    SingleSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: [ToastrService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
