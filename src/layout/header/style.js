import styled from "@emotion/styled";
import { COLORS } from "../../config/color";
import { IconButton } from "@mui/material";

export const Searchinput = styled.input`
    padding: 16px 0;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    &:focus {
        border-color: ${COLORS.primary};
    }
`;

export const CustomButton = styled(IconButton)`
    &:hover {
        color: ${COLORS.primary};
    }
`;
