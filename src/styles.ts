import styled from 'styled-components'
import bg from 'images/background.gif'
import { IMobile } from 'types'

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

interface Props extends IMobile {
  isPlaying: boolean
}

export const StyledStar = styled.div<Props>`
  position: absolute;
  background: rgba(55, 85, 24, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ mobile: x }) => `${x.w}vw`};
  height: ${({ mobile: y }) => `${y.h}vh`};
  font-size: ${({ mobile: z }) => pixelToRem(z.f)};

  /* left: ${({ mobile: x }) => (x.l !== undefined ? `${x.l}vw` : 'auto')};
  right: ${({ mobile: x }) => (x?.r !== undefined ? `${x?.r}vw` : 'auto')};
  top: ${({ mobile: y }) => (y.t !== undefined ? `${y.t}vh` : 'auto')};
  bottom: ${({ mobile: y }) => (y.b !== undefined ? `${y.b}vh` : 'auto')}; */
  left: ${({ mobile: x }) => `${x.l}vw`};
  top: ${({ mobile: y }) => `${y.t}vh`};

  color: ${({ isPlaying }) => (isPlaying ? '#eeef80' : 'transparent')};
  transition: all ease-in-out 0.5s;

  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  user-select: none;

  &:hover {
    color: #eeef80;
    cursor: none;
  }
`

export const StartHere = styled.p`
  font-size: ${() => pixelToRem(70)};
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.5;
  }
`
