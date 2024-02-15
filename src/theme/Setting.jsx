import React, { useState } from "react";
import {
    Box,
    Drawer,
    Toolbar,
    Typography,
    Paper,
    IconButton,
    Button,
    Divider,
    Grid,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { Link } from "react-router-dom";
import FullScreenToggle from "../compoments/FullScreen/FullScreenToggle";
import DarkMood from "./DarkMood";
import LightMood from "./LightMood";
const NAV_WIDTH = 280; // Set the width of the nav drawer

function Setting() {
    const [openNav, setOpenNav] = useState(false);
    const [count, setCount] = useState(1);


    const toggleNav = () => {
        setOpenNav((prevOpen) => !prevOpen);
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };
    return (
        <Box sx={{ position: "relative" }}>

            <IconButton aria-label="Setting" onClick={toggleNav}>
                <SettingsIcon />
            </IconButton>

            <Drawer
                open={openNav}
                anchor="right"
                onClose={() => setOpenNav(false)}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    sx: { width: NAV_WIDTH },
                }}
            >
                <Box sx={{ p: 0.5 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" p={1}>
                            Setting
                        </Typography>
                        <Box>

                            <IconButton variant="contained">
                                <RestartAltIcon />
                            </IconButton>

                            <IconButton variant="contained" onClick={() => setOpenNav(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {/* <IconButton variant="contained" component={Link} to="/">
                            <KeyboardDoubleArrowRightIcon />
                        </IconButton> */}
                    </Box>

                    <Divider sx={{ mb: 1 }} />

                    <Grid container spacing={0.5}>

                        <Grid item xs={6}>
                            <LightMood />
                        </Grid>

                        <Grid item xs={6}>
                            <DarkMood />
                        </Grid>

                        <FullScreenToggle />
                    </Grid>
                </Box>

            </Drawer>
        </Box>
    );
}

export default Setting;