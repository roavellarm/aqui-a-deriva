import React, { useCallback, useEffect, useState } from 'react'
import { stars } from 'cosmos'
import { Star } from 'Star'
import { Universe, StartHere } from 'styles'

const HereAdrift = () => {
  const [hasBegin, bigBang] = useState(false)
  const [currentTouchPosition, setCurrentTouchPosition] = useState({ x: 0, y: 0 })
  const backgroundSound = new Audio('./audios/audio_fundo.mp3') // eslint-disable-line

  const playBackgroundSound = useCallback(() => {
    backgroundSound.volume = 0.5
    return backgroundSound.play()
  }, [backgroundSound])

  const handleBigBang = () => {
    bigBang(true)
    return playBackgroundSound()
  }

  const handleTouchPosition = (event: any) => {
    const { clientX, clientY } = event.nativeEvent.touches[0]
    setCurrentTouchPosition({ x: clientX, y: clientY })
  }

  useEffect(() => {
    backgroundSound.addEventListener('ended', playBackgroundSound)
  }, [backgroundSound, playBackgroundSound])

  return (
    <Universe onTouchMove={handleTouchPosition}>
      {hasBegin ? (
        stars.map((star) => (
          <Star data={star} currentTouchPosition={currentTouchPosition} key={star.name} />
        ))
      ) : (
        <StartHere onClick={handleBigBang}>aqui</StartHere>
      )}
    </Universe>
  )
}

export { HereAdrift }
