<template>
	<div class="nav-bar">
		<div class="nav-logo" @click="$router.push({name: 'Home'})">
			<img class="nav-logo-image" src="@/assets/logo.svg" draggable="false" width="32" />
			<span class="nav-logo-text">SoTap <span class="nav-logo-text-variant">Dev</span></span>
		</div>
		<div v-if="showContent" ref="content" class="nav-content">
			<a target="_blank" href="//sotap.org">官网</a>
			<a target="_blank" href="//github.com/sotapmc">GitHub</a>
			<a target="_blank" href="//docs.sotap.dev">文档</a>
			<router-link to="/resources">资源<Badge class="new-badge" color="white" backgroundColor="#e53935" fontSize="10px">new!</Badge></router-link>
			<router-link to="/about">关于</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { isPCView } from "@/functions";
export default Vue.extend({
	data() {
		return {
			showContent: false,
			clientWidth: 0
		};
	},
	components: {
		Badge: () => import("./Badge.vue")
	},
	mounted() {
		if (isPCView()) {
			this.showContent = true;
		}
		document.addEventListener("click", e => {
			if (isPCView()) {
				return false;
			}
			let el = e.srcElement as HTMLElement;
			let classList = el.classList;
			if (classList.contains("nav-logo-text") || classList.contains("nav-bar") || classList.contains("nav-logo-image")) {
				this.showContent = !this.showContent;
			} else {
				this.showContent = false;
			}
		});
		let that = this;
		window.onresize = () => {
			if (isPCView()) {
				this.showContent = true;
			} else {
				this.showContent = false;
			}
		};
	}
});
</script>

<style lang="less" scoped>
.nav-bar {
	position: fixed;
	top: 0;
	width: 100%;
	padding: 16px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 999;

	@media screen and (min-width: 1024px) {
		display: inline-flex;
		align-items: center;
	}

	.nav-content {
		margin-left: 32px;
		font-size: 18px;

		@media screen and (max-width: 1024px) {
			display: grid;
			margin-left: -16px;
		}

		a {
			position: relative;
			text-decoration: none;
			color: white;
			transition: all 0.2s ease;
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 0.8rem;
			padding-bottom: 1rem;

			@media screen and (min-width: 1024px) {
				&:hover {
					&::after {
						opacity: 1;
					}
				}

				&::after {
					position: absolute;
					bottom: 18px;
					left: 0;
					right: 0;
					width: 60%;
					content: "";
					height: 6px;
					background: @yellow;
					margin: 0 auto;
					z-index: -1;
					opacity: 0;
					transition: opacity 0.2s ease;
				}
			}
		}
	}

	.nav-logo {
		.nav-logo-text {
			font-weight: 600;
			font-size: 28px;

			.nav-logo-text-variant {
				font-weight: normal;
			}
		}

		.nav-logo-image {
			margin-right: 8px;
		}

		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}
}

.new-badge {
	@media screen and (min-width: 1024px) {
		position: absolute;
		top: 8px;
		right: -8px;
	}
}
</style>
