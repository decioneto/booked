import styled, { css } from "styled-components";

import { SearchInputProps } from '.'

export const Container = styled.div<SearchInputProps>`
  position: relative;
  width: 100%;
  max-width: ${({ autoWidth }) => autoWidth ? "inherit" : "500px" };
  transition: transform 0.2s cubic-bezier(0.9, -0.4, 0.17, 1.28);

  form {
    width: 100%;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  & > .form-input {
    padding: 0.75rem 2.5rem 0.75rem 0.75rem;
    background-color: var(--gray-500);
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: box-shadow 0.2s ease-out;

    ::placeholder {
      color: var(--gray-200)
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 32px 0 rgba(101, 31, 255, 0.25);
    }
  }

  & > .btn-search {
    position: absolute;
    padding: 0.5rem 0.75rem;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    border: 0;
    background-color: transparent;

    img {
      width: 100%;
      margin: auto;
      display: block;
    }
  }
`;