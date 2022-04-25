import { useState } from 'react'
import * as Label from '@radix-ui/react-label'
import { FormEvent } from 'react';
import SearchIcon from '../../assets/images/search.svg'

import { Container } from './styles'

export interface SearchInputProps {
  autoWidth?: boolean;
}

function SearchInput({ autoWidth }: SearchInputProps) {
  const [queryValue, setQueryValue] = useState('')

  const submitQuery = (event: FormEvent) => {
    event.preventDefault()
    console.log(queryValue)
  }

  return (
    <Container autoWidth={autoWidth}>
      <Label.Root htmlFor='main-search'>Search</Label.Root>
        <form id='search-form' onSubmit={submitQuery} />
        <input 
          type="text"
          id="main-search" 
          className='form-input'
          placeholder='Search by author, book name...'
          onChange={(e)=> {setQueryValue(e.target.value)}}
          value={queryValue}
        />
        <button type='submit' form='search-form' className='btn-search' >
          <img src={SearchIcon} alt="Search image icon" />
        </button>
    </Container>
  )
}

export default SearchInput