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
} from "@mui/material";
import { Tab, Experience, LessonPlan } from "./types";

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

const lessonPlans: LessonPlan[] = [
	{
		label: "Lesson Plan 1",
		description: "Description of Lesson Plan 1",
		url: "https://docs.google.com/document/d/e/2PACX-1vQQtSfvZCg9tmFaNiIinOJeiYMj3VAb8OOHNBioJEkgP9Vhdzdnnl0-3lFFjW8gGbfda_t7KuYGkeqP/pub?embedded=true",
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
		label: "Lesson Plans",
		content: (
			<Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
				{lessonPlans.map((item) => (
					<Card key={item.label}>
						<CardMedia
							component="iframe"
							title={item.label}
							src={item.url}
							width="100%"
							height="300px"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{item.label}
							</Typography>
							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								{item.description}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		),
	},
];

export default tabs;
