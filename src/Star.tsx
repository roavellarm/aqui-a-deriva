import React, { useEffect, useState, memo } from 'react'
import { IStar } from 'types'
import { StyledStar } from 'styles'

interface Props {
  data: IStar
}

const Star = memo(({ data }: Props) => {
  const { sound, coordinates, name } = data
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStar = () => {
    sound.volume = 0.5 // eslint-disable-line
    sound.play()
    return setIsPlaying(true)
  }

  // console.log(`${name} is playing: ${isPlaying}`) // eslint-disable-line

  useEffect(() => {
    sound.addEventListener('ended', () => setIsPlaying(false))
    return () => sound.removeEventListener('ended', () => setIsPlaying(false))
  }, [sound])

  return (
    <StyledStar coordinates={coordinates} isPlaying={isPlaying} onMouseOver={handleStar}>
      {name}
    </StyledStar>
  )
})

export { Star }
