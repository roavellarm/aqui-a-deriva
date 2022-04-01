declare module '*.mp3' {
  const mp3: string
  export default mp3
}

export type TouchPosition = {
  touchX: number
  touchY: number
}
export interface ICoordinates {
  f: number
  w: number
  h: number
  x: number
  y: number
}
export interface IStar {
  name: string
  sound: HTMLAudioElement
  coordinates: ICoordinates
}
