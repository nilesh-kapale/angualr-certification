import { WeatherForecastComponent } from "./weather-forecast/weather-forecast.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherDashboardComponent } from "./weather-dashboard/weather-dashboard.component";

const routes: Routes = [
  { path: "", component: WeatherDashboardComponent },
  { path: "forecast/:location", component: WeatherForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
