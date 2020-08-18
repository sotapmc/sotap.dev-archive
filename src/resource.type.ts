interface Resources {
    images: Array<Image>;
    docs: Array<Document>;
    server: Array<CommonFile>;
    project: Array<CommonFile>;
}

interface Image {
	name: string;
	path: string;
	resolution: string;
	transparent?: boolean;
}

interface Document {
    name: string;
    path: string;
    cjk: number;
    lastUpdate: string;
}

interface CommonFile {
    name: string;
    path: string;
    lastUpdate: string;
}