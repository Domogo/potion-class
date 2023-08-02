import { WIZARD_WORLD_API } from '$env/static/private';
import type { Ingredient, Potion } from '$lib/util/types';
import type { LayoutServerLoad } from './$types';
import axios from 'axios';

export const load = (async () => {
	const ingredientsResponse = await axios.get<Ingredient[]>(`${WIZARD_WORLD_API}/Ingredients`);
	const ingredients = ingredientsResponse.data;

	const potionsResponse = await axios.get<Potion[]>(`${WIZARD_WORLD_API}/Elixirs`);
	const potions = potionsResponse.data.filter((potion) => potion.ingredients.length !== 0);

	return {
		ingredients,
		potions
	};
}) satisfies LayoutServerLoad;
