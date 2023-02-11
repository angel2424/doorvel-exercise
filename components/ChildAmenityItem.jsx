import { Card, CardContent, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import Link from "next/link";
import styles from "../styles/ChildAmenityItem.module.css";

export default function ChildAmenityItem({ title }) {
  return (
    <Card className={styles.amenityItem_card}>
      <Link href={""} className={styles.amenityItem_link}>
        <CardContent>
          <Typography
            color="#063f37"
            variant="h6"
            className={styles.amenityItem_title}
          >
            {title}
          </Typography>
        </CardContent>
        <NavigateNext />
      </Link>
    </Card>
  );
}
