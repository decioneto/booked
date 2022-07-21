import { createContext, ReactNode, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { BooksListProps } from '../models/BooksListResponse';
import { api } from '../services/api';

interface SearchContextProps {
  booksList: BooksListProps | undefined;
  queryBooks: (queryValue: string) => void;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({ children }:SearchContextProviderProps) {
  const [booksList, setBooksList] = useState<BooksListProps | undefined>()
  const navigate = useNavigate()

  function queryBooks(queryValue: string) {
    api.get(`volumes?q=${queryValue}`).then(response => {
      const queryResponse: BooksListProps = response.data

      setBooksList(queryResponse)
      
      navigate(`/search/q=${queryValue}`)
    }).catch(err => console.log(err))
  }

  return (
    <SearchContext.Provider
      value={{
        booksList,
        queryBooks
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}