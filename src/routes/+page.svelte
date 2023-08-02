<script lang="ts">
	import Potion from '$lib/components/Potion.svelte';
	import { played, success } from '$lib/stores/store';
	import { getGuessingIngredients, getPotion } from '$lib/util/util';

	export let data;
	let { potions, ingredients } = data;

	let potion = getPotion(potions);
	let guessingIngredients = getGuessingIngredients(potion, ingredients);

	const reassignPotion = () => {
		potion = getPotion(potions);
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
