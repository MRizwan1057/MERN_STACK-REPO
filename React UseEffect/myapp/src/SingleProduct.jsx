import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const SingleProduct = ({ product }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      padding: 5,
      margin: 15,
    },
  });
  const classes = useStyles();
  return (
    <Grid item md={6} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="product image"
          height="300"
          image="https://picsum.photos/200/300"
          // image="./images/usb.jpg"
          title="My Product"
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h5">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {product.price} PKR
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {product.soldQty} Sold
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          View Product
        </Button>
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Grid>
  );
};

// <div>
//   <h3>{product.name}</h3>
//   <h4>{product.price}</h4>
//   <h5>{product.soldQty}</h5>
//   <button>View Product</button>
//   <button>Add to Cart</button>
// </div>
//   );
// };

export default SingleProduct;
