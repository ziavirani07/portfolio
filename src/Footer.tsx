import { Box, Typography } from "@mui/material";
import footer from "./data/footer";

export function Footer() {
	if (!footer.title && !footer.subtitle) return null;
	return (
		<Box sx={{ backgroundColor: "info.main", padding: 4 }}>
			<Typography variant="h3" color="primary">
				{footer.title}
			</Typography>
			<Typography variant="subtitle1" sx={{ whiteSpace: "pre-line" }}>
				{footer.subtitle}
			</Typography>
		</Box>
	);
}
