import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import 'bootswatch/dist/minty/bootstrap.min.css'

function IdentifyPlant({ files, setPlants, setProb }) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);  

    const identify = async () => {
        setLoading(true);

        const form = new FormData();

        files.forEach((file) => {
        form.append("organs", "auto");
        form.append("images", file);
        });

        const project = "all"; // You can choose a more specific flora, see: /docs/newfloras
        const apiKey = import.meta.env.VITE_PLANTNET_API_KEY; // my .env

        try {
            const response = await fetch(
                `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}`,
                {
                    method: "POST",
                    body: form,
                }
            );
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = await response.json();
            setPlants(data.results.map(plant => plant.species?.scientificNameWithoutAuthor || "Unknown"));
            setProb(data.results[0].score);
        } catch (error) {
          alert(`Ocurrió un error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

  return (
    <Button
    variant="primary"
    onClick={identify}
    disabled={loading || !files.length}>
        {loading ? (
        <>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                variant="light" 
            />{" "}
            {t("identifiyng")}
        </>
        ) : (
        t("identifyPlants")
        )}
    </Button>
  );
}

export default IdentifyPlant;
