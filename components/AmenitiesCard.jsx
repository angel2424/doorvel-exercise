import styles from "../styles/AmenitiesCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardActionArea, CardMedia } from "@mui/material";
import { useRouter } from "next/router";

export default function AmenitiesCard({ title, link, id, img }) {
  const router = useRouter();
  return (
    <Card
      className={styles.card_container}
      onClick={() => router.push(`amenities/${id}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height="220" image={img} alt="Image" />
        <CardContent className={styles.card_content}>
          <Typography
            variant="h5"
            className={styles.card_title}
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
