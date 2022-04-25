import styled from "styled-components";


interface CanvasProps {
  imagem: string
}

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainPageContainer = styled.div`
  flex: 0.4;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 640px) {
    flex: 1;
  }

`;

export const Logo = styled.div`
  width: 100%;
  max-width: 196px;
  margin: 0 auto 3.75rem;

  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  > p {
    &:first-child {
      color: var(--gray-50);
      font-size: var(--body-lg);
    }

    &:last-child {
      color: #ffba91;
      font-size: var(--h1-font-size);
      font-weight: var(--h1-font-weight);
      font-family: var(--title-font-family);
      margin-bottom: 1.5rem;
    }
  }
`;

export const Separator = styled.div`
  margin: 3.75rem auto;
  width: 100%;
  max-width: 250px;
  height: 2px;
  background-color: var(--gray-400);
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: var(--body-sm);
  }

  p {
    text-align: center;
    padding: 0 4rem;
    font-size: var(--body-sm);

    @media(max-width: 640px) {
      padding: 0 5rem !important;
    }
    
    @media(max-width: 420px) {
      padding: 0 3rem !important;
    }
  }
`;

export const LoginButton = styled.div`
  background-color: var(--purple-100);
  color: var(--gray-500);
  padding: 0.75rem 3rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 0.75rem;
  cursor: pointer;
  transition: filter 0.2s linear, box-shadow 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.10);
    box-shadow: var(--button-shadow);
  }
`;

export const Canvas = styled.div<CanvasProps>`
  background-image: url(${ props => props.imagem });
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  flex: 0.6;

  @media(max-width: 640px) {
    display: none;
  }
`;
