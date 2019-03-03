import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { CreateComponent } from './create/create.component';
import { RoadWaysComponent } from './road-ways/road-ways.component';
import { WaterWaysComponent } from './water-ways/water-ways.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'track', component: TrackComponent},
  { path: '', component: TrackComponent},
  { path: 'create', component: CreateComponent},
  { path: 'home', component: HomeComponent},
  { path: 'roadways', component: RoadWaysComponent},
  { path: 'waterways', component: WaterWaysComponent},
  { path: 'blockchain', component: BlockchainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
