import React, { TouchEvent, useCallback, useEffect, useState } from 'react'
import { stars } from 'cosmos'
import { Star } from 'Star'
import { Universe, StartHere } from 'styles'
import { IPosition } from 'types'

const HereAdrift = () => {
  const [hasBegin, bigBang] = useState(false)
  const [touchPosition, setTouchPosition] = useState<IPosition>(null)
  const backgroundSound = new Audio('./audios/audio_fundo.mp3') // eslint-disable-line

  const playBackgroundSound = useCallback(() => {
    backgroundSound.volume = 0.5
    return backgroundSound.play()
  }, [backgroundSound])

  const handleBigBang = () => {
    bigBang(true)
    return playBackgroundSound()
  }

  const handleOnTouch = (e: TouchEvent) => {
    const { clientX, clientY } = e.nativeEvent.changedTouches[0]
    setTouchPosition({ x: clientX, y: clientY })
  }

  useEffect(() => {
    backgroundSound.addEventListener('ended', playBackgroundSound)
  }, [backgroundSound, playBackgroundSound])

  return (
    <Universe onTouchMove={handleOnTouch}>
      {hasBegin ? (
        stars.map((star) => <Star {...star} key={star.name} touchPosition={touchPosition} />)
      ) : (
        <StartHere onClick={handleBigBang}>aqui</StartHere>
      )}
    </Universe>
  )
}

export { HereAdrift }
