import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 50px;
    border-radius: 50%;
  }

  p {
    padding: 0 !important;
    font-size: var(--body-md);
    font-weight: bold;
  }
`;