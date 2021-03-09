import { createGlobalStyle } from 'styled-components'
import { getColor } from '../utils'
import { a11yHidden } from './common'

export const GlobalStyles = createGlobalStyle`
  :root {
      font-size: 10px;
  }
  body {
    font-size: 16px;
    font-family: Spoqa Han Sans, Spoqa Han Sans JP, Sans-serif;
    background-color: ${getColor('black')};
    color: ${getColor('white')};
    box-sizing: border-box;
  }

  abbr {
    ${a11yHidden}
  }
  html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type=button],
  [type=reset],
  [type=submit],
  button {
    -webkit-appearance: button;
  }

  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type=checkbox],
  [type=radio] {
    box-sizing: border-box;
    padding: 0;
  }

  [type=number]::-webkit-inner-spin-button,
  [type=number]::-webkit-outer-spin-button {
    height: auto;
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  body {
    box-sizing: border-box;
  }
  body::before, body::after {
    box-sizing: inherit;
  }
  body * {
    box-sizing: inherit;
  }
  body *::before, body *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  button {
    user-select: none;
    cursor: pointer;
  }

  abbr[title] {
    cursor: help;
    text-decoration: none;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem ${getColor('focusVisible')};
  }
  *:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }
  *:focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.3rem ${getColor('focusVisible')};
  }

  button:focus-visible {
    position: relative;
    z-index: 100;
  }
`
