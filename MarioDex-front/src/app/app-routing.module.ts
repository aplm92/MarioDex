import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarioDexPageComponent } from './features/mario/MarioDexPageComponent/MarioDexPage.component';

const routes: Routes = [
  {
    path: '',
    component: MarioDexPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
