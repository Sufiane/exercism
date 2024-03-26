export function age(planet: keyof typeof PLANET_MAPPING, seconds: number): unknown {
    throw new Error('Remove this statement and implement this function')
}

const PLANET_MAPPING = {
    'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 1.0, // 365.25 Earth days, or 31557600 seconds
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132,
}
