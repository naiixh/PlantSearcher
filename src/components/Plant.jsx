import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { Spinner, Image, Container, Row, Col, Button, CloseButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import 'bootswatch/dist/minty/bootstrap.min.css';

function Plant() {
  const { t, i18n } = useTranslation();
  const { plantName } = useParams(); // obtiene el nombre de la URL

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    if (!plantName) return;

    async function fetchPlant() {
      setLoading(true);
      setData(null); 
      setError(null);

      const languages = [i18n.language, "en"];

      for (const lang of languages) {

          const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${plantName}`;

          try {
            const response = await fetch(url);
            if (response.ok) {
              const result = await response.json();
              if (result.extract) {
                  setData(result);
                  setLoading(false);
                  return;
              }
            }
          } catch (err) {
            setError(err.message);
          }
        };
      setData(null);
      setLoading(false);
    }
    if (plantName) fetchPlant();
  }, [plantName, i18n.language]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <Container style={{position: "fixed", top: "20%", left: "90%", zIndex: 1000, width: "fit-content", padding: "0" }}>
        <Link to="/searcher">
          <CloseButton/>
        </Link>
      </Container>
      <Container className="my-5 mb-5">
          <h1 className="text-center mb-5 mt-5">{plantName}</h1>

          <Row className="align-items-start">
          <Col md={4} className="text-center mb-3">
              <Image
              src={data.thumbnail?.source || "https://placehold.co/300x300?text=No+Image"}
              width={300}
              rounded
              fluid
              />
          </Col>

          <Col md={8}>
              <p className="lead">{data.extract || "No description available."}</p>

              <Button
              variant="dark"
              href={data?.content_urls?.desktop?.page}
              target="_blank"
              rel="noopener noreferrer"
              >
              {t("viewWikipedia")}
              </Button>
          </Col>
          </Row>
      </Container>
    </>
  );
}

export default Plant;
