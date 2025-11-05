import { Box, Typography } from "@mui/material";

const Navbar = () => {
    const links = ["Ковры", "Коврики", "Для ванной", "Дорожки", "Особенные ковры", "Центр поддержки", "Контакты"];

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    mt: "31px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: { xs: "20px", md: "78px" },
                    maxWidth: "1440px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {links.map((item) => (
                    <Typography key={item} variant="body2" sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                        {item}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Navbar;
