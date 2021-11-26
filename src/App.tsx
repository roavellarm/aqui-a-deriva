import React, { useEffect } from 'react'
import { words } from 'helper'
import { Container, Lamp } from 'Components'

const App = () => {
  const fundo = new Audio('./audios/audio_fundo.mp3')

  useEffect(() => {
    fundo.play().catch((err) => console.log(err))
  }, []) // eslint-disable-line

  return (
    <Container>
      {words.map((w, i) => (
        <Lamp key={i} values={w}>
          {w.text}
        </Lamp>
      ))}
    </Container>
  )
}

export { App }
