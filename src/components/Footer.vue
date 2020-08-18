<template>
	<footer>
		<p>Built with <span class="heart">❤</span> and <span class="vue">Vue.js</span></p>
	</footer>
</template>

<style lang="less" scoped>
@import (css) url("https://fonts.loli.net/css2?family=Dosis:wght@500&display=swap");
footer {
	display: block;
	position: fixed;
	bottom: 0;
	text-align: center;
	width: 100%;
	opacity: 0;
    transition: opacity 0.2s ease;
    color: white;

	&:hover {
		transition: opacity 0.2s ease;
		opacity: 1;
	}
}

.heart {
	transition: all 0.2s ease;
	cursor: default;
	display: inline-block;

	&:hover {
		color: #f44336;
	}
}

.vue {
	transition: all 0.2s ease;
	cursor: default;
	display: inline-block;
	font-family: "Dosis", sans-serif;
	font-weight: 500;

	&:hover {
		color: #42b983;
	}
}
</style>
