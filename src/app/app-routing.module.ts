import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ListusersComponent } from "./components/listusers/listusers.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "list",
    component: ListusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
