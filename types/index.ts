export interface FakeStoreProducts {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity?: number;
	rating: {
		rate: number;
		count: number;
	};
}
