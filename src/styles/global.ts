import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    //TYPOGRAPHY
    --title-font-family: 'Roboto', sans-serif;
    --body-font-family: 'Roboto Condensed', sans-serif;
    
    --h1-font-size: 3rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.5rem;
    --h4-font-size: 1.25rem;
    --h5-font-size: 1rem;
    --h6-font-size: 0.875rem;
    
    --h1-font-weight: 500;
    --h2-font-weight: 500;
    --h3-font-weight: 400;
    --h4-font-weight: 400;
    --h5-font-weight: 400;
    --h6-font-weight: 500;

    --body-lg: 1.25rem;
    --body-md: 1rem;
    --body-sm: 0.875rem;
    --body-xs: 0.75rem;

    --body-weight: 400;

    // COLOR STYLES

    --black: #000;
    --gray-10: #1F1B29;
    --gray-25: #2E2A36;
    --gray-50: #5A5761;
    --gray-100: #99969E;
    --gray-200: #BAB9BD;
    --gray-300: #DEDEE0;
    --gray-400: #ECECEE;
    --gray-500: #F3F3F5;
    --gray-600: #FAFAFA;
    --white: #FFF;

    --purple-100: #651FFF;
    --purple-200: #4C17BF;
    --purple-300: #331080;

    --dark-purple-100: #130F1C;
    --dark-purple-150: #1F1B29;
    --dark-purple-200: #56447F;
    --dark-purple-300: #8E82A9;
    --dark-purple-400: #635F6B;

    --alert-green: #ADEED6;
    --alert-blue: #B9D8FB;
    --alert-yellow: #FDF4AE;
    --alert-red: #FDAAAC;

    --danger-100: #F34335;
    --danger-200: #B63228;
    --danger-300: #7A221B;

    --button-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.12);

    --mobile: 640px;
    --tablet-pt: 960px;
    --tablet-ls: 1200px;
    --desktop: 1800px;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 960px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    font-family: var(--body-font-family);
    font-weight: var(--body-weight);
    font-size: var(--body-md);
    line-height: 1.5rem;
    color: var(--dark-purple-100);
    background-color: ${props => props.theme.colors.backgroundColor};

    ::-webkit-scrollbar {
      width: 8px;
      background-color: var(--gray-200);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--purple-100);
    }
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    font-family: var(--body-font-family);
    font-weight: var(--body-weight);
    font-size: var(--body-md);
    color: var(--dark-purple-100);
  }

  .button {
    padding: 0 1rem;
    height: 48px;
    border-radius: 5px;
    border: 0;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--dark-purple-100);
  }

  .primary-button {
    background-color: var(--purple-100);
    color: #fff;

    &:hover {
      background-color: var(--purple-200);
    }

    &:active {
      background-color: var(--purple-300);
    }

    &:focus {
      background-color: var(--purple-100);
      outline: 2px solid var(--purple-300);
    }
  }

  .tertiary-button {
    background-color: var(--gray-600);
    color: var(--dark-purple-100);

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.15);
    }

    &:focus {
      background-color: var(--gray-600);
      outline: 2px solid var(--purple-100);
      color: var(--purple-100);
    }
  }
`;