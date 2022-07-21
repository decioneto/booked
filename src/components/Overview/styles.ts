import styled from 'styled-components';

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 1rem;
      }

      span {
        color: var(--gray-50)
      }
    }
  }
`;
