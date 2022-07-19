import { CardItem } from '../CardItem'
import { FilterBox } from '../FilterBox'
import { Container, CardGrid } from './styles'
import { SearchContext } from '../../context/SearchContext'
import { useContext } from 'react'

export function Searchlist() {
  const { booksList } = useContext(SearchContext)

  return (
    <Container>
      <FilterBox />
      
     {
      booksList
      ? (
        <CardGrid>
          {
            booksList.items.map(book => (
              <CardItem 
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                publisher={book.volumeInfo.publisher}
                publishDate={book.volumeInfo.publishedDate}
                thumbnail={book.volumeInfo.imageLinks?.smallThumbnail}
              />
            ))
          }
        </CardGrid>
      )
      : (
        <p>Pesquise sobre o livro que quer ler!</p>
      )
     }
    </Container>
  )
}

