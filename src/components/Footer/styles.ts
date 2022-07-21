import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
  gap: 2rem;

  div {
    font-size: var(--body-sm);

    a {
      color: var(--purple-100);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;