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
import {MatCheckboxModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { BlockchainComponent } from './blockchain/blockchain.component';

import { AngularFirestore } from '@angular/fire/firestore';


import { AngularFireModule } from '@angular/fire';
import { fqirebase } from '../environments/environment';
import { APIcallService } from './apicall.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    CreateComponent,
    WaterWaysComponent,
    RoadWaysComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fqirebase),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VerticalTimelineModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [APIcallService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }