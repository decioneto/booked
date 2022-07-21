import { InfosContainer } from './styles'
import { TabContent } from '../../Pages/DetailsPage/styles'

export function   Overview() {
  return (
    <TabContent value='overview'>
      <h4 className='tab-title'>About this edition</h4>

      <InfosContainer>
        <ul>
          <li>
            <span>Page count:</span> 480
          </li>
          <li>
            <span>Published</span> December 13, 2012
          </li>
          <li>
            <span>Format:</span> Ebook
          </li>
          <li>
            <span>Category:</span> Lorem
          </li>
        </ul>

        <ul>
          <li>
            <span>Publisher:</span> HarperCollins Publishers
          </li>
          <li>
            <span>Language:</span> English
          </li>
          <li>
            <span>Author:</span> Humphrey Carpenter,  Christopher Tolkien
          </li>
          <li>
            <span>Editors:</span> Christopher Tolkien, Humphrey Carpenter
          </li>
        </ul>
      </InfosContainer>

      <p className="description">
        A comprehensive collection of letters spanning the adult life (1914-1973) of one of the world’s most famous storytellers.
        ‘It is not possible even at great length to "pot" The Lord of the Rings in a paragraph or two. It was begun in 1936, and every part has been written many times... the labour has been colossal; and it must stand or fall, practically as it is.’
        J.R.R. Tolkien was one of the most prolific letter writers of this century. Over the years he wrote to his publishers, his family, to friends (including C.S. Lewis, W.H. Auden and Naomi Mitchison) and to fans of his books. The letters present a fascinating and highly detailed portrait of the man in many of his aspects: as storyteller, scholar, Catholic, parent and observer of the world around him. They also shed much light on his creative genius and grand design for the creation of a whole new world – Middle-earth.
      </p>
    </TabContent>
  )
}