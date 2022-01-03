import styled from 'styled-components'
import bg from 'images/background.gif'
import { ICoordinates } from 'types'
import { pixelToRem } from 'helper'

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

export const StyledStar = styled.div<ICoordinates>`
  position: absolute;
  z-index: 999 !important;
  background: rgba(55, 85, 24, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ w }) => `${w}vw`};
  height: ${({ h }) => `${h}vh`};
  font-size: ${({ f }) => pixelToRem(f)};

  left: ${({ l }) => (l !== undefined ? `${l}vw` : 'auto')};
  right: ${({ r }) => (r !== undefined ? `${r}vw` : 'auto')};
  top: ${({ t }) => (t !== undefined ? `${t}vh` : 'auto')};
  bottom: ${({ b }) => (b !== undefined ? `${b}vh` : 'auto')};

  color: ${({ isPlaying }) => (isPlaying ? '#eeef80' : 'transparent')};
  transition: all ease-in-out 0.5s;

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
