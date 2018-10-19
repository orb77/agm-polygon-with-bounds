import { Directive, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { AgmPolygon } from '@agm/core/directives/polygon';
import { PolygonManager } from '@agm/core/services/managers/polygon-manager';
import { LatLngLiteral } from '@agm/core/map-types';

@Directive({
  selector: 'agm-polygon-with-bounds'
})
export class AgmPolygonWithBoundsDirective extends AgmPolygon implements AfterContentInit {

  @Output() polyPathsChange: EventEmitter<Array<LatLngLiteral>> = new EventEmitter<Array<LatLngLiteral>>();

  constructor(polygonManager: PolygonManager) {
    super(polygonManager);
  }

  public ngAfterContentInit(): void {
    this.initEventListners();
  }

  private initEventListners(): void {
    let self: any = this;

    const checkForPathsChange = () => {
      self._polygonManager._polygons
        .get(self)
        .then((result) => {
          let paths = this.convertToLatLngLiteral(result.getPath().getArray());
          let arePathsChanged: boolean = false;
          if (self.paths.length !== paths.length) {
            self.paths = paths;
            arePathsChanged = true;
          } else if (JSON.stringify(this.paths) !== JSON.stringify(paths)) {
            self.paths = paths;
            arePathsChanged = true;
          }
          if (arePathsChanged) {
            self.polyPathsChange.emit(paths);
          }
        });
    };

    self._polygonManager
      .createEventObservable('mouseup', self)
      .subscribe(checkForPathsChange)
  }

  private convertToLatLngLiteral(array: any): Array<LatLngLiteral> {
    let result: Array<LatLngLiteral> = new Array<LatLngLiteral>();
    for (let coords of array) {
      result.push({
        lat: coords.lat(),
        lng: coords.lng()
      });
    }
    return result;
  }

}
