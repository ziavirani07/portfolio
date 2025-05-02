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
	ListItemIcon,
} from "@mui/material";
import { Tab, Experience, Document, Education } from "./types";
import CircleIcon from "@mui/icons-material/Circle";

const education: Education[] = [
	{
		label: "Harvard University",
		subtitle: "Master of Education in Human Development",
		location: "Cambridge, MA",
		years: "2024 2024",
		description:
			"GPA: 4.0\nConcentration in Arts & Learning\nAga Khan International Scholarship, Program Recipient, Aga Khan Foundation, 2024",
	},
	{
		label: "University of Texas at Austin",
		subtitle:
			"Bachelor of Science in Early Childhood - 6th Grade ESL Generalist",
		location: "Austin, Texas",
		years: "2020 - 2024",
		description:
			"GPA: 3.9\nCollege of Education Scholar 2022-2024\nTeachers of Tomorrow facilitator\nCollege of Education Honors Scholarship 2023 Recipient",
	},
];

const experiences: Experience[] = [
	{
		label:
			"Intern at the Ecological Approaches to Social-Emotional Learning (EASEL) Lab",
		description:
			"In this position, I conducted research on trauma-informed and SEL-based interventions for elementary-aged students. I also analyzed qualitative and quantitative data on the effectiveness of SEL programs in K-5 settings, and helped develop Harvard University's 'Brain Games' to implement in Boston Public Schools",
		location: "Harvard University",
		years: "2024",
	},
	{
		label: "Student Intern",
		description:
			"I developed and implemented lesson plans that met state standards and enhanced students' critical thinking and analytical skills. I assessed student learning through formative and summative assessments and adapted instruction to meet diverse academic and social-emotional needs. I created a positive and inclusive classroom environment using serve and return interactions to foster genuine student engagement. I differentiated instruction for English language learners and students with lEPs to ensure equitable access to learning.",
		location: "Hart Elementary - Austin Independent School District",
		years: "2022 - 2024",
	},
];

const skills = [
	"Classroom Management",
	"Technology Integration",
	"Active Listening",
	"Inclusive Teaching",
	"Flexibility and Adaptability",
	"Painting",
	"Reading",
	"Interior Design",
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
		subtitle: "Professional Summary & Skills",
		description:
			"I am a dedicated elementary teacher specializing in trauma-informed practices, social-emotional learning (SEL), and arts integration. I'm skilled in fostering inclusive, engaging classrooms through serve-and-return interactions, simple interactions, and differentiated instruction.",
		content: (
			<List>
				{skills.map((item, index) => (
					<Box key={item}>
						<ListItem disablePadding divider={index < skills.length - 1}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "0.5rem" }} color="secondary" />
							</ListItemIcon>
							<ListItemText primary={item} />
						</ListItem>
					</Box>
				))}
			</List>
		),
	},
	{
		label: "Education",
		content: (
			<List>
				{education.map((item, index) => (
					<Box key={item.label}>
						<ListItem divider={index < education.length - 1}>
							<ListItemText
								primary={item.label}
								secondary={
									<>
										<Typography variant="body2">
											<i>{item.subtitle}</i>
										</Typography>
										<Typography
											variant="body2"
											color="text.primary"
											sx={{ whiteSpace: "pre-line" }}
										>
											{item.description}
										</Typography>
									</>
								}
							/>
						</ListItem>
					</Box>
				))}
			</List>
		),
	},
	{
		label: "Experience",
		content: (
			<List>
				{experiences.map((item, index) => (
					<Box key={item.label}>
						<ListItem>
							<ListItemText
								primary={item.label}
								secondary={
									<>
										<Typography variant="body2">
											<i>{item.location}</i> ({item.years})
										</Typography>
										<Typography variant="body2">{item.description}</Typography>
									</>
								}
							/>
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
