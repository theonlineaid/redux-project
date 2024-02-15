import { useSelector, useDispatch } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { toggleLightMode } from "../redux/features/theme/themeSlice";


export default function LightMood() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.mode);

    const handleToggleLightMode = () => {
        dispatch(toggleLightMode());
    };

    const theme = useTheme();

    return (
        <>
            <Box>
                <button onClick={handleToggleLightMode}>Light Mode</button>
            </Box>
        </>
    );
}
