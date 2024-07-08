import React, { useState } from "react"
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface ItemProps {
    title: string;
    to: string;
    icon: React.ReactNode;
    selected: string;
    setSelected: (title: string) => void;
}
const Item: React.FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Link to={to} style={{textDecoration:'none'}}>
            <MenuItem
                active={selected === title}
                style={{
                    color: colors.grey[100],
                }}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography>{title}</Typography>



            </MenuItem>
        </Link>
    );
};
const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <>
            <Box>
                <Sidebar collapsed={isCollapsed} rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#1f2a40',
                    }
                }}
                >
                    <Menu menuItemStyles={{
                        button: {
                            [`&.hover`]: {
                                backgroundColor: 'black',
                            }
                        }
                    }}>
                        {/* LOGO AND MENU ICON */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}

                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        ADMINIS
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`../../assets/user.png`}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                    >
                                        Ed Roh
                                    </Typography>
                                    <Typography variant="h5" color={colors.greenAccent[500]}>
                                        VP Fancy Admin
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />



                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Data
                            </Typography>
                            <Item
                                title="Manage Team"
                                to="/team"
                                icon={<PeopleOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Contacts Information"
                                to="/contacts"
                                icon={<ContactPageOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Invoices Balances"
                                to="/invoices"
                                icon={<ReceiptOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Pages
                            </Typography>
                            <Item
                                title="Profile Form"
                                to="/form"
                                icon={<PersonOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Calendar"
                                to="/calendar"
                                icon={<CalendarViewDayOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="FAQ Page"
                                to="/faq"
                                icon={<HelpOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Charts
                            </Typography>
                            <Item
                                title="Bar Chart"
                                to="/bar"
                                icon={<BarChartOutLinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Pie Chart"
                                to="/pie"
                                icon={<PieChartOutlineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Line Chart"
                                to="/line"
                                icon={<TimelineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Geography Chart"
                                to="/geography"
                                icon={<MapOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </Sidebar>
            </Box>
        </>
    )
}
export default SideBar;