import {
	Tabs,
	Tab,
	Box,
	BoxProps,
	TabProps,
	Typography,
	Paper,
	ListItemText,
	List,
	ListItem,
	Divider,
} from "@mui/material";
import { useId, useState } from "react";

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
				<MTab label="Home" index={0} tabsId={tabsId} />
				<MTab label="Education" index={1} tabsId={tabsId} />
				<MTab label="Teaching Philosophy" index={2} tabsId={tabsId} />
				<MTab label="Experience" index={3} tabsId={tabsId} />
			</Tabs>

			<Panel index={0} label="About Me" tabsId={tabsId} currentTab={currentTab}>
				<Typography>
					Hello! I'm Zia, an elementary school teacher dedicated to fostering a
					supportive, engaging, and inclusive learning environment. I specialize
					in Social-Emotional Learning (SEL) and trauma-informed art therapy to
					help students grow academically and emotionally.
				</Typography>
			</Panel>

			<Panel
				index={1}
				label="Education"
				tabsId={tabsId}
				currentTab={currentTab}
			>
				<Typography>Education</Typography>
			</Panel>

			<Panel
				index={2}
				label="Teaching Philosophy"
				tabsId={tabsId}
				currentTab={currentTab}
			>
				<Typography>
					My approach to teaching centers on creativity, empathy, and fostering
					a love for learning. I believe in nurturing each child's unique
					strengths and helping them develop resilience and confidence through
					meaningful educational experiences.
				</Typography>
			</Panel>

			<Panel
				index={3}
				label="Experience"
				tabsId={tabsId}
				currentTab={currentTab}
			>
				<List>
					<ListItem>
						<ListItemText>
							Elementary Teacher – [Your School Name], [Years]
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText>
							SEL & Art Therapy Workshop Leader – [Organization Name]
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText>
							Student Teaching – [University Placement]
						</ListItemText>
					</ListItem>
				</List>
			</Panel>
		</Box>
	);
}
