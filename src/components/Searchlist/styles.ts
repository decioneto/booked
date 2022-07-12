import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.75rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
  justify-content: center;
`;