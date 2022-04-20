import  styled  from 'styled-components'
import Searchlist from './Pages/Searchlist'
import Header from "./components/Header"
import MainPage from './Pages/MainPage';

const  Container = styled.div`
  max-width: 1580px;
  margin: auto;
  padding: 0 1rem;

  @media(min-width: 1680px) {
    max-width: 1580px;
  }

  @media(max-width: 1440px) {
    max-width: 1140px !important;
  }

  @media(max-width: 950px) {
    max-width: 850px !important;
  }
`;

function App() {
  return (
    <MainPage />

    // <Container>
    //   <Header />

    //   <Searchlist />
    // </Container>
  );
}

export default App;
