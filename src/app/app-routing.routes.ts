import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { MessageComponent } from "./admin/message/message.component";
import { ManagebooksComponent } from "./admin/managebooks/managebooks.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";

const routes:Routes=[
    {
        path: 'admin', component: AdminComponent, children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'manage-books', component: ManagebooksComponent },
          { path: 'message', component: MessageComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
      },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }