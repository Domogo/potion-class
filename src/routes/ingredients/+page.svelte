<script>
	export let data;

	const ingredients = data.ingredients;
</script>

<div class="ingredients-wrapper">
	{#each ingredients as ingredient}
		<div class="ingredient">{ingredient.name}</div>
	{/each}
</div>
