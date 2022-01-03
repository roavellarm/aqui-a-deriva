declare module '*.mp3' {
  const mp3: string
  export default mp3
}

export interface ICoordinates {
  isPlaying?: boolean
  f: number
  w: number
  h: number
  l?: number
  r?: number
  t?: number
  b?: number
}

interface ILocationArea {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

interface ILocation {
  coordinates: ICoordinates
  locationArea: ILocationArea
}

export interface IStar {
  name: string
  sound: HTMLAudioElement
  location: ILocation
}

export type IPosition = {
  x: number
  y: number
} | null
