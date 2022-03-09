import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { OverviewResolver } from './overview/overview.resolver';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    resolve: {
      workData: OverviewResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
