import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

 * 
 *::after 
 *::before{
    box-sizing: border-box; 
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
