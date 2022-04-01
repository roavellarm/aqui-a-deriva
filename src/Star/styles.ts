import styled from 'styled-components'

import { pixelToRem } from 'helper'
import { ICoordinates } from 'types'

interface Props {
  isPlaying: boolean
  coordinates: ICoordinates
}

export const StyledStar = styled.div<Props>`
  position: absolute;
  /* background: rgba(55, 85, 24, 0.6); */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ coordinates }) => pixelToRem(coordinates.f)};
  width: ${({ coordinates }) => `${coordinates.w}vw`};
  height: ${({ coordinates }) => `${coordinates.h}vh`};
  left: ${({ coordinates }) => `${coordinates.x}vw`};
  top: ${({ coordinates }) => `${coordinates.y}vh`};

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
