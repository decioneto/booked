import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  .img {
    height: 100%;
    width: 100%;
    max-height: 240px;
    max-width: 180px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: top;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-family: var(--title-font-family);
      font-size: var(--h4-font-size);
      font-weight: bold;
    }

    p {
      font-size: var(--body-sm);
      color: var(--gray-50);
      line-height: 1.25rem;

      &.description {
        color: var(--dark-purple-100);
      }

      & > a {
        color: var(--purple-100);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      & > span {
        color: var(--dark-purple-100);
      }
    }

    .button-group {
      margin-top: auto;
      display: flex;
      gap: 8px;
    }
  }
`;