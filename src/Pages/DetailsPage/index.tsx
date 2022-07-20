import { Header } from '../../components/Header'
import { Overview } from '../../components/Overview'

import { Button, Container } from '../../styles/componentStyles'
import { 
  WrapDetails,
  TabRoot,
  TabList,
  TabTrigger,
  TabContent
} from './styles'

import Thumbnail from '../../assets/images/book-img.png'

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

          <TabContent value='getTheBook'>
            <h3>Get the book</h3>
          </TabContent>

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

      </WrapDetails>
    </Container>
  )
}
