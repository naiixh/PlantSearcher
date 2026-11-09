import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import 'bootswatch/dist/minty/bootstrap.min.css'
//import './Navbar.module.css'

function MyNavbar() {
  const {t} = useTranslation();
  return (
    <>
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="PlantSearcher_icon.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {t("language")}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>{t("En")}</Dropdown.Item>
                        <Dropdown.Item onClick={() => i18n.changeLanguage("es")}>{t("Es")}</Dropdown.Item>
                        <Dropdown.Item onClick={() => i18n.changeLanguage("ca")}>{t("Ca")}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;