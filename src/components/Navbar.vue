<template>
	<div class="nav-bar">
		<div class="nav-logo">
			<img class="nav-logo-image" src="@/assets/logo.svg" draggable="false" width="32" />
			<span class="nav-logo-text">SoTap <span class="nav-logo-text-variant">Dev</span></span>
		</div>
		<div class="nav-content">
			<a target="_blank" href="//sotap.org">官网</a>
			<a target="_blank" href="//github.com/sotapmc">GitHub</a>
			<a target="_blank" href="//docs.sotap.dev">文档</a>
			<a target="_blank" href="//blog.sotap.org">博客</a>
			<a target="_blank" href="//wiki.sotap.org">Wiki</a>
			<router-link to="/">资源<Badge class="new-badge" color="white" backgroundColor="#e53935" fontSize="10px">new!</Badge></router-link>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	components: {
		Badge: () => import("./Badge.vue")
	}
});
</script>

<style lang="less" scoped>
.nav-bar {
	position: fixed;
	top: 0;
	width: 100%;
	padding: 16px;
	display: inline-flex;
	align-items: center;

	.nav-content {
		margin-left: 32px;
		font-size: 18px;

		a {
			position: relative;
			text-decoration: none;
			color: white;
			transition: all 0.2s ease;
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 0.8rem;
			padding-bottom: 1rem;

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
		cursor: default;
	}
}

.new-badge {
	position: absolute;
	top: 8px;
	right: -8px;
}
</style>
