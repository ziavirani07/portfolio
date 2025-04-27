import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#9dbf9e",
			light: "#d0d6b5",
		},
		info: {
			main: "#987284",
		},
		background: {
			paper: "#ffffff",
			default: "#d0d6b5",
		},
	},
	typography: {
		fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
		h1: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 700,
		},
		h2: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 700,
		},
		h3: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 400, // Use bold weight for h1
		},
		h4: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 400, // Use bold weight for h1
		},
		body1: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
		},
		subtitle1: {
			fontFamily: '"Oranienbaum", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
			color: "#ffffff",
		},
	},
	spacing: 4,
});

export default theme;
