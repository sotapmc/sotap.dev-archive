<template>
	<div class="home">
		<span class="hero-wrapper">
			<h1 class="hero">Build Our World Together.</h1>
		</span>
		<p>
			一起造<ruby>轮<rt>lún</rt>子<rt>zi</rt></ruby
			>让世界变得更好吧
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	mounted() {
		this.$anime.timeline({ loop: false }).add({
			targets: ".hero",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		});
	}
});
</script>

<style lang="less" scoped>
.hero-wrapper {
	position: relative;
	display: inline-block;
	overflow: hidden;

	.hero {
		transform-origin: 0 100%;
		display: inline-block;
	}
}

p {
	font-size: 18px;
	letter-spacing: 4px;

	ruby {
		font-weight: 600;

		cursor: default;

		&:hover {
			animation: wink 0.3s ease;
		}
	}
}

h1 {
	@media screen and (min-width: 1024px) {
		font-size: 72px;
	}

	@media screen and (max-width: 1024px) {
		font-size: 56px;
	}
	margin-top: 16px;
	margin-bottom: 16px;
}

@keyframes wink {
	from {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
	to {
		opacity: 1;
	}
}

@-webkit-keyframes wink {
	from {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
	to {
		opacity: 1;
	}
}
</style>
