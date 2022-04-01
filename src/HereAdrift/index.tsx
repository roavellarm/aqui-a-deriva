import React, { useCallback, useEffect, useState } from 'react'

import { Star } from 'Star'
import { starsInfoList } from './cosmos'
import { Universe, StartHere } from './styles'

const HereAdrift = () => {
  const [hasBegin, bigBang] = useState(false)
  const [touchPosition, setTouchPosition] = useState({ touchX: 0, touchY: 0 })
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
    return setTouchPosition({ touchX: clientX, touchY: clientY })
  }

  useEffect(() => {
    backgroundSound.addEventListener('ended', playBackgroundSound)
  }, [backgroundSound, playBackgroundSound])

  return (
    <Universe onTouchMove={handleTouchPosition}>
      {hasBegin ? (
        starsInfoList.map((starInfo) => (
          <Star data={starInfo} touchPosition={touchPosition} key={starInfo.name} />
        ))
      ) : (
        <StartHere onClick={handleBigBang}>aqui</StartHere>
      )}
    </Universe>
  )
}

export { HereAdrift }
