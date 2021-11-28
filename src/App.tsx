/* eslint-disable no-param-reassign */
import React, { useState } from 'react'

import { words } from 'helper'
import { Container, Lamp, InitialButton } from 'Components'

const App = () => {
  const [start, setStart] = useState(false)
  const fundo = new Audio('./audios/audio_fundo.mp3')

  const handleStart = () => {
    setStart(true)
    fundo.volume = 0.1
    return fundo.play()
  }

  const playSound = (sound: HTMLAudioElement) => {
    if (!start) return undefined
    sound.volume = 0.5
    return sound.play()
  }

  return (
    <Container>
      {!start && <InitialButton onClick={handleStart}>aqui</InitialButton>}
      {start &&
        words.map((i) => (
          <Lamp key={i.word} values={i} onMouseOver={() => playSound(i.sound)}>
            {i.word}
          </Lamp>
        ))}
    </Container>
  )
}

export { App }
