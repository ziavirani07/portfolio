import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff", // white
		},
		secondary: {
			main: "#9dbf9e", // darker green
			light: "#d0d6b5", // lighter green
		},
		info: {
			main: "#987284", // purple
		},
		background: {
			paper: "#ffffff", // white
			default: "#d0d6b5", // lighter green
		},
	},
	typography: {
		fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
		h1: { fontWeight: 700 },
		h2: { fontWeight: 700 },
		h3: { fontWeight: 400 },
		h4: { fontWeight: 400 },
		body1: { fontWeight: 400 },
		subtitle1: { fontWeight: 700, color: "#ffffff" },
	},
	spacing: 4,
});

export default theme;
