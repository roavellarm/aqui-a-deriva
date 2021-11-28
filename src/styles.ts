import styled from 'styled-components'
import bg from 'images/background.gif'
import { ICoordinates } from 'types'

const pixelToRem = (pixelValue: number) => `${pixelValue / 15}rem`

export const Universe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

interface Props extends ICoordinates {
  isPlaying: boolean
}

export const StyledStar = styled.div<Props>`
  position: absolute;
  /* background: rgba(55, 85, 24, 0.6); */
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ coordinates: x }) => `${x.w}vw`};
  height: ${({ coordinates: x }) => `${x.h}vh`};
  left: ${({ coordinates: x }) => (x.l !== undefined ? `${x.l}vw` : 'auto')};
  right: ${({ coordinates: x }) => (x.r !== undefined ? `${x.r}vw` : 'auto')};
  top: ${({ coordinates: x }) => (x.t !== undefined ? `${x.t}vh` : 'auto')};
  bottom: ${({ coordinates: x }) => (x.b !== undefined ? `${x.b}vh` : 'auto')};
  font-size: ${({ coordinates: x }) => pixelToRem(x.f)};
  color: ${({ isPlaying }) => (isPlaying ? '#eeef80' : 'transparent')};
  transition: all ease-in-out 0.5s;

  &:hover {
    color: #eeef80;
    cursor: none;
  }
`

export const StartHere = styled.div`
  font-size: ${() => pixelToRem(70)};
`
