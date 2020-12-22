import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'
import { ThemeProps } from './theme'

interface GlobalProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  /* reset and normalize */
  ${reset}
  ${normalize}

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Exo', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 1em;
  }

  // clean UL and LI
  ul, li {
    margin: 0;

    li, p {
      margin: 5px 0;
    }
  }

  h1, h2, h3 {
    margin: 20px 0;
    padding: 0;
    font-family: 'Exo', sans-serif;
    font-weight: 700;
  }

  h1 {
    font-size: 48px;
    line-height: 110%;
  }

  h2 {
    font-size: 30px;
    line-height: 120%;
  }

  h3 {
    font-size: 20px;
    line-height: 130%;
  }

  a {
    display: inline-block;
    font-weight: 500;
    transition: all .2s;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }

  b, strong {
    font-weight: 700;
  }

  i, em {
    font-style: italic;
  }

  hr {
    margin: 0;
  }

  /* image caption */

  /* lists */

  ul, ol {
    li {
      padding-left: 25px;
      position: relative;
      line-height: 1.2em;
      &:before {
        font-weight: 700;
        top: -1px;
        left: 5px;
        position: absolute;
      }
    }
  }

  ul {
    li {
      &:before {
        content: '\\203A';
      }
    }
  }

  ol {
    li {
      counter-increment: step-counter;
      &:before {
        content: counter(step-counter) '.';
      }
    }
  }
`

export default GlobalStyle
