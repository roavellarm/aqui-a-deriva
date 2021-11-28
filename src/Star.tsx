import React, { useEffect, useState, memo, useCallback } from 'react'
import { IStar } from 'types'
import { StyledStar } from 'styles'

interface Props {
  data: IStar
}

const Star = memo(({ data }: Props) => {
  const { sound, coordinates, name } = data
  const [isPlaying, setIsPlaying] = useState(false)

  const shineTheStar = () => {
    sound.volume = 0.5 // eslint-disable-line
    sound.play()
    return setIsPlaying(true)
  }

  const updateSoundState = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    sound.addEventListener('ended', updateSoundState)
    return () => sound.removeEventListener('ended', updateSoundState)
  }, [sound, updateSoundState])

  return (
    <StyledStar coordinates={coordinates} isPlaying={isPlaying} onMouseOver={shineTheStar}>
      {name}
    </StyledStar>
  )
})

export { Star }
