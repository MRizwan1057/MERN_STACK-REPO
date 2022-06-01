import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";

const SingleProduct = (props) => {
  let { product } = props;
  const useStyles = makeStyles({
    root: {
      background: "burlywood",
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
          width="200"
          image={product.pimg}
          title="My Product"
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6">
            {product.price} PKR
          </Typography>
          <Typography gutterBottom variant="h6">
            {product.soldQty} Sold
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          // onClick={() => {
          //   console.log(`veiwed${product._id}`);
          //   props.history.push("/detailedProduct" + product._id);
          // }}
        >
          View Product
        </Button>
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Grid>
  );
};
export default withRouter(SingleProduct);
