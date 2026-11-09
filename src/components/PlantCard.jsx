import React, { useState, useEffect } from "react";
import { Link } from 'react-router';
import Card from 'react-bootstrap/Card';
import 'bootswatch/dist/minty/bootstrap.min.css'
import styles from './Searcher.module.css';
import { useStore } from "../stores/useStore";

function PlantCard({ plantName, size }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState(null);

  const { removePlant } = useStore();

  useEffect(() => {
    if (!plantName) return;

    const fetchImage = async () => {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${plantName}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.description) {
          setImageUrl(data.originalimage?.source || null);
          setDescription(data.description || null);
        } else {
          setImageUrl(null);
          setDescription(null);
          removePlant(plantName);
        }
      } catch (error) {
        console.error("Error fetching image from Wikipedia:", error);
      }
    };

    fetchImage();
  }, [plantName]);

  return (
    <>
    {size === "big"? (
      <Card className="bg-dark text-white" style={{ width: "800px", height: "600px", overflow: "hidden", padding:0 }}>
        <Card.Img 
          src={imageUrl || "https://placehold.co/320x240?text=No+Image"} 
          alt={plantName} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"  
          }}
        />
        <Card.ImgOverlay>
          <Card.Title>  
            <Link to={`/plant/${encodeURIComponent(plantName)}`} className={styles.plantLinkBig}>
              {plantName}
            </Link>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    ) : (
      <Card style={{ width: '10rem' }}>
        <Card.Img 
          variant="top"           
          src={imageUrl || "https://placehold.co/150x150?text=No+Image"} 
          alt={plantName} 
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover"  
          }}
        />
        <Card.Body>
          <Card.Title>  
            <Link to={`/plant/${encodeURIComponent(plantName)}`} className={styles.plantLinkSmall}>
              {plantName}
            </Link>
          </Card.Title>
          <Card.Text style={{fontSize: '0.5rem'}}>{description}</Card.Text>
        </Card.Body>
      </Card>
    )}
    </>
  );
} 

export default PlantCard;