import styled from "styled-components";

interface CanvasProps {
  imagem: string
}

export const Container = styled.div``;

export const MainPageContainer = styled.div``;

export const Logo = styled.div``;

export const Title = styled.div``;

export const Separator = styled.div``;

export const LoginBox = styled.div``;

export const LoginButton = styled.div``;

export const Canvas = styled.div<CanvasProps>`
  background-image: url(${ props => props.imagem });
`;
