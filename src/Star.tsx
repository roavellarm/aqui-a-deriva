import React, { useEffect, useState, memo, useCallback } from 'react'
import { IPosition, IStar } from 'types'
import { StyledStar } from 'styles'

interface StarProps extends IStar {
  touchPosition: IPosition
}

const Star = memo(({ name, sound, location, touchPosition }: StarProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { coordinates, locationArea } = location
  const { minX, maxX, minY, maxY } = locationArea

  const shineTheStar = useCallback(() => {
    sound.volume = 0.5 // eslint-disable-line
    sound.play()
    return setIsPlaying(true)
  }, [sound])

  const updateSoundState = useCallback(() => setIsPlaying(false), [])

  const isTouchingTheStar = useCallback(() => {
    if (!touchPosition) return undefined
    const { x, y } = touchPosition
    if (x >= minX && x <= maxX && y >= minY && y <= maxY) return shineTheStar()
    return undefined
  }, [maxX, maxY, minX, minY, shineTheStar, touchPosition])

  useEffect(() => {
    console.log(coordinates, locationArea, touchPosition, window.innerWidth, window.innerHeight)
    isTouchingTheStar()
  }, [touchPosition]) // eslint-disable-line

  useEffect(() => {
    sound.addEventListener('ended', updateSoundState)
    return () => sound.removeEventListener('ended', updateSoundState)
  }, [sound, updateSoundState])

  return (
    <>
      <StyledStar
        {...coordinates}
        isPlaying={isPlaying}
        onDragOverCapture={shineTheStar}
        onMouseOver={shineTheStar}
      >
        {name}
      </StyledStar>
      {/* <div
        style={{
          position: 'absolute',
          background: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          left: `${minX}vw`,
          top: `${coordinates.t}vh`,
          width: `${maxX - minX}vw`,
          height: `${maxY - minY}vh`,
        }}
      >
        .a
      </div> */}
    </>
  )
})

export { Star }
