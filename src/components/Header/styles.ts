import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Switch from '@radix-ui/react-switch'

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

export const LoginButton = styled.button<LoginButtonProps>`
  background-color: var(--purple-100);
  color: var(--gray-500);
  padding: 0.75rem 3rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 0.75rem;
  cursor: pointer;
  transition: filter 0.2s linear, box-shadow 0.2s ease-in-out;
  white-space: nowrap;
  border: 0;
  display: ${ ({ inMobile }) => inMobile ? "none" : "flex" };

  @media(max-width: 750px) {
    display: ${ ({ inMobile }) => inMobile ? "flex" : "none" };
  }

  &:hover {
    filter: brightness(1.10);
    box-shadow: var(--button-shadow);
  }
`;

export const DropdownMenuRoot = styled(DropdownMenu.Root)`
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  border: 0;
  background-color: transparent;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: var(--gray-600);
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.12);
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 0.25rem 2rem;
  background-color: var(--gray-600);
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > span.btn-logout {
    cursor: pointer;
    width: 100%;
    text-align: center;
  }

  &:hover:not(:first-child) {
    background-color: var(--purple-100);
    color: var(--gray-600);
  }
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  margin: 2px 0;
  height: 1px;
  width: 100%;
  background-color: var(--gray-300);
`;

export const SwitchRoot = styled(Switch.Root)`
  width: 40px;
  height: 24px;
  margin-left: 8px;
  border: 0;
  background-color: var(--gray-300);
  border-radius: 20px;
  transition: background-color 200ms ease-in-out;

  &[data-state="checked"] {
    background-color: var(--purple-100);
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--purple-100);
  display: block;
  transform: translateX(4px);
  transition: transform 200ms cubic-bezier(0.63, -0.4, 0.49, 1.32);
;

  &[data-state="checked"] {
    transform: translateX(18px);
    background-color: var(--white);
  }
`;