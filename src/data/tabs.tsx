import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	Box,
} from "@mui/material";
import { Tab, Experience } from "./types";

const experiences: Experience[] = [
	{
		label: "Elementary Teacher",
	},
	{
		label: "SEL & Art Therapy Workshop Leader",
	},
	{
		label: "Student Teaching",
	},
];

const tabs: Tab[] = [
	{
		label: "Home",
		title: "About Me",
		description:
			"Hello! I'm Zia, an elementary school teacher dedicated to fostering a supportive, engaging, and inclusive learning environment. I specialize in Social-Emotional Learning (SEL) and trauma-informed art therapy to help students grow academically and emotionally.",
	},
	{
		label: "Education",
		description:
			"I hold a Bachelor's degree in Elementary Education and a Master's degree in Art Therapy. I am also a certified SEL and trauma-informed art therapist.",
	},
	{
		label: "Teaching Philosophy",
		description:
			"My approach to teaching centers on creativity, empathy, and fostering a love for learning. I believe in nurturing each child's unique strengths and helping them develop resilience and confidence through meaningful educational experiences.",
	},
	{
		label: "Experience",
		content: (
			<List>
				{experiences.map((item, index) => (
					<Box key={item.label}>
						<ListItem
							secondaryAction={
								<Typography variant="body2">{item.years}</Typography>
							}
						>
							<ListItemText primary={item.label} secondary={item.description} />
						</ListItem>
						{index < experiences.length - 1 && <Divider />}
					</Box>
				))}
			</List>
		),
	},
];

export default tabs;
