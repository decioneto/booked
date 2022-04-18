import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 0;
  gap: 1rem;

  @media(min-width: 1440px) {
    padding: 3rem 0 0;
  }
`;

export const LogoHeader = styled.div`
  height: 40px;

  @media(min-width: 1440px) {
    height: 54px;
  }

  img {
    height: 100%;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

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

  & > .icon-search {
    position: absolute;
    padding: 0.5rem 0.75rem;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 100%;
      margin: auto;
      display: block;
    }
  }
`;

export const LoginButton = styled.a`
  border: 0;
  border-radius: 5px;
  background-color: var(--gray-600);
  padding: 0.75rem;
  color: var(--purple-100);
  text-decoration: none;

  &:hover {
    filter: brightness(0.98);
  }
`;

export const Avatar = styled.div``;

export const AvatarImage = styled.div``; 