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
  height: ${({ coordinates: y }) => `${y.h}vh`};
  font-size: ${({ coordinates: z }) => pixelToRem(z.f)};

  left: ${({ coordinates: x }) => (x.l !== undefined ? `${x.l}vw` : 'auto')};
  right: ${({ coordinates: x }) => (x.r !== undefined ? `${x.r}vw` : 'auto')};
  top: ${({ coordinates: y }) => (y.t !== undefined ? `${y.t}vh` : 'auto')};
  bottom: ${({ coordinates: y }) => (y.b !== undefined ? `${y.b}vh` : 'auto')};

  color: ${({ isPlaying }) => (isPlaying ? '#eeef80' : 'transparent')};
  transition: all ease-in-out 0.5s;

  &:hover {
    color: #eeef80;
    cursor: none;
  }
`

export const StartHere = styled.div`
  font-size: ${() => pixelToRem(70)};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
