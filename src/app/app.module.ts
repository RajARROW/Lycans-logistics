import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';

import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { CreateComponent } from './create/create.component';
import { WaterWaysComponent } from './water-ways/water-ways.component';
import { RoadWaysComponent } from './road-ways/road-ways.component';
import {MatCheckboxModule, MatListModule,
  MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BlockchainComponent } from './blockchain/blockchain.component';

import { AngularFirestore } from '@angular/fire/firestore';


import { AngularFireModule } from '@angular/fire';
import { fqirebase } from '../environments/environment';
import { APIcallService } from './apicall.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    CreateComponent,
    WaterWaysComponent,
    RoadWaysComponent,
    BlockchainComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fqirebase),
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    VerticalTimelineModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  providers: [APIcallService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
