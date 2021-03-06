import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './views';

const routes: Routes = [
  { path: '', redirectTo: 'forecast', pathMatch: 'full' },
  { path: 'forecast', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
