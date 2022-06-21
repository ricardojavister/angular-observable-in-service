export interface Record {
	name: string;
	description: string;
	image: string;
}

export interface Metadata {
	id: string;
	private: boolean;
	createdAt: string;
}

export interface RootObject {
	record: Record[];
	metadata: Metadata;
}