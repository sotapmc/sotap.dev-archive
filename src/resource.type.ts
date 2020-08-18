interface Resources {
    images: Array<ImageFile>;
    docs: Array<DocumentFile>;
    server: Array<CommonFile>;
    project: Array<CommonFile>;
}

interface ImageFile extends CommonFile {
	resolution: string;
    transparent?: boolean;
}

interface DocumentFile extends CommonFile {
    cjk: number;
    lastUpdate: string;
}

interface CommonFile {
    name: string;
    path: string;
    lastUpdate?: string;
    format: string;
}