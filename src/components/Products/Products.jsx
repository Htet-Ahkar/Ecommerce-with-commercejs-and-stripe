import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

//Dummy products
// const products = [
//   {
//     id: 1,
//     name: "Shoe",
//     description: "Running shoes.",
//     price: "$5",
//     image: "https://bit.ly/37t6LDK",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple macbook.",
//     price: "$15",
//     image: "https://bit.ly/3lNHBIt",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
