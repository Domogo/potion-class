<script>
	export let data;

	const ingredients = data.ingredients;
</script>

<div class="ingredients-wrapper">
	{#each ingredients as ingredient}
		<div class="ingredient">{ingredient.name}</div>
	{/each}
</div>

<style lang="postcss">
	/* .ingredient-page {
		padding: 20px;
		display: grid;
		grid-template-columns: 200px 200px 200px;
		gap: 20px;
	}

	.ingredient {
		padding: 20px;
		border: 1px solid black;
	} */
</style>
