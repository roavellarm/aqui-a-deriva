import React, { useState } from 'react'
import { stars } from 'cosmos'
import { Star } from 'Star'
import { Universe, StartHere } from 'styles'

const HereAdrift = () => {
  const [hasBegin, bigBang] = useState(false)
  const backgroundSound = new Audio('./audios/audio_fundo.mp3')

  const handleBigBang = () => {
    bigBang(true)
    backgroundSound.volume = 0.5
    return backgroundSound.play()
  }

  return (
    <Universe>
      {hasBegin ? (
        stars.map((star) => <Star data={star} key={star.name} />)
      ) : (
        <StartHere onClick={handleBigBang}>aqui</StartHere>
      )}
    </Universe>
  )
}

export { HereAdrift }
