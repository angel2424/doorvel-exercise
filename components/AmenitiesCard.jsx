import styles from "../styles/AmenitiesCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardActionArea, CardMedia } from "@mui/material";

export default function AmenitiesCard({ title, link, id, img }) {
  return (
    <Link href={`amenities/${link}`}>
      <Card className={styles.card_container} sx>
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
    </Link>
  );
}
