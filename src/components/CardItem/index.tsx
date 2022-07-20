import { useNavigate } from "react-router-dom"
import { Button } from "../../styles/componentStyles";
import {
  Container
} from "./styles"

interface CardItemProps {
  id: string
  title: string;
  thumbnail: string | undefined;
  authors: string[];
  publisher: string | undefined;
  publishDate: string;
  description: string;
}

export function CardItem(props: CardItemProps) {
  const navigate = useNavigate()

  function moreDetailLink() {
    navigate(`details/${props.id}`)
  }

  return (
    <Container>
      <div className="img">
        {
          props.thumbnail
          ? (
            <img src={props.thumbnail} alt={props.title} referrerPolicy="no-referrer"/>
          )
          : (
            <div className="placeholder">{props.title}</div>
          )
        }
      </div>

      <div className="infos">
        <h4>{props.title}</h4>
        <p>
          by
          {
            props.authors.map(author => (
              <a href={`https://www.google.com/search?q=${author}`} target="_blank" rel="noreferrer"> {author}</a>
            ))
          }
        </p>
        <p>Publisher: 
          <a href={`https://www.google.com/search?q=${props.publisher}`} target="_blank" rel="noreferrer">
            &nbsp;{props.publisher}
          </a>
        </p>
        <p>Published: <span>{props.publishDate}</span></p>
        <p className="description">{props.description}</p>

        <div className="button-group" onClick={moreDetailLink}>
          <Button className="tertiary-button">More details</Button>
          <Button className="primary-button">Add to my library</Button>
        </div>
      </div>
    </Container>
  )
}