export var FOO = 'bar';

export function search(x, y) {
    console.log('searching...');
}

export function getLocationName(x, y) {
    search(x, y);
    console.log('requesting...');
}

export function getCurrentLocation() {
    console.log('locating...');
}
