interface Plane {
    model: string,
    npassengers: number
}

type HangarHash = {
    [key: string]: Plane
}

let myHangar: HangarHash = {
}

myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
}
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

Object.keys(myHangar).forEach(plane => {
    console.log(plane + ':' + myHangar[plane].model + '(' + myHangar[plane].npassengers + ')');
})