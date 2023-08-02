import { WIZARD_WORLD_API } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import axios from 'axios';

type Ingredient = {
	id: string;
	name: string;
};

export const load = (async () => {
	const response = await axios.get<Ingredient[]>(`${WIZARD_WORLD_API}/Ingredients`);
	const ingredients = response.data;

	return {
		ingredients
	};
}) satisfies LayoutServerLoad;
