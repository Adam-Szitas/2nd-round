import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserFacadeService } from "src/app/services/facade/user-facade.service";
import { CardComponent } from "src/app/shared/card/card.component";
import { StoreModule } from "@ngrx/store";
import { FEATURE_NAME_STATE, Reducer } from "src/app/store/reducers/reducer";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME_STATE, Reducer),
  ],
  bootstrap: [DashboardComponent],
  declarations: [DashboardComponent, CardComponent],
  exports: [DashboardComponent, CardComponent],
  providers: [
    UserFacadeService
  ]
})
export class WebModule{}
