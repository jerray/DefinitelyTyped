// Type definitions for haversine 1.1
// Project: https://github.com/njj/haversine
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace haversine {
    interface CoordinateLongNames {
        longitude: number;
        latitude: number;
    }

    interface CoordinateShortNames {
        lat: number;
        lon: number;
    }

    interface LatLonTuple extends Array<number> {
        0: number;
        1: number;
    }

    interface GeoJSON {
        geometry: {
            coordinates: LatLonTuple
        };
    }

    type Coordinate = (CoordinateLongNames | CoordinateShortNames | LatLonTuple | GeoJSON);

    interface Options {
        /**
         * Unit of measurement applied to result. Default: "km".
         */
        unit?: 'km' | 'mile' | 'meter' | 'nmi';
        /**
         * If passed, will result in library returning boolean value of whether or not the start and end points are within that supplied threshold. Default: null.
         */
        threshold?: number;
        /**
         * Format of coordinate arguments.
         */
        format?: '[lat,lon]' | '[lon,lat]' | '{lon,lat}' | 'geojson';
    }
}

/**
 * Determines the great-circle distance between two points on a sphere given their longitudes and latitudes
 */
declare function haversine(
    start: haversine.Coordinate,
    end: haversine.Coordinate,
    options?: haversine.Options
): number;

export = haversine;
