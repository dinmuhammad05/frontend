import { Box, Badge, IconButton } from "@mui/material";
import { Searchinput, CustomButton } from "./style";
import UserIcon from "../../assets/icons/user-icon";
import SearchIcon from "../../assets/icons/search-icon";
import HeartIcon from "../../assets/icons/heart-icon";
import BasketIcon from "../../assets/icons/basket-icon";

const Search = () => {
    return (
        <Box display="flex" alignItems="center" pl={{ xs: "20px", md: "60px" }} flex={1}>
            <Box position="relative" flexGrow={1}>
                <Searchinput placeholder="Поиск по товарам" />

                <IconButton
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box display="flex" alignItems="center" ml={{ xs: "20px", md: "40px" }} gap={{ xs: "20px", md: "40px" }}>
                <CustomButton><UserIcon /></CustomButton>

                <CustomButton>
                    <Badge badgeContent={5} color="error">
                        <HeartIcon />
                    </Badge>
                </CustomButton>

                <CustomButton>
                    <Badge badgeContent={2} color="error">
                        <BasketIcon />
                    </Badge>
                </CustomButton>
            </Box>
        </Box>
    );
};

export default Search;