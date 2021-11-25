import React from 'react'
import styled from 'styled-components'

// import bg from 'images/background.gif'
import mapa from 'images/mapa.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Lampada = styled.p``

const Row = styled.div`
  border-bottom: 1px solid darkgray;
  display: flex;
  width: 100%;
  height: 20%;
`

function App() {
  const pixelToRem = (pixelValue: number) => `${pixelValue / 15}rem`

  return (
    <Container
      style={{
        background: `url(${mapa})`,
        // background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Row style={{ justifyContent: 'space-around', alignItems: 'end' }}>
        <Lampada
          style={{
            fontSize: '35px',
            marginLeft: '-3.5rem',
            marginBottom: '-1rem',
          }}
        >
          hoje
        </Lampada>
        <Lampada style={{ fontSize: pixelToRem(40) }}>lá</Lampada>
        <Lampada style={{ fontSize: pixelToRem(60) }}>isso</Lampada>
      </Row>

      <Row style={{ justifyContent: 'space-between', alignItems: 'end' }}>
        <Lampada style={{ fontSize: pixelToRem(40), marginLeft: '2rem', marginBottom: '-1rem' }}>
          agora
        </Lampada>
        <Lampada style={{ fontSize: pixelToRem(65), marginLeft: '-5rem', marginBottom: '-1rem' }}>
          tu
        </Lampada>
        <Lampada style={{ fontSize: pixelToRem(30) }}>nós</Lampada>
        <Lampada style={{ fontSize: pixelToRem(40) }}>aquilo</Lampada>
      </Row>

      <Row style={{ justifyContent: 'space-between', alignItems: 'end' }}>
        <Lampada style={{ fontSize: pixelToRem(50) }}>eu</Lampada>
        <Lampada style={{ fontSize: pixelToRem(70) }}>aqui</Lampada>
        <Lampada style={{ fontSize: pixelToRem(40) }}>aquele</Lampada>
      </Row>

      <Row>
        <Lampada style={{ fontSize: pixelToRem(35) }}>ontem</Lampada>
        <Lampada style={{ fontSize: pixelToRem(35) }}>cá</Lampada>
        <Lampada style={{ fontSize: pixelToRem(30) }}>amanhã</Lampada>
      </Row>

      <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Lampada style={{ fontSize: pixelToRem(25), marginLeft: '4.3rem', marginBottom: '1.6rem' }}>
          este
        </Lampada>
        <Lampada style={{ fontSize: pixelToRem(55), marginRight: '6rem', marginTop: '-4rem' }}>
          ali
        </Lampada>
      </Row>
    </Container>
  )
}

export { App }
