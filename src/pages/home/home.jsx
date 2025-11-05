import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../config/color";
import product1 from "../../assets/images/product1.svg";
import product2 from "../../assets/images/product2.svg";
import ArrowIcon from "../../assets/icons/arrow-icon";
import Arrow2Icon from "../../assets/icons/arrow2-icon";
import ProductCard from "./components/product-card";
import products from "../../data/product";
import ProductSection from "./components/product-section";

const Home = () => {
    const newProducts = products.filter((p) => p.category === "new");
    const saleProducts = products.filter((p) => p.category === "sale");
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1440px",
                    margin: "0 auto",
                    height: "592px",
                    bgcolor: COLORS.primary,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: "76px",
                }}
            >
                <Box sx={{ maxWidth: "524px" }}>
                    <Typography
                        variant="body1"
                        color="white"
                        fontSize="60px"
                        fontWeight={700}
                        mb="32px"
                    >
                        Новая коллекция ковров Venetta
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "#cb4a4a",
                            borderColor: "#cb4a4a",
                            color: "white",
                            fontSize: "18px",
                            fontWeight: 500,
                        }}
                    >
                        Смотреть все
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        width: "772px",
                        height: "503px",
                        pl: "50px",
                    }}
                >
                    <img src={product1} alt="product 1" />
                    <img src={product2} alt="product 2" />
                </Box>
            </Box>

            {/* Yangi mahsulotlar bo'limi */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: "105px",
                    pl: "76px",
                    pr: "76px",
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "32px" }}
                >
                    <Typography variant="h4" color="black" ml={25} fontWeight={700}>
                        Новинки
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#618c78",
                            cursor: "pointer",
                        }}
                    >
                        Все новинки
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                    }}
                >
                    <ArrowIcon />
                    <Arrow2Icon />
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
                <ProductSection products={newProducts} />
            </Container>

            {/* Chegirmali mahsulotlar bo'limi */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: "60px",
                    pl: "76px",
                    pr: "76px",
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "32px" }}
                >
                    <Typography variant="h4" color="black" ml={25} fontWeight={700}>
                        Акции
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#618c78",
                            cursor: "pointer",
                        }}
                    >
                        Все акции
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                    }}
                >
                    <ArrowIcon />
                    <Arrow2Icon />
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 6 }}>
                <ProductSection products={saleProducts} />
            </Container>
        </>
    );
};

export default Home;