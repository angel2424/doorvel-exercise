import AmenitiesCard from "../components/AmenitiesCard";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import AmenitiesContext from "../context/AmenitiesContext";
import Head from "next/head";

export default function Home() {
  const { parentData } = useContext(AmenitiesContext);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amenidades</title>
      </Head>
      <div className={styles.main}>
        <h1>Amenidades</h1>
        <div className={styles.amenities_cards}>
          {parentData?.data?.map((amenity) => (
            <AmenitiesCard
              key={amenity.id}
              title={amenity.name}
              link={amenity.id}
              id={amenity.id}
              img={`https://res.cloudinary.com/dpnv2uar8/image/upload/v1676095481/image_${amenity.id}.jpg`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
