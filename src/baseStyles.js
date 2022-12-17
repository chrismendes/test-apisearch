import { createGlobalStyle } from "styled-components";

/**
 * Global base styles borrowed from Picnic CSS (https://picnicss.com/)
 */

const BaseStyles = createGlobalStyle`

  @charset "UTF-8";
  /**
   * 1. Set default font family to sans-serif.
   * 2. Prevent iOS text size adjust after orientation change, without disabling
   *    user zoom.
   */
  html {
    font-family: sans-serif;
    /* 1 */
    -ms-text-size-adjust: 100%;
    /* 2 */
    -webkit-text-size-adjust: 100%;
    /* 2 */ }

  /**
   * Remove default margin.
   */
  body {
    margin: 0; }

  /* HTML5 display definitions
    ========================================================================== */
  /**
   * Correct 'block' display not defined for any HTML5 element in IE 8/9.
   * Correct 'block' display not defined for 'details' or 'summary' in IE 10/11 and Firefox.
   * Correct 'block' display not defined for 'main' in IE 11.
   */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block; }

  /**
   * 1. Correct 'inline-block' display not defined in IE 8/9.
   * 2. Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera.
   */
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    /* 1 */
    vertical-align: baseline;
    /* 2 */ }

  /**
   * Prevent modern browsers from displaying 'audio' without controls.
   * Remove excess height in iOS 5 devices.
   */
  audio:not([controls]) {
    display: none;
    height: 0; }

  /**
   * Address '[hidden]' styling not present in IE 8/9/10.
   * Hide the 'template' element in IE 8/9/11, Safari, and Firefox < 22.
   */
  [hidden],
  template {
    display: none; }

  /* Links
    ========================================================================== */
  /**
   * Remove the gray background color from active links in IE 10.
   */
  a {
    background: transparent; }

  /**
   * Improve readability when focused and also mouse hovered in all browsers.
   */
  a:active,
  a:hover {
    outline: 0; }

  /* Text-level semantics
    ========================================================================== */
  /**
   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
   */
  abbr[title] {
    border-bottom: 1px dotted; }

  /**
   * Address style set to 'bolder' in Firefox 4+, Safari, and Chrome.
   */
  b,
  strong {
    font-weight: bold; }

  /**
   * Address styling not present in Safari and Chrome.
   */
  dfn {
    font-style: italic; }

  /**
   * Address variable 'h1' font-size and margin within 'section' and 'article'
   * contexts in Firefox 4+, Safari, and Chrome.
   */
  h1 {
    font-size: 2em;
    margin: 0.67em 0; }

  /**
   * Address styling not present in IE 8/9.
   */
  mark {
    background: #fff;
    color: #111; }

  /**
   * Address inconsistent and variable font size in all browsers.
   */
  small {
    font-size: 80%; }

  /**
   * Prevent 'sub' and 'sup' affecting 'line-height' in all browsers.
   */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline; }

  sup {
    top: -0.5em; }

  sub {
    bottom: -0.25em; }

  /* Embedded content
    ========================================================================== */
  /**
   * Remove border when inside 'a' element in IE 8/9/10.
   */
  img {
    border: 0; }

  /**
   * Correct overflow not hidden in IE 9/10/11.
   */
  svg:not(:root) {
    overflow: hidden; }

  /* Grouping content
    ========================================================================== */
  /**
   * Address margin not present in IE 8/9 and Safari.
   */
  figure {
    margin: 1em 40px; }

  /**
   * Address differences between Firefox and other browsers.
   */
  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0; }

  /**
   * Contain overflow in all browsers.
   */
  pre {
    overflow: auto; }

  /**
   * Address odd 'em'-unit font size rendering in all browsers.
   */
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em; }

  /* Forms
    ========================================================================== */
  /**
   * Known limitation: by default, Chrome and Safari on OS X allow very limited
   * styling of 'select', unless a 'border' property is set.
   */
  /**
   * 1. Correct color not being inherited.
   *    Known issue: affects color of disabled elements.
   * 2. Correct font properties not being inherited.
   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    /* 1 */
    font: inherit;
    /* 2 */
    margin: 0;
    /* 3 */ }

  /**
   * Address 'overflow' set to 'hidden' in IE 8/9/10/11.
   */
  button {
    overflow: visible; }

  /**
   * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
   * All other form control elements do not inherit 'text-transform' values.
   * Correct 'button' style inheritance in Firefox, IE 8/9/10/11, and Opera.
   * Correct 'select' style inheritance in Firefox.
   */
  button,
  select {
    text-transform: none; }

  /**
   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
   *    and 'video' controls.
   * 2. Correct inability to style clickable 'input' types in iOS.
   * 3. Improve usability and consistency of cursor style between image-type
   *    'input' and others.
   */
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    /* 2 */
    cursor: pointer;
    /* 3 */ }

  /**
   * Re-set default cursor for disabled elements.
   */
  button[disabled],
  input[disabled] {
    cursor: default; }

  /**
   * Remove inner padding and border in Firefox 4+.
   */
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0; }

  /**
   * Address Firefox 4+ setting 'line-height' on 'input' using '!important' in
   * the UA stylesheet.
   */
  input {
    line-height: normal; }

  /**
   * It's recommended that you don't attempt to style these elements.
   * Firefox's implementation doesn't respect box-sizing, padding, or width.
   *
   * 1. Address box sizing set to 'content-box' in IE 8/9/10.
   * 2. Remove excess padding in IE 8/9/10.
   */
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */ }

  /**
   * Fix the cursor style for Chrome's increment/decrement buttons. For certain
   * 'font-size' values of the 'input', it causes the cursor style of the
   * decrement button to change from 'default' to 'text'.
   */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto; }

  /**
   * Remove inner padding and search cancel button in Safari and Chrome on OS X.
   * Safari (but not Chrome) clips the cancel button when the search input has
   * padding (and 'textfield' appearance).
   */
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none; }

  /**
   * Define consistent border, margin, and padding.
   */
  fieldset {
    border: 0;
    padding: 0; }

  /**
   * 1. Correct 'color' not being inherited in IE 8/9/10/11.
   * 2. Remove padding so people aren't caught out if they zero out fieldsets.
   */
  legend {
    border: 0;
    /* 1 */
    padding: 0;
    /* 2 */ }

  /**
   * Remove default vertical scrollbar in IE 8/9/10/11.
   */
  textarea {
    overflow: auto; }

  /**
   * Don't inherit the 'font-weight' (applied by a rule above).
   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
   */
  optgroup {
    font-weight: bold; }

  /* Tables
    ========================================================================== */
  /**
   * Remove most spacing between table cells.
   */
  table {
    border-collapse: collapse;
    border-spacing: 0; }

  td,
  th {
    padding: 0; }

  * {
    box-sizing: inherit; }

  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    height: 100%; }

  body {
    color: #111;
    font-size: 1.1em;
    line-height: 1.5;
    background: #fff; }

  main {
    display: block; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0.6em 0; }

  li {
    margin: 0 0 0.3em; }

  a {
    color: #0074d9;
    text-decoration: none;
    box-shadow: none;
    transition: all 0.3s; }

  code {
    padding: 0.3em 0.6em;
    font-size: .8em;
    background: #f5f5f5; }

  pre {
    text-align: left;
    padding: 0.3em 0.6em;
    background: #f5f5f5;
    border-radius: 0.2em; }
    pre code {
      padding: 0; }

  blockquote {
    padding: 0 0 0 1em;
    margin: 0 0 0 .1em;
    box-shadow: inset 5px 0 rgba(17, 17, 17, 0.3); }

  label {
    cursor: pointer; }

  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    margin: 0 0.6em 0 0; }

  i[class^="icon-"]:before,
  i[class*=" icon-"]:before {
    margin: 0; }

  .label, [data-tooltip]:after, button,
  .button,
  [type=submit], .dropimage {
    display: inline-block;
    text-align: center;
    letter-spacing: inherit;
    margin: 0;
    padding: 0.3em 0.9em;
    vertical-align: middle;
    background: #0074d9;
    color: #fff;
    border: 0;
    border-radius: 0.2em;
    width: auto;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }
    .success.label, .success[data-tooltip]:after, button.success,
    .success.button,
    .success[type=submit], .success.dropimage {
      background: #2ecc40; }
    .warning.label, .warning[data-tooltip]:after, button.warning,
    .warning.button,
    .warning[type=submit], .warning.dropimage {
      background: #ff851b; }
    .error.label, .error[data-tooltip]:after, button.error,
    .error.button,
    .error[type=submit], .error.dropimage {
      background: #ff4136; }
    .pseudo.label, .pseudo[data-tooltip]:after, button.pseudo,
    .pseudo.button,
    .pseudo[type=submit], .pseudo.dropimage {
      background-color: transparent;
      color: inherit; }

  .label, [data-tooltip]:after {
    font-size: .6em;
    padding: .4em .6em;
    margin-left: 1em;
    line-height: 1; }

  button,
  .button,
  [type=submit], .dropimage {
    margin: 0.3em 0;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.2em;
    height: auto;
    vertical-align: baseline;
    box-shadow: 0 0 rgba(17, 17, 17, 0) inset; }
    button:hover,
    .button:hover,
    :hover[type=submit], .dropimage:hover, button:focus,
    .button:focus,
    :focus[type=submit], .dropimage:focus {
      box-shadow: inset 0 0 0 99em rgba(255, 255, 255, 0.2);
      border: 0; }
    button.pseudo:hover,
    .pseudo.button:hover,
    .pseudo:hover[type=submit], .pseudo.dropimage:hover, button.pseudo:focus,
    .pseudo.button:focus,
    .pseudo:focus[type=submit], .pseudo.dropimage:focus {
      box-shadow: inset 0 0 0 99em rgba(17, 17, 17, 0.1); }
    button.active,
    .active.button,
    .active[type=submit], .active.dropimage, button:active,
    .button:active,
    :active[type=submit], .dropimage:active, button.pseudo:active,
    .pseudo.button:active,
    .pseudo:active[type=submit], .pseudo.dropimage:active {
      box-shadow: inset 0 0 0 99em rgba(17, 17, 17, 0.2); }
    button[disabled],
    .button[disabled],
    [disabled][type=submit], .dropimage[disabled] {
      cursor: default;
      box-shadow: none;
      background: #aaa; }

  :checked + .toggle,
  :checked + .toggle:hover {
    box-shadow: inset 0 0 0 99em rgba(17, 17, 17, 0.2); }

  [type] + .toggle {
    padding: 0.3em 0.9em;
    margin-right: 0; }
    [type] + .toggle:after, [type] + .toggle:before {
      display: none; }

  input,
  textarea,
  .select select {
    color: #111;
    line-height: 1.5;
    margin: 0;
    height: 2.1em;
    padding: 0.3em 0.6em;
    border: 1px solid #aaa;
    background-color: #fff;
    border-radius: 0.2em;
    transition: all 0.3s;
    width: 100%; }
    input:focus,
    textarea:focus,
    .select select:focus {
      border: 1px solid #0074d9;
      outline: 0; }

  textarea {
    height: auto; }

  [type=file],
  [type=color] {
    cursor: pointer; }

  [type=file] {
    height: auto; }

  select {
    background: #fff url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjMiPjxwYXRoIGQ9Im0gMCwxIDEsMiAxLC0yIHoiLz48L3N2Zz4=) no-repeat scroll 95% center/10px 15px;
    background-position: calc(100% - 15px) center;
    border: 1px solid #aaa;
    border-radius: 0.2em;
    cursor: pointer;
    width: 100%;
    height: 2.2em;
    box-sizing: border-box;
    padding: 0.3em 0.45em;
    transition: all 0.3s;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none; }
    select::-ms-expand {
      display: none; }
    select:focus, select:active {
      border: 1px solid #0074d9;
      transition: outline 0s; }
    select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #111; }
    select option {
      font-size: inherit;
      padding: 0.45em; }
    select[multiple] {
      height: auto;
      background: none;
      padding: 0; }

  [type=radio], [type=checkbox] {
    opacity: 0;
    width: 0;
    position: absolute;
    display: inline-block; }
    [type=radio] + .checkable:hover:before, [type=checkbox] + .checkable:hover:before,
    :focus[type=radio] + .checkable:before,
    :focus[type=checkbox] + .checkable:before {
      border: 1px solid #0074d9; }
    [type=radio] + .checkable, [type=checkbox] + .checkable {
      position: relative;
      cursor: pointer;
      padding-left: 1.5em;
      margin-right: .6em; }
      [type=radio] + .checkable:before, [type=checkbox] + .checkable:before, [type=radio] + .checkable:after, [type=checkbox] + .checkable:after {
        content: '';
        position: absolute;
        display: inline-block;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1em;
        line-height: 1em;
        color: transparent;
        font-family: sans;
        text-align: center;
        box-sizing: border-box;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        transition: all 0.3s; }
      [type=radio] + .checkable:before, [type=checkbox] + .checkable:before {
        border: 1px solid #aaa; }
    :checked[type=radio] + .checkable:after, :checked[type=checkbox] + .checkable:after {
      background: #111;
      transform: scale(0.5) translateY(-100%); }

  [type=checkbox] + .checkable:before {
    border-radius: 0.2em; }

  [type=checkbox] + .checkable:after {
    content: "✔";
    background: none;
    transform: scale(2) translateY(-25%);
    visibility: hidden;
    opacity: 0; }

  :checked[type=checkbox] + .checkable:after {
    color: #111;
    background: none;
    transform: translateY(-50%);
    transition: all 0.3s;
    visibility: visible;
    opacity: 1; }

  table {
    text-align: left; }

  td,
  th {
    padding: 0.3em 2.4em 0.3em 0.6em; }

  th {
    text-align: left;
    font-weight: 900;
    color: #fff;
    background-color: #0074d9; }

  .success th {
    background-color: #2ecc40; }

  .warning th {
    background-color: #ff851b; }

  .error th {
    background-color: #ff4136; }

  .dull th {
    background-color: #aaa; }

  tr:nth-child(even) {
    background: rgba(17, 17, 17, 0.05); }

  .flex {
    display: -ms-flexbox;
    display: flex;
    margin-left: -0.6em;
    width: calc(100% + 0.6em);
    flex-wrap: wrap;
    transition: all .3s ease; }

  .flex > * {
    box-sizing: border-box;
    flex: 1 1 auto;
    /* Default for IE10 bug */
    padding-left: 0.6em;
    padding-bottom: 0.6em; }

  .flex[class*="one"] > *, .flex[class*="two"] > *, .flex[class*="three"] > *, .flex[class*="four"] > *, .flex[class*="five"] > *, .flex[class*="six"] > *, .flex[class*="seven"] > *, .flex[class*="eight"] > *, .flex[class*="nine"] > *, .flex[class*="ten"] > *, .flex[class*="eleven"] > *, .flex[class*="twelve"] > * {
    flex-grow: 0; }

  .flex.grow > * {
    flex-grow: 1; }

  .center {
    justify-content: center; }

  .one > * {
    width: 100%; }

  .two > * {
    width: 50%; }

  .three > * {
    width: 33.33333%; }

  .four > * {
    width: 25%; }

  .five > * {
    width: 20%; }

  .six > * {
    width: 16.66666%; }

  .seven > * {
    width: 14.28571%; }

  .eight > * {
    width: 12.5%; }

  .nine > * {
    width: 11.11111%; }

  .ten > * {
    width: 10%; }

  .eleven > * {
    width: 9.09091%; }

  .twelve > * {
    width: 8.33333%; }

  @media all and (min-width: 500px) {
    .one-500 > * {
      width: 100%; }
    .two-500 > * {
      width: 50%; }
    .three-500 > * {
      width: 33.33333%; }
    .four-500 > * {
      width: 25%; }
    .five-500 > * {
      width: 20%; }
    .six-500 > * {
      width: 16.66666%; }
    .seven-500 > * {
      width: 14.28571%; }
    .eight-500 > * {
      width: 12.5%; }
    .nine-500 > * {
      width: 11.11111%; }
    .ten-500 > * {
      width: 10%; }
    .eleven-500 > * {
      width: 9.09091%; }
    .twelve-500 > * {
      width: 8.33333%; } }

  @media all and (min-width: 600px) {
    .one-600 > * {
      width: 100%; }
    .two-600 > * {
      width: 50%; }
    .three-600 > * {
      width: 33.33333%; }
    .four-600 > * {
      width: 25%; }
    .five-600 > * {
      width: 20%; }
    .six-600 > * {
      width: 16.66666%; }
    .seven-600 > * {
      width: 14.28571%; }
    .eight-600 > * {
      width: 12.5%; }
    .nine-600 > * {
      width: 11.11111%; }
    .ten-600 > * {
      width: 10%; }
    .eleven-600 > * {
      width: 9.09091%; }
    .twelve-600 > * {
      width: 8.33333%; } }

  @media all and (min-width: 700px) {
    .one-700 > * {
      width: 100%; }
    .two-700 > * {
      width: 50%; }
    .three-700 > * {
      width: 33.33333%; }
    .four-700 > * {
      width: 25%; }
    .five-700 > * {
      width: 20%; }
    .six-700 > * {
      width: 16.66666%; }
    .seven-700 > * {
      width: 14.28571%; }
    .eight-700 > * {
      width: 12.5%; }
    .nine-700 > * {
      width: 11.11111%; }
    .ten-700 > * {
      width: 10%; }
    .eleven-700 > * {
      width: 9.09091%; }
    .twelve-700 > * {
      width: 8.33333%; } }

  @media all and (min-width: 800px) {
    .one-800 > * {
      width: 100%; }
    .two-800 > * {
      width: 50%; }
    .three-800 > * {
      width: 33.33333%; }
    .four-800 > * {
      width: 25%; }
    .five-800 > * {
      width: 20%; }
    .six-800 > * {
      width: 16.66666%; }
    .seven-800 > * {
      width: 14.28571%; }
    .eight-800 > * {
      width: 12.5%; }
    .nine-800 > * {
      width: 11.11111%; }
    .ten-800 > * {
      width: 10%; }
    .eleven-800 > * {
      width: 9.09091%; }
    .twelve-800 > * {
      width: 8.33333%; } }

  @media all and (min-width: 900px) {
    .one-900 > * {
      width: 100%; }
    .two-900 > * {
      width: 50%; }
    .three-900 > * {
      width: 33.33333%; }
    .four-900 > * {
      width: 25%; }
    .five-900 > * {
      width: 20%; }
    .six-900 > * {
      width: 16.66666%; }
    .seven-900 > * {
      width: 14.28571%; }
    .eight-900 > * {
      width: 12.5%; }
    .nine-900 > * {
      width: 11.11111%; }
    .ten-900 > * {
      width: 10%; }
    .eleven-900 > * {
      width: 9.09091%; }
    .twelve-900 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1000px) {
    .one-1000 > * {
      width: 100%; }
    .two-1000 > * {
      width: 50%; }
    .three-1000 > * {
      width: 33.33333%; }
    .four-1000 > * {
      width: 25%; }
    .five-1000 > * {
      width: 20%; }
    .six-1000 > * {
      width: 16.66666%; }
    .seven-1000 > * {
      width: 14.28571%; }
    .eight-1000 > * {
      width: 12.5%; }
    .nine-1000 > * {
      width: 11.11111%; }
    .ten-1000 > * {
      width: 10%; }
    .eleven-1000 > * {
      width: 9.09091%; }
    .twelve-1000 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1100px) {
    .one-1100 > * {
      width: 100%; }
    .two-1100 > * {
      width: 50%; }
    .three-1100 > * {
      width: 33.33333%; }
    .four-1100 > * {
      width: 25%; }
    .five-1100 > * {
      width: 20%; }
    .six-1100 > * {
      width: 16.66666%; }
    .seven-1100 > * {
      width: 14.28571%; }
    .eight-1100 > * {
      width: 12.5%; }
    .nine-1100 > * {
      width: 11.11111%; }
    .ten-1100 > * {
      width: 10%; }
    .eleven-1100 > * {
      width: 9.09091%; }
    .twelve-1100 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1200px) {
    .one-1200 > * {
      width: 100%; }
    .two-1200 > * {
      width: 50%; }
    .three-1200 > * {
      width: 33.33333%; }
    .four-1200 > * {
      width: 25%; }
    .five-1200 > * {
      width: 20%; }
    .six-1200 > * {
      width: 16.66666%; }
    .seven-1200 > * {
      width: 14.28571%; }
    .eight-1200 > * {
      width: 12.5%; }
    .nine-1200 > * {
      width: 11.11111%; }
    .ten-1200 > * {
      width: 10%; }
    .eleven-1200 > * {
      width: 9.09091%; }
    .twelve-1200 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1300px) {
    .one-1300 > * {
      width: 100%; }
    .two-1300 > * {
      width: 50%; }
    .three-1300 > * {
      width: 33.33333%; }
    .four-1300 > * {
      width: 25%; }
    .five-1300 > * {
      width: 20%; }
    .six-1300 > * {
      width: 16.66666%; }
    .seven-1300 > * {
      width: 14.28571%; }
    .eight-1300 > * {
      width: 12.5%; }
    .nine-1300 > * {
      width: 11.11111%; }
    .ten-1300 > * {
      width: 10%; }
    .eleven-1300 > * {
      width: 9.09091%; }
    .twelve-1300 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1400px) {
    .one-1400 > * {
      width: 100%; }
    .two-1400 > * {
      width: 50%; }
    .three-1400 > * {
      width: 33.33333%; }
    .four-1400 > * {
      width: 25%; }
    .five-1400 > * {
      width: 20%; }
    .six-1400 > * {
      width: 16.66666%; }
    .seven-1400 > * {
      width: 14.28571%; }
    .eight-1400 > * {
      width: 12.5%; }
    .nine-1400 > * {
      width: 11.11111%; }
    .ten-1400 > * {
      width: 10%; }
    .eleven-1400 > * {
      width: 9.09091%; }
    .twelve-1400 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1500px) {
    .one-1500 > * {
      width: 100%; }
    .two-1500 > * {
      width: 50%; }
    .three-1500 > * {
      width: 33.33333%; }
    .four-1500 > * {
      width: 25%; }
    .five-1500 > * {
      width: 20%; }
    .six-1500 > * {
      width: 16.66666%; }
    .seven-1500 > * {
      width: 14.28571%; }
    .eight-1500 > * {
      width: 12.5%; }
    .nine-1500 > * {
      width: 11.11111%; }
    .ten-1500 > * {
      width: 10%; }
    .eleven-1500 > * {
      width: 9.09091%; }
    .twelve-1500 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1600px) {
    .one-1600 > * {
      width: 100%; }
    .two-1600 > * {
      width: 50%; }
    .three-1600 > * {
      width: 33.33333%; }
    .four-1600 > * {
      width: 25%; }
    .five-1600 > * {
      width: 20%; }
    .six-1600 > * {
      width: 16.66666%; }
    .seven-1600 > * {
      width: 14.28571%; }
    .eight-1600 > * {
      width: 12.5%; }
    .nine-1600 > * {
      width: 11.11111%; }
    .ten-1600 > * {
      width: 10%; }
    .eleven-1600 > * {
      width: 9.09091%; }
    .twelve-1600 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1700px) {
    .one-1700 > * {
      width: 100%; }
    .two-1700 > * {
      width: 50%; }
    .three-1700 > * {
      width: 33.33333%; }
    .four-1700 > * {
      width: 25%; }
    .five-1700 > * {
      width: 20%; }
    .six-1700 > * {
      width: 16.66666%; }
    .seven-1700 > * {
      width: 14.28571%; }
    .eight-1700 > * {
      width: 12.5%; }
    .nine-1700 > * {
      width: 11.11111%; }
    .ten-1700 > * {
      width: 10%; }
    .eleven-1700 > * {
      width: 9.09091%; }
    .twelve-1700 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1800px) {
    .one-1800 > * {
      width: 100%; }
    .two-1800 > * {
      width: 50%; }
    .three-1800 > * {
      width: 33.33333%; }
    .four-1800 > * {
      width: 25%; }
    .five-1800 > * {
      width: 20%; }
    .six-1800 > * {
      width: 16.66666%; }
    .seven-1800 > * {
      width: 14.28571%; }
    .eight-1800 > * {
      width: 12.5%; }
    .nine-1800 > * {
      width: 11.11111%; }
    .ten-1800 > * {
      width: 10%; }
    .eleven-1800 > * {
      width: 9.09091%; }
    .twelve-1800 > * {
      width: 8.33333%; } }

  @media all and (min-width: 1900px) {
    .one-1900 > * {
      width: 100%; }
    .two-1900 > * {
      width: 50%; }
    .three-1900 > * {
      width: 33.33333%; }
    .four-1900 > * {
      width: 25%; }
    .five-1900 > * {
      width: 20%; }
    .six-1900 > * {
      width: 16.66666%; }
    .seven-1900 > * {
      width: 14.28571%; }
    .eight-1900 > * {
      width: 12.5%; }
    .nine-1900 > * {
      width: 11.11111%; }
    .ten-1900 > * {
      width: 10%; }
    .eleven-1900 > * {
      width: 9.09091%; }
    .twelve-1900 > * {
      width: 8.33333%; } }

  @media all and (min-width: 2000px) {
    .one-2000 > * {
      width: 100%; }
    .two-2000 > * {
      width: 50%; }
    .three-2000 > * {
      width: 33.33333%; }
    .four-2000 > * {
      width: 25%; }
    .five-2000 > * {
      width: 20%; }
    .six-2000 > * {
      width: 16.66666%; }
    .seven-2000 > * {
      width: 14.28571%; }
    .eight-2000 > * {
      width: 12.5%; }
    .nine-2000 > * {
      width: 11.11111%; }
    .ten-2000 > * {
      width: 10%; }
    .eleven-2000 > * {
      width: 9.09091%; }
    .twelve-2000 > * {
      width: 8.33333%; } }

  .full {
    width: 100%; }

  .half {
    width: 50%; }

  .third {
    width: 33.33333%; }

  .two-third {
    width: 66.66666%; }

  .fourth {
    width: 25%; }

  .three-fourth {
    width: 75%; }

  .fifth {
    width: 20%; }

  .two-fifth {
    width: 40%; }

  .three-fifth {
    width: 60%; }

  .four-fifth {
    width: 80%; }

  .sixth {
    width: 16.66666%; }

  .none {
    display: none; }

  @media all and (min-width: 500px) {
    .full-500 {
      width: 100%;
      display: block; }
    .half-500 {
      width: 50%;
      display: block; }
    .third-500 {
      width: 33.33333%;
      display: block; }
    .two-third-500 {
      width: 66.66666%;
      display: block; }
    .fourth-500 {
      width: 25%;
      display: block; }
    .three-fourth-500 {
      width: 75%;
      display: block; }
    .fifth-500 {
      width: 20%;
      display: block; }
    .two-fifth-500 {
      width: 40%;
      display: block; }
    .three-fifth-500 {
      width: 60%;
      display: block; }
    .four-fifth-500 {
      width: 80%;
      display: block; }
    .sixth-500 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 600px) {
    .full-600 {
      width: 100%;
      display: block; }
    .half-600 {
      width: 50%;
      display: block; }
    .third-600 {
      width: 33.33333%;
      display: block; }
    .two-third-600 {
      width: 66.66666%;
      display: block; }
    .fourth-600 {
      width: 25%;
      display: block; }
    .three-fourth-600 {
      width: 75%;
      display: block; }
    .fifth-600 {
      width: 20%;
      display: block; }
    .two-fifth-600 {
      width: 40%;
      display: block; }
    .three-fifth-600 {
      width: 60%;
      display: block; }
    .four-fifth-600 {
      width: 80%;
      display: block; }
    .sixth-600 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 700px) {
    .full-700 {
      width: 100%;
      display: block; }
    .half-700 {
      width: 50%;
      display: block; }
    .third-700 {
      width: 33.33333%;
      display: block; }
    .two-third-700 {
      width: 66.66666%;
      display: block; }
    .fourth-700 {
      width: 25%;
      display: block; }
    .three-fourth-700 {
      width: 75%;
      display: block; }
    .fifth-700 {
      width: 20%;
      display: block; }
    .two-fifth-700 {
      width: 40%;
      display: block; }
    .three-fifth-700 {
      width: 60%;
      display: block; }
    .four-fifth-700 {
      width: 80%;
      display: block; }
    .sixth-700 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 800px) {
    .full-800 {
      width: 100%;
      display: block; }
    .half-800 {
      width: 50%;
      display: block; }
    .third-800 {
      width: 33.33333%;
      display: block; }
    .two-third-800 {
      width: 66.66666%;
      display: block; }
    .fourth-800 {
      width: 25%;
      display: block; }
    .three-fourth-800 {
      width: 75%;
      display: block; }
    .fifth-800 {
      width: 20%;
      display: block; }
    .two-fifth-800 {
      width: 40%;
      display: block; }
    .three-fifth-800 {
      width: 60%;
      display: block; }
    .four-fifth-800 {
      width: 80%;
      display: block; }
    .sixth-800 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 900px) {
    .full-900 {
      width: 100%;
      display: block; }
    .half-900 {
      width: 50%;
      display: block; }
    .third-900 {
      width: 33.33333%;
      display: block; }
    .two-third-900 {
      width: 66.66666%;
      display: block; }
    .fourth-900 {
      width: 25%;
      display: block; }
    .three-fourth-900 {
      width: 75%;
      display: block; }
    .fifth-900 {
      width: 20%;
      display: block; }
    .two-fifth-900 {
      width: 40%;
      display: block; }
    .three-fifth-900 {
      width: 60%;
      display: block; }
    .four-fifth-900 {
      width: 80%;
      display: block; }
    .sixth-900 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1000px) {
    .full-1000 {
      width: 100%;
      display: block; }
    .half-1000 {
      width: 50%;
      display: block; }
    .third-1000 {
      width: 33.33333%;
      display: block; }
    .two-third-1000 {
      width: 66.66666%;
      display: block; }
    .fourth-1000 {
      width: 25%;
      display: block; }
    .three-fourth-1000 {
      width: 75%;
      display: block; }
    .fifth-1000 {
      width: 20%;
      display: block; }
    .two-fifth-1000 {
      width: 40%;
      display: block; }
    .three-fifth-1000 {
      width: 60%;
      display: block; }
    .four-fifth-1000 {
      width: 80%;
      display: block; }
    .sixth-1000 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1100px) {
    .full-1100 {
      width: 100%;
      display: block; }
    .half-1100 {
      width: 50%;
      display: block; }
    .third-1100 {
      width: 33.33333%;
      display: block; }
    .two-third-1100 {
      width: 66.66666%;
      display: block; }
    .fourth-1100 {
      width: 25%;
      display: block; }
    .three-fourth-1100 {
      width: 75%;
      display: block; }
    .fifth-1100 {
      width: 20%;
      display: block; }
    .two-fifth-1100 {
      width: 40%;
      display: block; }
    .three-fifth-1100 {
      width: 60%;
      display: block; }
    .four-fifth-1100 {
      width: 80%;
      display: block; }
    .sixth-1100 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1200px) {
    .full-1200 {
      width: 100%;
      display: block; }
    .half-1200 {
      width: 50%;
      display: block; }
    .third-1200 {
      width: 33.33333%;
      display: block; }
    .two-third-1200 {
      width: 66.66666%;
      display: block; }
    .fourth-1200 {
      width: 25%;
      display: block; }
    .three-fourth-1200 {
      width: 75%;
      display: block; }
    .fifth-1200 {
      width: 20%;
      display: block; }
    .two-fifth-1200 {
      width: 40%;
      display: block; }
    .three-fifth-1200 {
      width: 60%;
      display: block; }
    .four-fifth-1200 {
      width: 80%;
      display: block; }
    .sixth-1200 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1300px) {
    .full-1300 {
      width: 100%;
      display: block; }
    .half-1300 {
      width: 50%;
      display: block; }
    .third-1300 {
      width: 33.33333%;
      display: block; }
    .two-third-1300 {
      width: 66.66666%;
      display: block; }
    .fourth-1300 {
      width: 25%;
      display: block; }
    .three-fourth-1300 {
      width: 75%;
      display: block; }
    .fifth-1300 {
      width: 20%;
      display: block; }
    .two-fifth-1300 {
      width: 40%;
      display: block; }
    .three-fifth-1300 {
      width: 60%;
      display: block; }
    .four-fifth-1300 {
      width: 80%;
      display: block; }
    .sixth-1300 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1400px) {
    .full-1400 {
      width: 100%;
      display: block; }
    .half-1400 {
      width: 50%;
      display: block; }
    .third-1400 {
      width: 33.33333%;
      display: block; }
    .two-third-1400 {
      width: 66.66666%;
      display: block; }
    .fourth-1400 {
      width: 25%;
      display: block; }
    .three-fourth-1400 {
      width: 75%;
      display: block; }
    .fifth-1400 {
      width: 20%;
      display: block; }
    .two-fifth-1400 {
      width: 40%;
      display: block; }
    .three-fifth-1400 {
      width: 60%;
      display: block; }
    .four-fifth-1400 {
      width: 80%;
      display: block; }
    .sixth-1400 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1500px) {
    .full-1500 {
      width: 100%;
      display: block; }
    .half-1500 {
      width: 50%;
      display: block; }
    .third-1500 {
      width: 33.33333%;
      display: block; }
    .two-third-1500 {
      width: 66.66666%;
      display: block; }
    .fourth-1500 {
      width: 25%;
      display: block; }
    .three-fourth-1500 {
      width: 75%;
      display: block; }
    .fifth-1500 {
      width: 20%;
      display: block; }
    .two-fifth-1500 {
      width: 40%;
      display: block; }
    .three-fifth-1500 {
      width: 60%;
      display: block; }
    .four-fifth-1500 {
      width: 80%;
      display: block; }
    .sixth-1500 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1600px) {
    .full-1600 {
      width: 100%;
      display: block; }
    .half-1600 {
      width: 50%;
      display: block; }
    .third-1600 {
      width: 33.33333%;
      display: block; }
    .two-third-1600 {
      width: 66.66666%;
      display: block; }
    .fourth-1600 {
      width: 25%;
      display: block; }
    .three-fourth-1600 {
      width: 75%;
      display: block; }
    .fifth-1600 {
      width: 20%;
      display: block; }
    .two-fifth-1600 {
      width: 40%;
      display: block; }
    .three-fifth-1600 {
      width: 60%;
      display: block; }
    .four-fifth-1600 {
      width: 80%;
      display: block; }
    .sixth-1600 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1700px) {
    .full-1700 {
      width: 100%;
      display: block; }
    .half-1700 {
      width: 50%;
      display: block; }
    .third-1700 {
      width: 33.33333%;
      display: block; }
    .two-third-1700 {
      width: 66.66666%;
      display: block; }
    .fourth-1700 {
      width: 25%;
      display: block; }
    .three-fourth-1700 {
      width: 75%;
      display: block; }
    .fifth-1700 {
      width: 20%;
      display: block; }
    .two-fifth-1700 {
      width: 40%;
      display: block; }
    .three-fifth-1700 {
      width: 60%;
      display: block; }
    .four-fifth-1700 {
      width: 80%;
      display: block; }
    .sixth-1700 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1800px) {
    .full-1800 {
      width: 100%;
      display: block; }
    .half-1800 {
      width: 50%;
      display: block; }
    .third-1800 {
      width: 33.33333%;
      display: block; }
    .two-third-1800 {
      width: 66.66666%;
      display: block; }
    .fourth-1800 {
      width: 25%;
      display: block; }
    .three-fourth-1800 {
      width: 75%;
      display: block; }
    .fifth-1800 {
      width: 20%;
      display: block; }
    .two-fifth-1800 {
      width: 40%;
      display: block; }
    .three-fifth-1800 {
      width: 60%;
      display: block; }
    .four-fifth-1800 {
      width: 80%;
      display: block; }
    .sixth-1800 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 1900px) {
    .full-1900 {
      width: 100%;
      display: block; }
    .half-1900 {
      width: 50%;
      display: block; }
    .third-1900 {
      width: 33.33333%;
      display: block; }
    .two-third-1900 {
      width: 66.66666%;
      display: block; }
    .fourth-1900 {
      width: 25%;
      display: block; }
    .three-fourth-1900 {
      width: 75%;
      display: block; }
    .fifth-1900 {
      width: 20%;
      display: block; }
    .two-fifth-1900 {
      width: 40%;
      display: block; }
    .three-fifth-1900 {
      width: 60%;
      display: block; }
    .four-fifth-1900 {
      width: 80%;
      display: block; }
    .sixth-1900 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 2000px) {
    .full-2000 {
      width: 100%;
      display: block; }
    .half-2000 {
      width: 50%;
      display: block; }
    .third-2000 {
      width: 33.33333%;
      display: block; }
    .two-third-2000 {
      width: 66.66666%;
      display: block; }
    .fourth-2000 {
      width: 25%;
      display: block; }
    .three-fourth-2000 {
      width: 75%;
      display: block; }
    .fifth-2000 {
      width: 20%;
      display: block; }
    .two-fifth-2000 {
      width: 40%;
      display: block; }
    .three-fifth-2000 {
      width: 60%;
      display: block; }
    .four-fifth-2000 {
      width: 80%;
      display: block; }
    .sixth-2000 {
      width: 16.66666%;
      display: block; } }

  @media all and (min-width: 500px) {
    .none-500 {
      display: none; } }

  @media all and (min-width: 600px) {
    .none-600 {
      display: none; } }

  @media all and (min-width: 700px) {
    .none-700 {
      display: none; } }

  @media all and (min-width: 800px) {
    .none-800 {
      display: none; } }

  @media all and (min-width: 900px) {
    .none-900 {
      display: none; } }

  @media all and (min-width: 1000px) {
    .none-1000 {
      display: none; } }

  @media all and (min-width: 1100px) {
    .none-1100 {
      display: none; } }

  @media all and (min-width: 1200px) {
    .none-1200 {
      display: none; } }

  @media all and (min-width: 1300px) {
    .none-1300 {
      display: none; } }

  @media all and (min-width: 1400px) {
    .none-1400 {
      display: none; } }

  @media all and (min-width: 1500px) {
    .none-1500 {
      display: none; } }

  @media all and (min-width: 1600px) {
    .none-1600 {
      display: none; } }

  @media all and (min-width: 1700px) {
    .none-1700 {
      display: none; } }

  @media all and (min-width: 1800px) {
    .none-1800 {
      display: none; } }

  @media all and (min-width: 1900px) {
    .none-1900 {
      display: none; } }

  @media all and (min-width: 2000px) {
    .none-2000 {
      display: none; } }

  .off-none {
    margin-left: 0; }

  .off-half {
    margin-left: 50%; }

  .off-third {
    margin-left: 33.33333%; }

  .off-two-third {
    margin-left: 66.66666%; }

  .off-fourth {
    margin-left: 25%; }

  .off-three-fourth {
    margin-left: 75%; }

  .off-fifth {
    margin-left: 20%; }

  .off-two-fifth {
    margin-left: 40%; }

  .off-three-fifth {
    margin-left: 60%; }

  .off-four-fifth {
    margin-left: 80%; }

  .off-sixth {
    margin-left: 16.66666%; }

  @media all and (min-width: 500px) {
    .off-none-500 {
      margin-left: 0; }
    .off-half-500 {
      margin-left: 50%; }
    .off-third-500 {
      margin-left: 33.33333%; }
    .off-two-third-500 {
      margin-left: 66.66666%; }
    .off-fourth-500 {
      margin-left: 25%; }
    .off-three-fourth-500 {
      margin-left: 75%; }
    .off-fifth-500 {
      margin-left: 20%; }
    .off-two-fifth-500 {
      margin-left: 40%; }
    .off-three-fifth-500 {
      margin-left: 60%; }
    .off-four-fifth-500 {
      margin-left: 80%; }
    .off-sixth-500 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 600px) {
    .off-none-600 {
      margin-left: 0; }
    .off-half-600 {
      margin-left: 50%; }
    .off-third-600 {
      margin-left: 33.33333%; }
    .off-two-third-600 {
      margin-left: 66.66666%; }
    .off-fourth-600 {
      margin-left: 25%; }
    .off-three-fourth-600 {
      margin-left: 75%; }
    .off-fifth-600 {
      margin-left: 20%; }
    .off-two-fifth-600 {
      margin-left: 40%; }
    .off-three-fifth-600 {
      margin-left: 60%; }
    .off-four-fifth-600 {
      margin-left: 80%; }
    .off-sixth-600 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 700px) {
    .off-none-700 {
      margin-left: 0; }
    .off-half-700 {
      margin-left: 50%; }
    .off-third-700 {
      margin-left: 33.33333%; }
    .off-two-third-700 {
      margin-left: 66.66666%; }
    .off-fourth-700 {
      margin-left: 25%; }
    .off-three-fourth-700 {
      margin-left: 75%; }
    .off-fifth-700 {
      margin-left: 20%; }
    .off-two-fifth-700 {
      margin-left: 40%; }
    .off-three-fifth-700 {
      margin-left: 60%; }
    .off-four-fifth-700 {
      margin-left: 80%; }
    .off-sixth-700 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 800px) {
    .off-none-800 {
      margin-left: 0; }
    .off-half-800 {
      margin-left: 50%; }
    .off-third-800 {
      margin-left: 33.33333%; }
    .off-two-third-800 {
      margin-left: 66.66666%; }
    .off-fourth-800 {
      margin-left: 25%; }
    .off-three-fourth-800 {
      margin-left: 75%; }
    .off-fifth-800 {
      margin-left: 20%; }
    .off-two-fifth-800 {
      margin-left: 40%; }
    .off-three-fifth-800 {
      margin-left: 60%; }
    .off-four-fifth-800 {
      margin-left: 80%; }
    .off-sixth-800 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 900px) {
    .off-none-900 {
      margin-left: 0; }
    .off-half-900 {
      margin-left: 50%; }
    .off-third-900 {
      margin-left: 33.33333%; }
    .off-two-third-900 {
      margin-left: 66.66666%; }
    .off-fourth-900 {
      margin-left: 25%; }
    .off-three-fourth-900 {
      margin-left: 75%; }
    .off-fifth-900 {
      margin-left: 20%; }
    .off-two-fifth-900 {
      margin-left: 40%; }
    .off-three-fifth-900 {
      margin-left: 60%; }
    .off-four-fifth-900 {
      margin-left: 80%; }
    .off-sixth-900 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1000px) {
    .off-none-1000 {
      margin-left: 0; }
    .off-half-1000 {
      margin-left: 50%; }
    .off-third-1000 {
      margin-left: 33.33333%; }
    .off-two-third-1000 {
      margin-left: 66.66666%; }
    .off-fourth-1000 {
      margin-left: 25%; }
    .off-three-fourth-1000 {
      margin-left: 75%; }
    .off-fifth-1000 {
      margin-left: 20%; }
    .off-two-fifth-1000 {
      margin-left: 40%; }
    .off-three-fifth-1000 {
      margin-left: 60%; }
    .off-four-fifth-1000 {
      margin-left: 80%; }
    .off-sixth-1000 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1100px) {
    .off-none-1100 {
      margin-left: 0; }
    .off-half-1100 {
      margin-left: 50%; }
    .off-third-1100 {
      margin-left: 33.33333%; }
    .off-two-third-1100 {
      margin-left: 66.66666%; }
    .off-fourth-1100 {
      margin-left: 25%; }
    .off-three-fourth-1100 {
      margin-left: 75%; }
    .off-fifth-1100 {
      margin-left: 20%; }
    .off-two-fifth-1100 {
      margin-left: 40%; }
    .off-three-fifth-1100 {
      margin-left: 60%; }
    .off-four-fifth-1100 {
      margin-left: 80%; }
    .off-sixth-1100 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1200px) {
    .off-none-1200 {
      margin-left: 0; }
    .off-half-1200 {
      margin-left: 50%; }
    .off-third-1200 {
      margin-left: 33.33333%; }
    .off-two-third-1200 {
      margin-left: 66.66666%; }
    .off-fourth-1200 {
      margin-left: 25%; }
    .off-three-fourth-1200 {
      margin-left: 75%; }
    .off-fifth-1200 {
      margin-left: 20%; }
    .off-two-fifth-1200 {
      margin-left: 40%; }
    .off-three-fifth-1200 {
      margin-left: 60%; }
    .off-four-fifth-1200 {
      margin-left: 80%; }
    .off-sixth-1200 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1300px) {
    .off-none-1300 {
      margin-left: 0; }
    .off-half-1300 {
      margin-left: 50%; }
    .off-third-1300 {
      margin-left: 33.33333%; }
    .off-two-third-1300 {
      margin-left: 66.66666%; }
    .off-fourth-1300 {
      margin-left: 25%; }
    .off-three-fourth-1300 {
      margin-left: 75%; }
    .off-fifth-1300 {
      margin-left: 20%; }
    .off-two-fifth-1300 {
      margin-left: 40%; }
    .off-three-fifth-1300 {
      margin-left: 60%; }
    .off-four-fifth-1300 {
      margin-left: 80%; }
    .off-sixth-1300 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1400px) {
    .off-none-1400 {
      margin-left: 0; }
    .off-half-1400 {
      margin-left: 50%; }
    .off-third-1400 {
      margin-left: 33.33333%; }
    .off-two-third-1400 {
      margin-left: 66.66666%; }
    .off-fourth-1400 {
      margin-left: 25%; }
    .off-three-fourth-1400 {
      margin-left: 75%; }
    .off-fifth-1400 {
      margin-left: 20%; }
    .off-two-fifth-1400 {
      margin-left: 40%; }
    .off-three-fifth-1400 {
      margin-left: 60%; }
    .off-four-fifth-1400 {
      margin-left: 80%; }
    .off-sixth-1400 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1500px) {
    .off-none-1500 {
      margin-left: 0; }
    .off-half-1500 {
      margin-left: 50%; }
    .off-third-1500 {
      margin-left: 33.33333%; }
    .off-two-third-1500 {
      margin-left: 66.66666%; }
    .off-fourth-1500 {
      margin-left: 25%; }
    .off-three-fourth-1500 {
      margin-left: 75%; }
    .off-fifth-1500 {
      margin-left: 20%; }
    .off-two-fifth-1500 {
      margin-left: 40%; }
    .off-three-fifth-1500 {
      margin-left: 60%; }
    .off-four-fifth-1500 {
      margin-left: 80%; }
    .off-sixth-1500 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1600px) {
    .off-none-1600 {
      margin-left: 0; }
    .off-half-1600 {
      margin-left: 50%; }
    .off-third-1600 {
      margin-left: 33.33333%; }
    .off-two-third-1600 {
      margin-left: 66.66666%; }
    .off-fourth-1600 {
      margin-left: 25%; }
    .off-three-fourth-1600 {
      margin-left: 75%; }
    .off-fifth-1600 {
      margin-left: 20%; }
    .off-two-fifth-1600 {
      margin-left: 40%; }
    .off-three-fifth-1600 {
      margin-left: 60%; }
    .off-four-fifth-1600 {
      margin-left: 80%; }
    .off-sixth-1600 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1700px) {
    .off-none-1700 {
      margin-left: 0; }
    .off-half-1700 {
      margin-left: 50%; }
    .off-third-1700 {
      margin-left: 33.33333%; }
    .off-two-third-1700 {
      margin-left: 66.66666%; }
    .off-fourth-1700 {
      margin-left: 25%; }
    .off-three-fourth-1700 {
      margin-left: 75%; }
    .off-fifth-1700 {
      margin-left: 20%; }
    .off-two-fifth-1700 {
      margin-left: 40%; }
    .off-three-fifth-1700 {
      margin-left: 60%; }
    .off-four-fifth-1700 {
      margin-left: 80%; }
    .off-sixth-1700 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1800px) {
    .off-none-1800 {
      margin-left: 0; }
    .off-half-1800 {
      margin-left: 50%; }
    .off-third-1800 {
      margin-left: 33.33333%; }
    .off-two-third-1800 {
      margin-left: 66.66666%; }
    .off-fourth-1800 {
      margin-left: 25%; }
    .off-three-fourth-1800 {
      margin-left: 75%; }
    .off-fifth-1800 {
      margin-left: 20%; }
    .off-two-fifth-1800 {
      margin-left: 40%; }
    .off-three-fifth-1800 {
      margin-left: 60%; }
    .off-four-fifth-1800 {
      margin-left: 80%; }
    .off-sixth-1800 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 1900px) {
    .off-none-1900 {
      margin-left: 0; }
    .off-half-1900 {
      margin-left: 50%; }
    .off-third-1900 {
      margin-left: 33.33333%; }
    .off-two-third-1900 {
      margin-left: 66.66666%; }
    .off-fourth-1900 {
      margin-left: 25%; }
    .off-three-fourth-1900 {
      margin-left: 75%; }
    .off-fifth-1900 {
      margin-left: 20%; }
    .off-two-fifth-1900 {
      margin-left: 40%; }
    .off-three-fifth-1900 {
      margin-left: 60%; }
    .off-four-fifth-1900 {
      margin-left: 80%; }
    .off-sixth-1900 {
      margin-left: 16.66666%; } }

  @media all and (min-width: 2000px) {
    .off-none-2000 {
      margin-left: 0; }
    .off-half-2000 {
      margin-left: 50%; }
    .off-third-2000 {
      margin-left: 33.33333%; }
    .off-two-third-2000 {
      margin-left: 66.66666%; }
    .off-fourth-2000 {
      margin-left: 25%; }
    .off-three-fourth-2000 {
      margin-left: 75%; }
    .off-fifth-2000 {
      margin-left: 20%; }
    .off-two-fifth-2000 {
      margin-left: 40%; }
    .off-three-fifth-2000 {
      margin-left: 60%; }
    .off-four-fifth-2000 {
      margin-left: 80%; }
    .off-sixth-2000 {
      margin-left: 16.66666%; } }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3em;
    padding: 0 0.6em;
    background: #fff;
    box-shadow: 0 0 0.2em rgba(170, 170, 170, 0.2);
    z-index: 10000;
    transition: all .3s;
    transform-style: preserve-3d; }
    nav .brand,
    nav .menu,
    nav .burger {
      float: right;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%); }
    nav .brand {
      font-weight: 700;
      float: left;
      padding: 0 0.6em;
      max-width: 50%;
      white-space: nowrap;
      color: inherit; }
      nav .brand * {
        vertical-align: middle; }
    nav .logo {
      height: 2em;
      margin-right: .3em; }
    nav .select::after {
      height: calc(100% - 1px);
      padding: 0;
      line-height: 2.4em; }
    nav .menu > * {
      margin-right: 0.6em; }

  nav .burger {
    display: none; }

  @media all and (max-width: 60em) {
    nav .burger {
      display: inline-block;
      cursor: pointer;
      bottom: -1000em;
      margin: 0; }
    nav .burger ~ .menu,
    nav .show:checked ~ .burger {
      position: fixed;
      min-height: 100%;
      top: 0;
      right: 0;
      bottom: -1000em;
      margin: 0;
      background: #fff;
      transition: all 0.5s ease;
      transform: none; }
    nav .burger ~ .menu {
      z-index: 11; }
    nav .show:checked ~ .burger {
      color: transparent;
      width: 100%;
      border-radius: 0;
      background: rgba(17, 17, 17, 0.2);
      transition: all 0.5s ease; }
    nav .show ~ .menu {
      width: 70%;
      max-width: 300px;
      transform-origin: center right;
      transition: all 0.25s ease;
      transform: scaleX(0); }
      nav .show ~ .menu > * {
        transform: translateX(100%);
        transition: all 0s ease 0.5s; }
    nav .show:checked ~ .menu > *:nth-child(1) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; }
    nav .show:checked ~ .menu > *:nth-child(2) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s; }
    nav .show:checked ~ .menu > *:nth-child(3) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s; }
    nav .show:checked ~ .menu > *:nth-child(4) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s; }
    nav .show:checked ~ .menu > *:nth-child(5) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s; }
    nav .show:checked ~ .menu > *:nth-child(6) {
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s; }
    nav .show:checked ~ .menu {
      transform: scaleX(1); }
      nav .show:checked ~ .menu > * {
        transform: translateX(0);
        transition: all 0.5s ease-in-out 0.6s; }
    nav .burger ~ .menu > * {
      display: block;
      margin: 0.3em;
      text-align: left;
      max-width: calc(100% - 0.6em); }
    nav .burger ~ .menu > a {
      padding: 0.3em 0.9em; } }

  .stack,
  .stack .toggle {
    margin-top: 0;
    margin-bottom: 0;
    display: block;
    width: 100%;
    text-align: left;
    border-radius: 0; }

  .stack:first-child,
  .stack:first-child .toggle {
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em; }

  .stack:last-child,
  .stack:last-child .toggle {
    border-bottom-left-radius: 0.2em;
    border-bottom-right-radius: 0.2em; }

  input.stack,
  textarea.stack,
  select.stack {
    transition: border-bottom 0 ease 0;
    border-bottom-width: 0; }
    input.stack:last-child,
    textarea.stack:last-child,
    select.stack:last-child {
      border-bottom-width: 1px; }
    input.stack:focus + input,
    input.stack:focus + textarea,
    input.stack:focus + select,
    textarea.stack:focus + input,
    textarea.stack:focus + textarea,
    textarea.stack:focus + select,
    select.stack:focus + input,
    select.stack:focus + textarea,
    select.stack:focus + select {
      border-top-color: #0074d9; }

  .card, .modal .overlay ~ * {
    position: relative;
    box-shadow: 0;
    border-radius: 0.2em;
    border: 1px solid #aaa;
    overflow: hidden;
    text-align: left;
    background: #fff;
    margin-bottom: 0.6em;
    padding: 0;
    transition: all .3s ease; }
    .hidden.card, .modal .overlay ~ .hidden,
    :checked + .card,
    .modal .overlay ~ :checked + *,
    .modal .overlay:checked + * {
      font-size: 0;
      padding: 0;
      margin: 0;
      border: 0; }
    .card > *, .modal .overlay ~ * > * {
      max-width: 100%;
      display: block; }
      .card > *:last-child, .modal .overlay ~ * > *:last-child {
        margin-bottom: 0; }
    .card header, .modal .overlay ~ * header,
    .card section,
    .modal .overlay ~ * section,
    .card > p,
    .modal .overlay ~ * > p {
      padding: .6em .8em; }
    
    .card section,
    .modal .overlay ~ * section {
      padding: .6em .8em 0; }
    .card hr, .modal .overlay ~ * hr {
      border: none;
      height: 1px;
      background-color: #aaa; }
    .card header, .modal .overlay ~ * header {
      font-weight: bold;
      position: relative;
      border-bottom: 1px solid #aaa; }
      .card header h1, .modal .overlay ~ * header h1,
      .card header h2,
      .modal .overlay ~ * header h2,
      .card header h3,
      .modal .overlay ~ * header h3,
      .card header h4,
      .modal .overlay ~ * header h4,
      .card header h5,
      .modal .overlay ~ * header h5,
      .card header h6,
      .modal .overlay ~ * header h6 {
        padding: 0;
        margin: 0 2em 0 0;
        line-height: 1;
        display: inline-block;
        vertical-align: text-bottom; }
      .card header:last-child, .modal .overlay ~ * header:last-child {
        border-bottom: 0; }
    .card footer, .modal .overlay ~ * footer {
      padding: .8em; }
    .card p, .modal .overlay ~ * p {
      margin: 0.3em 0; }
      .card p:first-child, .modal .overlay ~ * p:first-child {
        margin-top: 0; }
      .card p:last-child, .modal .overlay ~ * p:last-child {
        margin-bottom: 0; }
    
    .card > p,
    .modal .overlay ~ * > p {
      margin: 0;
      padding-right: 2.5em; }
    .card .close, .modal .overlay ~ * .close {
      position: absolute;
      top: .4em;
      right: .3em;
      font-size: 1.2em;
      padding: 0 .5em;
      cursor: pointer;
      width: auto; }
      .card .close:hover, .modal .overlay ~ * .close:hover {
        color: #ff4136; }
    .card h1 + .close, .modal .overlay ~ * h1 + .close {
      margin: .2em; }
    .card h2 + .close, .modal .overlay ~ * h2 + .close {
      margin: .1em; }
    .card .dangerous, .modal .overlay ~ * .dangerous {
      background: #ff4136;
      float: right; }

  .modal {
    text-align: center; }
    .modal > input {
      display: none; }
      .modal > input ~ * {
        opacity: 0;
        max-height: 0;
        overflow: hidden; }
    .modal .overlay {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: fixed;
      margin: 0;
      border-radius: 0;
      background: rgba(17, 17, 17, 0.2);
      transition: all 0.3s;
      z-index: 100000; }
      .modal .overlay:before, .modal .overlay:after {
        display: none; }
      .modal .overlay ~ * {
        border: 0;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(0.2, 0.2);
        z-index: 1000000;
        transition: all 0.3s; }
    .modal > input:checked ~ * {
      display: block;
      opacity: 1;
      max-height: 10000px;
      transition: all 0.3s; }
    .modal > input:checked ~ .overlay ~ * {
      max-height: 90%;
      overflow: auto;
      -webkit-transform: translateX(-50%) translateY(-50%) scale(1, 1);
      transform: translateX(-50%) translateY(-50%) scale(1, 1); }

  @media (max-width: 60em) {
    .modal .overlay ~ * {
      min-width: 90%; } }

  .dropimage {
    position: relative;
    display: block;
    padding: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    cursor: pointer;
    border: 0;
    margin: 0.3em 0;
    border-radius: 0.2em;
    background-color: #ddd;
    background-size: cover;
    background-position: center center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iNjQwIiB2ZXJzaW9uPSIxLjEiPjxnIHN0eWxlPSJmaWxsOiMzMzMiPjxwYXRoIGQ9Ik0gMTg3IDIzMCBDIDE3NSAyMzAgMTY1IDI0MCAxNjUgMjUyIEwgMTY1IDMwMCBMIDE2NSA0MDggQyAxNjUgNDIwIDE3NSA0MzAgMTg3IDQzMCBMIDQ2MyA0MzAgQyA0NzUgNDMwIDQ4NSA0MjAgNDg1IDQwOCBMIDQ4NSAzMDAgTCA0ODUgMjUyIEMgNDg1IDI0MCA0NzUgMjMwIDQ2MyAyMzAgTCAxODcgMjMwIHogTSAzNjAgMjU2IEEgNzAgNzIgMCAwIDEgNDMwIDMyOCBBIDcwIDcyIDAgMCAxIDM2MCA0MDAgQSA3MCA3MiAwIDAgMSAyOTAgMzI4IEEgNzAgNzIgMCAwIDEgMzYwIDI1NiB6Ii8+PGNpcmNsZSBjeD0iMzYwIiBjeT0iMzMwIiByPSI0MSIvPjxwYXRoIGQ9Im0yMDUgMjI1IDUtMTAgMjAgMCA1IDEwLTMwIDAiLz48cGF0aCBkPSJNMjg1IDIwMEwyNzAgMjI1IDM3NiAyMjUgMzYxIDIwMCAyODUgMjAwek0zMTAgMjA1TDMzNyAyMDUgMzM3IDIxOCAzMTAgMjE4IDMxMCAyMDV6Ii8+PHBhdGggZD0ibTQwNSAyMjUgNS0xMCAyMCAwIDUgMTAtMzAgMCIvPjwvZz48L3N2Zz4=); }
    .dropimage input {
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: pointer;
      position: absolute; }

  .tabs {
    position: relative;
    overflow: hidden; }
    .tabs > label img {
      float: left;
      margin-left: 0.6em; }
    .tabs > .row {
      width: calc(100% + 2 * .6em);
      display: table;
      table-layout: fixed;
      position: relative;
      padding-left: 0;
      transition: all .3s;
      border-spacing: 0;
      margin: 0; }
      .tabs > .row:before, .tabs > .row:after {
        display: none; }
      .tabs > .row > *,
      .tabs > .row img {
        display: table-cell;
        vertical-align: top;
        margin: 0;
        width: 100%; }
    .tabs > input {
      display: none; }
      .tabs > input + * {
        width: 100%; }
      .tabs > input + label {
        width: auto; }
    .two.tabs > .row {
      width: 200%;
      left: -100%; }
    .two.tabs > input:nth-of-type(1):checked ~ .row {
      margin-left: 100%; }
    .two.tabs > label img {
      width: 48%;
      margin: 4% 0 4% 4%; }
    .three.tabs > .row {
      width: 300%;
      left: -200%; }
    .three.tabs > input:nth-of-type(1):checked ~ .row {
      margin-left: 200%; }
    .three.tabs > input:nth-of-type(2):checked ~ .row {
      margin-left: 100%; }
    .three.tabs > label img {
      width: 30%;
      margin: 5% 0 5% 5%; }
    .four.tabs > .row {
      width: 400%;
      left: -300%; }
    .four.tabs > input:nth-of-type(1):checked ~ .row {
      margin-left: 300%; }
    .four.tabs > input:nth-of-type(2):checked ~ .row {
      margin-left: 200%; }
    .four.tabs > input:nth-of-type(3):checked ~ .row {
      margin-left: 100%; }
    .four.tabs > label img {
      width: 22%;
      margin: 4% 0 4% 4%; }
    .tabs > label:first-of-type img {
      margin-left: 0; }

  [data-tooltip] {
    position: relative; }
    [data-tooltip]:after, [data-tooltip]:before {
      position: absolute;
      z-index: 10;
      opacity: 0;
      border-width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      transition: opacity .6s ease, height 0s ease .6s;
      top: calc(100% - 6px);
      left: 0;
      margin-top: 12px; }
    [data-tooltip]:after {
      margin-left: 0;
      font-size: 0.8em;
      background: #111;
      content: attr(data-tooltip);
      white-space: nowrap; }
    [data-tooltip]:before {
      content: '';
      width: 0;
      height: 0;
      border-width: 0;
      border-style: solid;
      border-color: transparent transparent #111;
      margin-top: 0;
      left: 10px; }
    [data-tooltip]:hover:after, [data-tooltip]:focus:after, [data-tooltip]:hover:before, [data-tooltip]:focus:before {
      opacity: 1;
      border-width: 6px;
      height: auto; }
    [data-tooltip]:hover:after, [data-tooltip]:focus:after {
      padding: 0.45em 0.9em; }

  .tooltip-top:after, .tooltip-top:before {
    top: auto;
    bottom: calc(100% - 6px);
    left: 0;
    margin-bottom: 12px; }

  .tooltip-top:before {
    border-color: #111 transparent transparent;
    margin-bottom: 0;
    left: 10px; }

  .tooltip-right:after, .tooltip-right:before {
    left: 100%;
    margin-left: 6px;
    margin-top: 0;
    top: 0; }

  .tooltip-right:before {
    border-color: transparent #111 transparent transparent;
    margin-left: -6px;
    left: 100%;
    top: 7px; }

  .tooltip-left:after, .tooltip-left:before {
    right: 100%;
    margin-right: 6px;
    left: auto;
    margin-top: 0;
    top: 0; }

  .tooltip-left:before {
    border-color: transparent transparent transparent #111;
    margin-right: -6px;
    right: 100%;
    top: 7px; }

`;

export default BaseStyles;