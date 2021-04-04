import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationSettingPage } from './notification-setting.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationSettingPageRoutingModule {}
