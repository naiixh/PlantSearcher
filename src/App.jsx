import 'bootswatch/dist/minty/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router'; //siempre tiene que ir entre{}
import { useTranslation } from "react-i18next";
import './index.css';


function App() {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <img src="PlantSearcher_icon.png" className="logo"/>
        <h1>{t("welcomeMessage")}</h1>
        <br/>
        <Link to="/searcher" className="btn btn-primary">
          {t("getStarted")}
        </Link>
      </Container>
    </>
  )
}

export default App
