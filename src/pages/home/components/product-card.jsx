import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

export default function ProductCard({ product }) {
    return (
        <Card
            sx={{
                width: "100%",
                borderRadius: 3,
                position: "relative",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": { transform: "translateY(-4px)" },
            }}
        >

            <IconButton
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "white",
                }}
            >
                <FavoriteBorder />
            </IconButton>

            <CardMedia
                component="img"
                image={product.image}
                height="220"
                alt={product.name}
            />
            <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                    {product.brand}
                </Typography>
                <Typography fontWeight="bold">{product.name}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {product.size}
                </Typography>

                <Box sx={{ mt: 1 }}>
                    {product.discount ? (
                        <>
                            <Typography color="error" fontWeight="bold">
                                {product.price} ₸
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: "line-through" }}
                            >
                                {product.oldPrice} ₸
                            </Typography>
                        </>
                    ) : (
                        <Typography fontWeight="bold">
                            {product.price} ₸
                        </Typography>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}
