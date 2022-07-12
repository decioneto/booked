import {
  Container
} from "./styles"

import BookImage from '../../assets/images/book-img.png'

export function CardItem() {
  return (
    <Container>
      <div className="img">
        <img src={BookImage} alt="" />
      </div>

      <div className="infos">
        <h4>The Letters of J. R. R. Tolkien</h4>
        <p>
          by <a href="#">Humphrey Carpenter</a>, 
          <a href="#"> Christopher Tolkien</a></p>
        <p>Publisher: <a href="#">HarperCollins Publishers</a></p>
        <p>Published: <span>December 13, 2012</span></p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec nisi risus, libero libero, non facilisi. Vitae adipiscing sollicitudin.
        </p>

        <div className="button-group">
          <a href="#" className="button tertiary-button">More details</a>
          <button className="button primary-button">Add to my library</button>
        </div>
      </div>
    </Container>
  )
}