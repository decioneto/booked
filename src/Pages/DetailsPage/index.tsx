import { Header } from '../../components/Header'
import { Overview } from '../../components/Overview'
import { GetTheBook } from '../../components/GetTheBook'
import { Footer } from '../../components/Footer'

import { Button, Container } from '../../styles/componentStyles'
import { 
  WrapDetails,
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
  AuthorBox
} from './styles'

import Thumbnail from '../../assets/images/book-img.png'
import AuthorPic from '../../assets/images/author.png'

export function DetailsPage() {
  return (
    <Container>
      <Header />
      
      <WrapDetails>
        <div className="header">
          <div className="img">
            <img src={Thumbnail} alt="" />
          </div>
          <div className="header-infos">
            <h2>The Letters of J. R. R. Tolkien</h2>
            <p>
              by
              <a href="#"> Humphrey Carpenter,</a>
              <a href="#"> Christopher Tolkien</a>
            </p>
            <div className='button-group'>
              <Button className='primary-button'>Add to my library</Button>
              <Button className='secondary-button'>Preview</Button>
            </div>
          </div>
        </div>

        <TabRoot defaultValue='overview'>
          <TabList>
            <TabTrigger value='overview'>Overview</TabTrigger>
            <TabTrigger value='getTheBook'>Get the book</TabTrigger>
            <TabTrigger value='reviews'>Reviews</TabTrigger>
            <TabTrigger value='otherEditions'>Other Editions</TabTrigger>
            <TabTrigger value='moreByAuthor'>More by author</TabTrigger>
            <TabTrigger value='similarBooks'>Similar books</TabTrigger>
          </TabList>
          
          <Overview />

          <GetTheBook />

          <TabContent value='reviews'>
            <h3>Reviews</h3>
          </TabContent>

          <TabContent value='otherEditions'>
            <h3>Other Editions</h3>
          </TabContent>

          <TabContent value='moreByAuthor'>
            <h3>More by author</h3>
          </TabContent>

          <TabContent value='similarBooks'>
            <h3>Similar books</h3>
          </TabContent>
        </TabRoot>

        <AuthorBox>
          <h4 className='title'>About the author</h4>

          <div className="author">
            <div className="author-img">
              <img src={AuthorPic} alt="" />
            </div>

            <div className="bio-infos">
              <h4>Humphrey Carpenter</h4>
              <small>Biographer</small>
              <p className="bio">
                Humphrey Carpenter was born in Oxford in 1946 and has spent most of his life in that city. He read English Language and Literature at Keble College, Oxford, and met Professor J.R.R. Tolkien on a number of occasions. For some years he worked for the BBC as a radio producer and broadcaster and has won acclaim as a top biographer, including the recent and controversial biography of Robert Runcie.
              </p>
            </div>
          </div>
        </AuthorBox>

      </WrapDetails>

      <Footer />
    </Container>
  )
}
