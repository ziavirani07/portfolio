import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	Box,
	CardMedia,
	Card,
	CardContent,
	Stack,
	CardActionArea,
} from "@mui/material";
import { Tab, Experience, Document } from "./types";

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

const documents: Document[] = [
	{
		label: "The Impact of Trauma on Refugee and Immigrant Students",
		description: "Paper written for my Master's Thesis",
		url: "https://docs.google.com/document/d/e/2PACX-1vQQtSfvZCg9tmFaNiIinOJeiYMj3VAb8OOHNBioJEkgP9Vhdzdnnl0-3lFFjW8gGbfda_t7KuYGkeqP/pub?embedded=true",
	},
	{
		label: "Curriculum Design",
		description: "Curriculum design for my Master's Thesis",
		url: "https://docs.google.com/document/d/e/2PACX-1vTJ4eaUNLldZfLnEYuHIT_1XWYgJTkzvqpLGjAIWXVZyF7r80OawdHmBLAnbzYQE9tmIGDIms67ONeX/pub?embedded=true",
	},
	{
		label: "Tier 2 Intervention Guide",
		description: "For Immigrant and Refugee Students",
		url: "https://drive.google.com/file/d/1M38edhsEstZYFV_T8N_Vp49bI6s2Wh9o/preview",
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
	{
		label: "Documents",
		content: (
			<Stack
				useFlexGap
				direction="row"
				spacing={5}
				sx={{ flexWrap: "wrap", flexGrow: 1 }}
			>
				{documents.map((item) => (
					<Card
						key={item.label}
						sx={{ width: { sm: "100%", md: "48%" }, flexGrow: 1 }}
					>
						<CardMedia
							component="iframe"
							title={item.label}
							src={item.url}
							width="100%"
							height="300px"
						/>
						<CardActionArea component="a" href={item.url} target="_blank">
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{item.label}
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									{item.description}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</Stack>
		),
	},
];

export default tabs;
