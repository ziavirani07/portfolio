import {
	Tabs,
	Tab,
	Box,
	BoxProps,
	TabProps,
	Typography,
	Paper,
} from "@mui/material";
import { useId, useState } from "react";
import tabs from "./data/tabs";

const getTabId = (index: number, tabsId: string) =>
	`trigger-${index}-${tabsId}`;
const getPanelId = (index: number, tabsId: string) =>
	`panel-${index}-${tabsId}`;

interface PanelProps extends BoxProps {
	children?: React.ReactNode;
	label: string;
	index: number;
	tabsId: string;
	currentTab: number;
}
export function Panel({
	children,
	label,
	index,
	currentTab,
	tabsId,
	...rest
}: PanelProps) {
	if (currentTab !== index) return null;

	return (
		<Box
			role="tabpanel"
			hidden={currentTab !== index}
			id={getPanelId(index, tabsId)}
			aria-labelledby={getTabId(index, tabsId)}
			{...rest}
			sx={{
				backgroundColor: "background.default",
				flexGrow: 1,
				padding: 6,
				display: "flex",
			}}
		>
			<Paper
				sx={{
					padding: 6,
					textAlign: "left",
					flexGrow: 1,
				}}
			>
				<Typography variant="h3" color="secondary">
					{label}
				</Typography>
				{children}
			</Paper>
		</Box>
	);
}

function MTab({
	label,
	index,
	tabsId,
	...rest
}: TabProps & { index: number; tabsId: string }) {
	return (
		<Tab
			label={label}
			id={getTabId(index, tabsId)}
			aria-controls={getPanelId(index, tabsId)}
			{...rest}
			sx={{
				fontSize: "1.2rem",
				fontWeight: 700,
				borderTopLeftRadius: 10,
				borderTopRightRadius: 10,
				"&.Mui-selected": { backgroundColor: "secondary.light" },
			}}
		/>
	);
}

export default function AppTabs() {
	const tabsId = useId();
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
			<Tabs
				value={currentTab}
				onChange={(_, newValue) => setCurrentTab(newValue)}
				aria-label="tabs"
				variant="fullWidth"
				textColor="primary"
				component="div"
				sx={{ "& .MuiTabs-indicator": { display: "none" } }}
			>
				{tabs.map((tab, index) => (
					<MTab key={index} label={tab.label} index={index} tabsId={tabsId} />
				))}
			</Tabs>

			{tabs.map((tab, index) => (
				<Panel
					key={index}
					index={index}
					label={tab.title ?? tab.label}
					tabsId={tabsId}
					currentTab={currentTab}
				>
					<Typography variant="h5">{tab.subtitle}</Typography>
					<Typography>{tab.description}</Typography>
					{tab.content}
				</Panel>
			))}
		</Box>
	);
}
