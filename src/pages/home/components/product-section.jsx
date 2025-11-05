import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "./product-card";

export default function ProductSection({ title, products }) {
    return (
        <>
            <Typography variant="h5" fontWeight="bold" mb={2}>
                {title}
            </Typography>
            <Grid container spacing={3} mb={5}>
                {products.map((p) => (
                    <Grid item xs={12} sm={6} md={3} key={p.id}>
                        <ProductCard product={p} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
