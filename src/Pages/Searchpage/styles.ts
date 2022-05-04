import styled from "styled-components";

export const  Container = styled.div`
  max-width: 1580px;
  margin: auto;
  padding: 0 3rem;

  @media(min-width: 1680px) {
    max-width: 1580px;
  }

  @media(max-width: 1440px) {
    max-width: 1140px !important;
  }

  @media(max-width: 950px) {
    max-width: 850px !important;
  }
`;