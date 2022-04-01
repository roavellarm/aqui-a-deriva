import { ICoordinates, TouchPosition } from 'types'

const toPercentage = (value: number, size: number) => (value * 100) / size

const isInRange = (current: number, min: number, max: number) => current >= min && current <= max

const isTouchPositionInTheStarWidthRange = (
  coordinates: ICoordinates,
  touchPosition: TouchPosition
) => {
  const deviceWidth = 375
  const { x, w, f } = coordinates
  const touchXToPercentage = toPercentage(touchPosition.touchX, deviceWidth)
  const widthToPercentage = toPercentage(w + f, deviceWidth)
  const minXPosition = x
  const maxXPosition = x + widthToPercentage
  return isInRange(touchXToPercentage, minXPosition, maxXPosition)
}

const isTouchPositionInTheStarHightRange = (
  coordinates: ICoordinates,
  touchPosition: TouchPosition
) => {
  const deviceHeight = 667
  const { y, h, f } = coordinates
  const { touchY } = touchPosition
  const touchYToPercentage = toPercentage(touchY, deviceHeight)
  const heightToPercentage = toPercentage(h + f, deviceHeight)
  const minYPosition = y
  const maxYPosition = y + heightToPercentage
  return isInRange(touchYToPercentage, minYPosition, maxYPosition)
}

export const isTouchPositionOverTheStar = (
  coordinates: ICoordinates,
  touchPosition: TouchPosition
) =>
  isTouchPositionInTheStarWidthRange(coordinates, touchPosition) &&
  isTouchPositionInTheStarHightRange(coordinates, touchPosition)
