import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MenuComponent } from './components/menu/menu.component';
// import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { AddComponent } from './components/add/add.component';
// import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent
  }
  // {
  //   path: '',
  //   component: MenuComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
