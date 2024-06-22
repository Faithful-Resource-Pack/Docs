export interface DocMeta {
	category?: string;
	date: string;
	archived?: boolean;
	deprecated?: boolean;
}

export interface DocFrontmatter extends DocMeta {
	title: string;
}

// at this point all optional fields are filled
export interface DocFile extends Required<DocMeta> {
	text: string;
	link: string;
}

export interface DocCategory {
	text: string;
	collapsed: boolean;
	items: DocFile[];
}
