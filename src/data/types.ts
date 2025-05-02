interface Header {
	title?: string;
	subtitle?: string;
}

interface Tab {
	label: string;
	title?: string;
	subtitle?: string;
	description?: string;
	content?: React.ReactNode;
}

interface Experience {
	label: string;
	description?: string;
	location?: string;
	years?: string;
}

interface Education {
	label: string;
	subtitle?: string;
	location?: string;
	years?: string;
	description?: string;
}

interface Document {
	label: string;
	description?: string;
	url?: string;
}

export type { Header, Tab, Experience, Document, Education };
