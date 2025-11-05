import { Box, Typography, TextField, IconButton } from "@mui/material";
import { COLORS } from "../config/color";
import {SendIcon} from "../assets/icons/send-icon";
import {PhoneIcon} from "../assets/icons/phone-icon";
import {MailIcon} from "../assets/icons/mail-icon"
import {WhatsAppIcon} from "../assets/icons/whatsapp-icon";
import {InstagramIcon} from "../assets/icons/instagram-icon";
import { FacebookIcon } from "../assets/icons/facebook-icon";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#F4F4F4",
                padding: { xs: "40px 20px", md: "60px 76px" },
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "40px",
            }}
        >
            {/* Catalog */}
            <Box sx={{ flex: { xs: "1 1 100%", md: "auto" } }}>
                <Typography fontWeight={700} mb={2}>
                    Каталог товаров
                </Typography>
                {["Ковры", "Коврики", "Дорожки", "Для ванной", "Особенные ковры"].map((item) => (
                    <Typography key={item} color="text.secondary" mb={1} sx={{ fontSize: "14px" }}>
                        {item}
                    </Typography>
                ))}
            </Box>

            {/* Cabinet */}
            <Box sx={{ flex: { xs: "1 1 100%", md: "auto" } }}>
                <Typography fontWeight={700} mb={2}>
                    Личный кабинет
                </Typography>
                {["Личный кабинет", "Мои заказы", "Избранное"].map((item) => (
                    <Typography key={item} color="text.secondary" mb={1} sx={{ fontSize: "14px" }}>
                        {item}
                    </Typography>
                ))}
            </Box>

            {/* Support */}
            <Box sx={{ flex: { xs: "1 1 100%", md: "auto" } }}>
                <Typography fontWeight={700} mb={2}>
                    Центр поддержки
                </Typography>
                {["Контакты", "Доставка", "Возвраты"].map((item) => (
                    <Typography key={item} color="text.secondary" mb={1} sx={{ fontSize: "14px" }}>
                        {item}
                    </Typography>
                ))}
            </Box>

            {/* Contacts */}
            <Box sx={{ flex: { xs: "1 1 100%", md: "auto" } }}>
                <Typography fontWeight={700} mb={2}>
                    Помощь и контакты
                </Typography>

                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <PhoneIcon />
                    <Typography sx={{ fontSize: "14px" }}>+7 775 657 66 76</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <MailIcon />
                    <Typography sx={{ fontSize: "14px" }}>info@kilem.kz</Typography>
                </Box>

                <Box display="flex" gap={2}>
                    <WhatsAppIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </Box>
            </Box>

            {/* Subscribe */}
            <Box sx={{ width: { xs: "100%", md: "260px" }, flex: { xs: "1 1 100%", md: "auto" } }}>
                <Typography fontWeight={700} mb={2}>
                    Рассылка
                </Typography>
                <Typography color="text.secondary" mb={2} sx={{ fontSize: "14px" }}>
                    Подпишитесь, чтобы всегда быть в курсе наших новых акций
                </Typography>

                <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius="6px" pl={1}>
                    <TextField
                        variant="standard"
                        placeholder="Ваш email"
                        InputProps={{ disableUnderline: true }}
                        sx={{ flex: 1 }}
                    />
                    <IconButton sx={{ background: COLORS.primary, borderRadius: 0 }}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
