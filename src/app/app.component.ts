import { Component } from '@angular/core';
import { LatLngLiteral } from '@agm/core/map-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lat: number = 20.0858295;
  private lng: number = -101.7153674;

  private polygon: LatLngLiteral[] = [];

  constructor() { }

  ngOnInit() {
    this.polygon.push({ lat: 19.96196308955015, lng: -103.03921993906249 });
    this.polygon.push({ lat: 19.54837487664654, lng: -102.58328732187499 });
    this.polygon.push({ lat: 19.60013191103163, lng: -103.33035763437499 });
    this.polygon.push({ lat: 19.96196308955015, lng: -103.03921993906249 });
  }

  private onPolyPathsChange(result): void {
    console.log(result);
  }
}
