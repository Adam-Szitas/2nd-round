import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserFacadeService } from "src/app/services/facade/user-facade.service";


@NgModule({
  imports: [
    DashboardComponent
  ],
  bootstrap: [DashboardComponent],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [
    UserFacadeService
  ]
})
export class WebModule{}
