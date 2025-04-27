import { Box, Typography } from "@mui/material";

export function Header() {
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
				Zia Virani's Teaching Portfolio
			</Typography>
			<Typography variant="subtitle1">
				Elementary School Teacher | Passionate about SEL & Trauma-Informed Art
				Therapy
			</Typography>
			<Typography variant="subtitle1">
				ziavirani07@gmail.com | Atlanta, Georgia
			</Typography>
		</Box>
	);
}
