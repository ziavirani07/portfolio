import { Box, Typography } from "@mui/material";
import header from "../data/header";

export function Header() {
	if (!header.title && !header.subtitle) return null;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				backgroundColor: "info.main",
				padding: 4,
			}}
		>
			<Typography variant="h2" color="primary">
				{header.title}
			</Typography>
			<Typography variant="subtitle1" sx={{ whiteSpace: "pre-line" }}>
				{header.subtitle}
			</Typography>
		</Box>
	);
}
