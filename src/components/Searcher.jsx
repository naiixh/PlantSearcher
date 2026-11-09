import React, { useState, useEffect } from "react";
import Drop from './Drop';
import IdentifyPlant from "./IdentifyPlant";
import PlantCard from "./PlantCard";
import { Container, Row, Col, Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import 'bootswatch/dist/minty/bootstrap.min.css'
import styles from './Searcher.module.css';
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/useStore";

function Searcher() {
  const { t } = useTranslation();

  const [files, setFiles] = useState([]);
  const [prob, setProb] = useState(0.0)

  const { plants, setPlants, clearPlants } = useStore();

  const handleReload = async () => {
    setPlants([]);
    setFiles([]);
    setProb(0.0);
  };

  return (
    <>
      <Container style={{position: "fixed", top: "85%", left: "5%", zIndex: 1000, width: "fit-content", padding: "0" }}>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2">{t("reloadSearch")}</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button
              variant="light"
              {...triggerHandler}
              className="d-inline-flex align-items-center"
              onClick={handleReload}
            >
              <Image
                ref={ref}
                src="recharge.png"
                width={30}
                height={30}
              />
            </Button>
          )}
        </OverlayTrigger>
      </Container>

      <Container className={styles.dropzone}>
      <Drop files={files} setFiles={setFiles} />
      <IdentifyPlant files={files} setPlants = {setPlants} setProb = {setProb}/> 
      </Container>

      <Container className={styles.plantResults}>
        {
        plants.length > 0 && (
          <div className="mt-4 mb-4">
            <h4>{t("plantName")} {plants[0]}?</h4>
            <Row className="justify-content-center mt-5 mb-5">
              <PlantCard plantName = {plants[0]} size="big"/>
            </Row>
            <br/>
            <h5>{t("similarPlants")}</h5>
            <Row className="mt-5 mb-4">
              {plants.slice(1).map((plant, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <PlantCard plantName = {plant} size="small"/>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </>
  )
}

export default Searcher
