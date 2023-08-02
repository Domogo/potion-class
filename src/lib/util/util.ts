import type { Ingredient, Potion } from './types';

export const getGuessingIngredients = (potion: Potion, ingredients: Ingredient[]) => {
	const filteredIngredients = ingredients.filter((arr) => !potion.ingredients.includes(arr));

	const randIndex = Math.floor(
		Math.random() * (filteredIngredients.length - potion.ingredients.length)
	);
	const fakeIngredients = filteredIngredients.slice(
		randIndex,
		randIndex + potion.ingredients.length
	);

	const guessingIngredients = [...potion.ingredients, ...fakeIngredients];

	return guessingIngredients;
};

export const getPotion = (potions: Potion[]) => {
	const potionCount = potions.length;
	const randPotionIndex = Math.floor(Math.random() * potionCount);
	return potions[randPotionIndex];
};
