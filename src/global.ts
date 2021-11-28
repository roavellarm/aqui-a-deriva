import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lora', serif;
  color: #eeef80;
  background: #000000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* cursor: url('./images/prego.gif'), auto; */
  cursor: crosshair;
}

@media (max-width: 4000px) { html { font-size: 257%; } }
@media (max-width: 2500px) { html { font-size: 247%; } }
@media (max-width: 2400px) { html { font-size: 237%; } }
@media (max-width: 2300px) { html { font-size: 227%; } }
@media (max-width: 2200px) { html { font-size: 217%; } }
@media (max-width: 2100px) { html { font-size: 207%; } }
@media (max-width: 2000px) { html { font-size: 197%; } }
@media (max-width: 1900px) { html { font-size: 187%; } }
@media (max-width: 1800px) { html { font-size: 177%; } }
@media (max-width: 1700px) { html { font-size: 167%; } }
@media (max-width: 1600px) { html { font-size: 157%; } }
@media (max-width: 1500px) { html { font-size: 147%; } }
@media (max-width: 1400px) { html { font-size: 137%; } }
@media (max-width: 1300px) { html { font-size: 127%; } }
@media (max-width: 1200px) { html { font-size: 117%; } }
@media (max-width: 1100px) { html { font-size: 105%; } }
@media (max-width: 1000px) { html { font-size: 95%; } }
@media (max-width: 900px)  { html { font-size: 85%; } }
@media (max-width: 800px)  { html { font-size: 75%; } }
@media (max-width: 700px)  { html { font-size: 65%; } }
@media (max-width: 600px)  { html { font-size: 55%; } }
`
