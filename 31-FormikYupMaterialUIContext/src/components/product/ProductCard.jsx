import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} style={{ borderRadius: "15px" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{product.title[0]}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title.slice(0, 18)}
        subheader={`Kateqoriya: ${product.category}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
        style={{
          borderRadius: "15px",
          height: "20rem",
          width: "20rem",
          textAlign: "center",
        }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description.slice(0, 100)}. . .
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          Qiymət: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Reytinq: {product.rating.rate} ⭐ ({product.rating.count} səs)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
