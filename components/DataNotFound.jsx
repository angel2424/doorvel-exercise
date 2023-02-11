import styles from "../styles/DataNotFound.module.css";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const DataNotFound = () => {
  return (
    <>
      <div className={styles.data_notFound}>
        Lo sentimos, no encontramos la informacion que buscas
      </div>
      <Link href="/">
        <Button
          className={styles.notFound_button}
          startIcon={<ArrowBack />}
          size={"large"}
        >
          Regresar al inicio
        </Button>
      </Link>
    </>
  );
};

export default DataNotFound;
