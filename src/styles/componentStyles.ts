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

export const Button = styled.button`
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

  &.primary-button {
    background-color: var(--purple-100);
    color: var(--white);

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

  &.secondary-button {
    background-color: var(--gray-25);
    color: var(--white);

    &:hover {
      background-color: var(--dark-purple-200);
    }

    &:active {
      background-color: var(--dark-purple-300);
    }

    &:focus {
      background-color: var(--gray-25);
      outline: 2px solid var(--purple-100);
      color:  var(--white);
    }
  }

  &.tertiary-button {
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

  &.icon {
    gap: 0.5rem;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;