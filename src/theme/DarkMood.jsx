import { useSelector, useDispatch } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { toggleDarkMode } from "../redux/features/theme/themeSlice";


export default function DarkMood() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.mode);

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const theme = useTheme();

    return (
        <>
            <Box>
                <button onClick={handleToggleDarkMode}>Dark Mode</button>
            </Box>
        </>
    );
}
