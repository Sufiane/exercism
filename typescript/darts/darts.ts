const CENTER_X = 0
const CENTER_Y = 0

enum CIRCLES_RADIUS {
    OUTER = 10,
    MIDDLE = 5,
    INNER = 1
}

const isDartOut = (distance: number): boolean => distance > CIRCLES_RADIUS.OUTER

const getDistanceFromCenter = (x: number, y: number): number => {
    return Math.sqrt(Math.pow(x - CENTER_X, 2) + Math.pow(y - CENTER_Y, 2))
}

export function score(x: number, y: number): number {
    const distance = getDistanceFromCenter(x, y)

    if (isDartOut(distance)) {
        return 0
    } else if (distance <= CIRCLES_RADIUS.INNER) {
        return 10
    } else if (distance <= CIRCLES_RADIUS.MIDDLE) {
        return 5
    } else {
        return 1
    }
}
