
import React, { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const coloreMode = useContext(ColorModeContext);
    return (
        <>
            <Box display="flex" justifyContent='space-between' p={2}>
                {/* {Search bar} */}
                <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }} >
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box display="flex">

                    <IconButton type="button" onClick={coloreMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ?
                            <DarkModeOutLinedIcon /> :
                            <LightModeOutLinedIcon />
                        }
                    </IconButton>

                    <IconButton type="button">
                        <NotificationsNoneIcon />
                    </IconButton>
                    <IconButton type="button">
                        <SettingsOutLinedIcon />
                    </IconButton>
                    <IconButton type="button">
                        <PersonOutLinedIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
export default Topbar;