import styles from "../../styles/AmenityList.module.css";
import { useContext, useLayoutEffect } from "react";
import AmenitiesContext from "../../context/AmenitiesContext";
import ChildAmenityItem from "../../components/ChildAmenityItem";
import { Pagination } from "@mui/material";
import DataNotFound from "../../components/DataNotFound";
import Head from "next/head";

export default function AmenityList({ pageSlug }) {
  const { childData, parentData, setPage, page, setAmenityParentId } =
    useContext(AmenitiesContext);

  // Calcula el numero de paginas disponibles dividiendo el numero de informacion recibida entre 100 (el numero de datos por pagina) y lo redondea al numero mayor
  const NumPages = Math.ceil(childData?.count / 100);

  // Guarda el id de la pagina para hacer el request del parent_amenity seleccionado
  //disable-eslint-next-line
  useLayoutEffect(() => {
    setAmenityParentId(pageSlug);
  }, [pageSlug, setAmenityParentId]);

  // Controla los cambios del componente de paginacion, manda el numero de pagina al react context para hacer el request necesario al api
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{parentData?.data[pageSlug - 1]?.name}</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <>
        {childData ? (
          <div className={styles.container}>
            <h1 className={styles.amenityList_title}>
              {parentData?.data[pageSlug - 1]?.name}
            </h1>
            {/* Muestra error al no recibir informacion del api */}
            {childData?.count === 0 ? (
              <DataNotFound />
            ) : (
              // Muestra lista de amenidades child al recibir informacion del api
              <>
                <div className={styles.amenityChilds_container}>
                  {childData?.results?.map((amenityChild) => (
                    <ChildAmenityItem
                      key={amenityChild?.id}
                      title={amenityChild?.name}
                    />
                  ))}
                </div>
              </>
            )}

            {NumPages === 0 ? null : (
              <Pagination
                count={NumPages}
                variant="outlined"
                shape="rounded"
                className={styles.pagination}
                page={page}
                onChange={handleChange}
              />
            )}
          </div>
        ) : (
          <div className={styles.container}>Loading...</div>
        )}
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const pageSlug = context.params.amenityList;
  return { props: { pageSlug } };
}
