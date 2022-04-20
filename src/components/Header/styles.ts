import styled from 'styled-components';

interface LoginButtonProps {
  inMobile?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 0;
  gap: 1rem;

  @media(min-width: 1440px) {
    padding: 3rem 0 0;
  }

  @media(max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const LogoHeader = styled.div`
  height: 40px;

  @media(min-width: 1440px) {
    height: 54px;
  }

  @media(max-width: 750px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 100%;
  }
`;

export const LoginButton = styled.a<LoginButtonProps>`
  border: 0;
  border-radius: 5px;
  background-color: var(--gray-600);
  padding: 0.75rem;
  color: var(--purple-100);
  text-decoration: none;
  white-space: nowrap;
  display: ${ ({ inMobile }) => inMobile ? "none" : "block" };

  @media(max-width: 750px) {
    display: ${ ({ inMobile }) => inMobile ? "block" : "none" };
  }

  &:hover {
    filter: brightness(0.98);
  }
`;

export const Avatar = styled.div``;

export const AvatarImage = styled.div``; 