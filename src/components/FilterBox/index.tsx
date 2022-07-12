import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons'
import {
  Container,
  SelectRoot,
  SelectTrigger,
  SelectIcon,
  SelectContent,
  SelectScrollUpButton,
  SelectViewPort,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectValue
} from './styles'

export function FilterBox() {
  return (
    <Container>
      <SelectRoot defaultValue="any view">
        <SelectTrigger>
          <SelectValue />
          <SelectIcon>  
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewPort>
            <SelectItem value="any view">
              <SelectItemText>Any View</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="preview and full preview">
              <SelectItemText>Preview and full preview</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="full preview">
              <SelectItemText>Full preview</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewPort>
        </SelectContent>
      </SelectRoot>

      <SelectRoot defaultValue="any document">
        <SelectTrigger>
          <SelectValue />
          <SelectIcon>  
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewPort>
            <SelectItem value="any document">
              <SelectItemText>Any document</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="books">
              <SelectItemText>Books</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="magazines">
              <SelectItemText>Magazines</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="newspaper">
              <SelectItemText>Full preview</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewPort>
        </SelectContent>
      </SelectRoot>
    </Container>
  )
}