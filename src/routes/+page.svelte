<script lang="ts">
	import Potion from '$lib/components/Potion.svelte';
	import { played, success } from '$lib/components/stores/store.js';

	export let data;
	let { potions, ingredients } = data;
	const potionCount = potions.length;

	const getPotion = () => {
		const randPotionIndex = Math.floor(Math.random() * potionCount);
		return potions[randPotionIndex];
	};

	const getGuessingIngredients = (potion: any, ingredients: any) => {
		// @ts-ignore
		const filteredIngredients = ingredients.filter((arr) => !potion.ingredients.includes(arr));

		const randIndex = Math.floor(
			Math.random() * (filteredIngredients.length - potion.ingredients.length)
		);

		const fakeIngredients = filteredIngredients.slice(
			randIndex,
			randIndex + potion.ingredients.length
		);
		let guessingIngredients = [...potion.ingredients, ...fakeIngredients];

		return guessingIngredients;
	};

	let potion = getPotion();

	let guessingIngredients = getGuessingIngredients(potion, ingredients);

	const reassignPotion = () => {
		potion = getPotion();
		guessingIngredients = getGuessingIngredients(potion, ingredients);
		$played = false;
		$success = false;
	};
</script>

<div>
	<Potion {potion} {guessingIngredients} />

	{#if $played}
		<p>{$success ? "Hmmm.. So you're not a complete idiot." : 'How disappointing.'}</p>
		<button class="secondary-button" on:click={reassignPotion}>Try again</button>
	{/if}
</div>

<style>
	.secondary-button {
		border: 1px solid black;
		padding: 16px;
		background-color: darkseagreen;
	}
</style>
