import { ICoordinates } from 'types'

export const PX_PROPORTION = 15

export const calculateStarLocationArea = ({ f, l, r, t, b, w, h }: ICoordinates) => {
  const minX = l || (r ? r - w : 0)
  const maxX = r || (l ? l + w : 0) * 3.54
  const minY = t || (b ? b + h : 0)
  const maxY = b || (t ? t + h : 0) * 6.55 * 2.2758

  return {
    coordinates: { f, w, h, l, r, t, b },
    locationArea: { minX, maxX, minY, maxY },
  }
}

export const pixelToRem = (pixelValue: number) => `${pixelValue / 15}rem`
