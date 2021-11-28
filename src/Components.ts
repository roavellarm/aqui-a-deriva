import styled from 'styled-components'
import bg from 'images/background.gif'

const pixelToRem = (pixelValue: number) => `${pixelValue / 15}rem`

export const Container = styled.div`
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

interface IValues {
  values: {
    f: number
    w: number
    h: number
    l?: number
    r?: number
    t?: number
    b?: number
  }
}

export const Lamp = styled.div<IValues>`
  position: absolute;
  /* background: rgba(55, 85, 24, 0.6); */
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ values }) => `${values.w}vw`};
  height: ${({ values }) => `${values.h}vh`};
  left: ${({ values }) => (values.l !== undefined ? `${values.l}vw` : 'auto')};
  right: ${({ values }) => (values.r !== undefined ? `${values.r}vw` : 'auto')};
  top: ${({ values }) => (values.t !== undefined ? `${values.t}vh` : 'auto')};
  bottom: ${({ values }) => (values.b !== undefined ? `${values.b}vh` : 'auto')};
  font-size: ${({ values }) => pixelToRem(values.f)};
  color: transparent;
  transition: all ease-in-out 0.4s;

  &:hover {
    color: #eeef80;
    cursor: none;
  }
`

export const InitialButton = styled.div`
  font-size: ${() => pixelToRem(70)};
`
