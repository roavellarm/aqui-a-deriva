import React, { useEffect, useState, memo, useCallback } from 'react'
import { IStar } from 'types'
import { StyledStar } from 'styles'

interface Props {
  data: IStar
  currentTouchPosition: {
    x: number
    y: number
  }
}

const Star = memo(({ data, currentTouchPosition }: Props) => {
  const { sound, mobile, name } = data
  const [isPlaying, setIsPlaying] = useState(false)

  const shineTheStar = () => {
    sound.volume = 0.5 // eslint-disable-line
    sound.play()
    return setIsPlaying(true)
  }

  const isInWidthRange = (xToPercentage: number, left: number, width: number) => {
    if (xToPercentage > left && xToPercentage < left + width) {
      return true
    }
    return false
  }

  const isInHeightRange = (yToPercentage: number, top: number, height: number) => {
    if (yToPercentage > top && yToPercentage < top + height) {
      return true
    }
    return false
  }

  const handleMobile = () => {
    const deviceWidth = 375
    const deviceHeight = 667
    const { l, t, w, h, f } = data.mobile
    const { x, y } = currentTouchPosition

    const xToPercentage = (x * 100) / deviceWidth
    const yToPercentage = (y * 100) / deviceHeight
    const heightToPercentage = ((h + f) * 100) / deviceHeight
    const widthToPercentage = ((w + f) * 100) / deviceWidth

    if (
      isInWidthRange(xToPercentage, l, widthToPercentage) &&
      isInHeightRange(yToPercentage, t, heightToPercentage)
    ) {
      shineTheStar()
    }
  }

  useEffect(() => {
    handleMobile()
  }, [currentTouchPosition]) // eslint-disable-line

  const stopPlaying = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    sound.addEventListener('ended', stopPlaying)
    return () => sound.removeEventListener('ended', stopPlaying)
  }, [sound, stopPlaying])

  return (
    <StyledStar
      // coordinates={coordinates}
      mobile={mobile}
      isPlaying={isPlaying}
      onMouseOver={shineTheStar}
    >
      {name}
    </StyledStar>
  )
})

export { Star }
