export type Ingredient = {
	id: string;
	name: string;
};

export type Potion = {
	id: string;
	name: string;
	effect: string;
	sideEffects: string;
	characteristics: string;
	difficulty: string;
	ingredients: Ingredient[];
};
