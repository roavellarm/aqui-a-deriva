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

export interface IMobile {
  mobile: {
    // f: number
    // w: number
    // h: number
    // l: number
    // t: number
    isPlaying?: boolean
    f: number
    w: number
    h: number
    l: number
    r?: number
    t: number
    b?: number
  }
}

export interface IStar extends IMobile, ICoordinates {
  name: string
  sound: HTMLAudioElement
}
