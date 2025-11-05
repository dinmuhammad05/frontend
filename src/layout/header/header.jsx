import { Box, Typography, IconButton } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import LocationIcon from "../../assets/icons/location-icon";
import Search from "./search";

const Header = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: "31px",
                px: { xs: "20px", md: "80px" },
                display: "flex",
                alignItems: "center",
                maxWidth: "1440px",
                margin: "0 auto",
            }}
        >
            <img src={logo} alt="logo" width={220} height={50} style={{ marginRight: "60px" }} />

            <IconButton size="small">
                <LocationIcon />
            </IconButton>

            <Typography pl={1}>Алматы</Typography>

            <Search />
        </Box>
    );
};

export default Header;