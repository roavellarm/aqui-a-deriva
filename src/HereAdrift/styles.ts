import styled from 'styled-components'
import bg from 'images/background.gif'
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

export const StartHere = styled.p`
  font-size: ${() => pixelToRem(70)};
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    opacity: 0.5;
  }
`
