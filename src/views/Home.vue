<template>
	<div class="home">
		<div class="hero-text">
		<span class="hero-wrapper">
			<h1 class="hero">Build Our World Together.</h1>
		</span>
		<p>
			一起造<ruby>轮<rt>lún</rt>子<rt>zi</rt></ruby
			>让世界变得更好吧
		</p>
		</div>
		<!--<p class="links">
			<a target="_blank" href="//github.com/sotapmc/sotapmc.github.io/issues">为该页面提建议</a>
			<router-link to="/about">关于 SoTap Dev</router-link>
			<a target="_blank" href="https://i.loli.net/2020/08/18/mUuXRFbSK7wlZg6.png">下载背景图片</a>
		</p>-->
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

.links {
	font-size: 16px;
	letter-spacing: 0;

	@media screen and (max-width: 1024px){
		display: none;
	}

	a {
		display: inline-block;
		border: 1px solid white;
		border-radius: 4px;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 4px;
		padding-bottom: 4px;
		color: white;
		text-decoration: none;
		margin-left: 16px;
		margin-right: 16px;
		transition: all .2s ease;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}

		&:hover {
			background-color: @yellow;
			border-color: @yellow;
			color: black;
			transform: translateY(-15%);
		}
	}
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
