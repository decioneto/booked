import * as Select from '@radix-ui/react-select'
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 auto 2rem;
  padding: 1.25rem;
  background-color: var(--purple-100);
  border-radius: 0.75rem;
  max-width: 950px;
`;

export const SelectRoot = styled(Select.Root)``;
export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  height: 48px;
  width: 100%;
  max-width: 250px;
  border-radius: 0.375rem;
  border: 0;
  font-size: 1rem;
  background-color: var(--gray-600);
`;
export const SelectValue = styled(Select.Value)``;
export const SelectIcon = styled(Select.Icon)``;
export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: var(--gray-600);
  box-shadow: var(--button-shadow);
  border-radius: 0.5rem;
`;
export const SelectScrollUpButton = styled(Select.ScrollUpButton)``;
export const SelectViewPort = styled(Select.Viewport)`
`;
export const SelectItem = styled(Select.Item)`
  padding: 1rem 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--gray-400)
  }
`;
export const SelectItemText = styled(Select.ItemText)``;
export const SelectItemIndicator = styled(Select.ItemIndicator)``;