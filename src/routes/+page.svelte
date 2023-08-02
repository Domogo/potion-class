<script lang="ts">
	export let data;
	let { potion, ingredients } = data;

	const filteredIngredients = ingredients.filter((arr) => !potion.ingredients.includes(arr));

	const randIndex = Math.floor(
		Math.random() * (filteredIngredients.length - potion.ingredients.length)
	);

	const fakeIngredients = filteredIngredients.slice(
		randIndex,
		randIndex + potion.ingredients.length
	);

	const guessingIngredients = [...potion.ingredients, ...fakeIngredients];
</script>

<div>
	<h1>Guess the ingredients for: {potion.name}</h1>
	<p>There are {potion.ingredients.length} ingredients in this potion.</p>

	<div class="ingredients-wrapper">
		{#each guessingIngredients as ingredient}
			<div class="ingredient">
				{ingredient.name}
			</div>
		{/each}
	</div>
</div>
