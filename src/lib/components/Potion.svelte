<script lang="ts">
	import { played, success } from './stores/store';

	export let potion: any;
	export let guessingIngredients: any;

	let guessedIngredients: string[] = [];

	const guessIngredient = (id: string) => {
		guessedIngredients = [...guessedIngredients, id];
	};

	const checkAnswer = () => {
		// @ts-ignore
		const correctIngredients = potion.ingredients.map((ingredient) => ingredient.id);
		// @ts-ignore
		$success = correctIngredients.every((el) => guessedIngredients.includes(el));
		$played = true;
	};
</script>

<div>
	<h1>Guess the ingredients for: {potion.name}</h1>
	<p>There are {potion.ingredients.length} ingredients in this potion.</p>

	<div class="ingredients-wrapper">
		{#each guessingIngredients as ingredient}
			<button
				class="ingredient"
				class:selected={guessedIngredients.includes(ingredient.id)}
				on:click={() => guessIngredient(ingredient.id)}
			>
				{ingredient.name}
			</button>
		{/each}

		<button class="submit-button" on:click={checkAnswer}>Check your answer</button>
	</div>
</div>

<style>
	.submit-button {
		border: 1px solid black;
		padding: 16px;
		background-color: #437c90;
	}

	.selected {
		background-color: burlywood;
	}
</style>
