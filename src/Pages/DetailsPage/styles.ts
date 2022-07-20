import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components';

export const WrapDetails = styled.div`

  @media(min-width: 1200px) {
    max-width: 778px;
    margin: auto;
  }

  .header {
    display: flex;
    align-items: flex-end;
    gap: 2rem;

    .img {
      height: 15vw;
      min-height: 10rem;
      border-radius: 0.75rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom;
      }
    }

    .header-infos {
      h2 {
        font-family: var(--title-font-family);
        font-size: var(--h2-font-size);
        font-weight: var(--h2-font-weight);
        line-height: 2.5rem;
      }

      p {
        color: var(--gray-50);

        a {
          color: var(--purple-100);
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .button-group {
        display: flex;
        gap: 1rem;
        margin-top: 1.75rem;
      }
    }
  }
`;

export const TabRoot = styled(Tabs.Root)`
  margin-top: 3.75rem;
`;

export const TabList = styled(Tabs.List)`
  display: flex;
  justify-content: center;
`;

export const TabTrigger = styled(Tabs.Trigger)`
  height: 2.25rem;
  padding: 0 1rem;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  border-right: 0;

  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
    border-right: 1px solid var(--gray-300);
  }

  &[data-state="active"] {
    background-color: #FCFBFF;
    color: var(--purple-100);
  }
`;

export const TabContent = styled(Tabs.Content)`
  background-color: var(--white);
  margin-top: 0.5rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--button-shadow);
`;
