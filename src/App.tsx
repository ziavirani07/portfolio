import AppTabs from "./Tabs";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Header } from "./Header";
import { Box } from "@mui/material";
import { Footer } from "./Footer";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					textAlign: "center",
					height: "100vh",
				}}
			>
				<Header />
				<AppTabs />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
