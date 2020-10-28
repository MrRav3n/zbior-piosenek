import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { AllSongsComponent } from './Components/all-songs/all-songs.component';
import { PlaylistComponent } from './Components/playlist/playlist.component';
import { AddNewComponent } from './Components/add-new/add-new.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MainService } from "./Core/services/main-service/main.service";
import { ReactiveFormsModule } from "@angular/forms";
import { BandComponent } from './Components/band/band.component';
import { MainBandComponent } from './Components/main-band/main-band.component';
import { SingleSongComponent } from './Components/single-song/single-song.component';
import { HttpErrorInterceptor } from "./Core/services/interceptor/http-error.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterModalComponent } from './Components/Modals/register-modal/register-modal.component';
import { SureConfirmationComponent } from './Components/Modals/sure-confirmation/sure-confirmation.component';

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
    RegisterModalComponent,
    SureConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
