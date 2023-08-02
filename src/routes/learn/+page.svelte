<script>
	export let data;
	let potion = data.potion;
</script>

<div>
	<h1>Learn a new potion!</h1>

	<div>
		<p>{potion.name}</p>
		<p>Difficulty: {potion.difficulty}</p>
		<p>Effect: {potion.effect}</p>

		<div class="ingredient-box">
			{#each potion.ingredients as ingredient}
				<div>{ingredient.name}</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.ingredient-box {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
		border: 1px solid black;
	}
</style>
