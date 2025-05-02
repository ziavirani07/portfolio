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
	years?: string;
}

export type { Header, Tab, Experience };
