declare module '*.mp3' {
  const mp3: string
  export default mp3
}

export interface ICoordinates {
  coordinates: {
    isPlaying?: boolean
    f: number
    w: number
    h: number
    l?: number
    r?: number
    t?: number
    b?: number
  }
}

export interface IStar extends ICoordinates {
  name: string
  sound: HTMLAudioElement
}
