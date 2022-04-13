import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";

const ProductDetail = ({ product }) => {
  const useStyles = makeStyles({
    root: {
      background: "burlywood",
      maxWidth: "25rem",
      padding: 5,
      margin: 25,
      textAlign: "center",
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.root}>
          <CardActionArea>
            <CardMedia
              // variant="outlined"
              component="img"
              alt="product image"
              height="250"
              // image={product.pimg}
              // image="https://picsum.photos/200/300"
              image="./images/curtain.png"
              title="My Product"
            />
          </CardActionArea>
          <hr />
          <CardActionArea>
            <CardMedia
              component="img"
              alt="product image"
              height="250"
              // image={product.pimg}
              // image="https://picsum.photos/200/300"
              image="./images/curtain.png"
              title="My Product"
            />
          </CardActionArea>
        </Grid>

        <Grid item xs={6} className={classes.root}>
          {/* <CardActionArea> */}
          <CardMedia
            component="img"
            alt="product image"
            // heigth="300"
            // image={product.pimg}
            // image="https://picsum.photos/200/300"
            image="./images/curtain.png"
            title="My Product"
          />
          {/* </CardActionArea> */}
        </Grid>
        <Grid item xs={3}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="h5">
              {/* {product.name} */}Name
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {/* {product.price} PKR */}Price
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {/* {product.soldQty} Sold */} Sold
            </Typography>
          </CardContent>
          <br />
          <br />
          <h4>Order Details:</h4>

          <TextField label="Quantity" fullWidth type="number" />
          <TextField label="Total Amount" fullWidth type="number" />
          <TextField label="Color" fullWidth type="color" />
          <br />
          <br />
          <Button variant="contained" fullWidth color="inherit">
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductDetail;
