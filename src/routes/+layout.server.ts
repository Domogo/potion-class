import { WIZARD_WORLD_API } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import axios from 'axios';

type Ingredient = {
	id: string;
	name: string;
};

export const load = (async () => {
	const ingredientsResponse = await axios.get<Ingredient[]>(`${WIZARD_WORLD_API}/Ingredients`);
	const ingredients = ingredientsResponse.data;

	// --
	const potionsResponse = await axios.get(`${WIZARD_WORLD_API}/Elixirs`);

	const potions = potionsResponse.data.filter((potion) => potion.ingredients.length !== 0);

	const potionCount = potions.length;

	// a random potion
	const randPotionIndex = Math.floor(Math.random() * potionCount);

	const potion = potions[randPotionIndex];

	return {
		ingredients,
		potion
	};
}) satisfies LayoutServerLoad;
