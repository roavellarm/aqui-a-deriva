import React, { useEffect, useState, memo, useCallback } from 'react'
import { IStar, TouchPosition } from 'types'
import { StyledStar } from './styles'
import { isTouchPositionOverTheStar } from './helpers'

interface Props {
  data: IStar
  touchPosition: TouchPosition
}

const Star = memo(({ data, touchPosition }: Props) => {
  const { sound, coordinates, name } = data
  const [isPlaying, setIsPlaying] = useState(false)

  const shineTheStar = () => {
    sound.volume = 0.5 // eslint-disable-line
    sound.play()
    return setIsPlaying(true)
  }

  const isMobile = true

  const handleMobile = () => {
    if (!isMobile) return undefined
    return isTouchPositionOverTheStar(coordinates, touchPosition) && shineTheStar()
  }

  useEffect(() => {
    handleMobile()
  }, [touchPosition]) // eslint-disable-line

  const stopPlaying = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    sound.addEventListener('ended', stopPlaying)
    return () => sound.removeEventListener('ended', stopPlaying)
  }, [sound, stopPlaying])

  return (
    <StyledStar coordinates={coordinates} isPlaying={isPlaying} onMouseOver={shineTheStar}>
      {name}
    </StyledStar>
  )
})

export { Star }
