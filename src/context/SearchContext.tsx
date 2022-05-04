import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from 'react'
import { BooksListProps } from '../models/BooksListResponse';

interface SearchContextProps {
  booksList: BooksListProps | undefined;
  populateBooksList: (bookListResponse: any) => void;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({ children }:SearchContextProviderProps) {
  const [booksList, setBooksList] = useState<BooksListProps>()

  useEffect(() => {
    setBooksList(JSON.parse(localStorage.getItem("books") || "{}"))
  }, [])

  function populateBooksList(bookListResponse: any) {
    localStorage.setItem("books", JSON.stringify(bookListResponse))
  }

  return (
    <SearchContext.Provider
      value={{
        booksList,
        populateBooksList
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}