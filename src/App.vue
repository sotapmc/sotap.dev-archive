<template>
	<div class="app">
		<div class="center-container">
			<transition name="fade">
				<Navbar v-if="animateEnd" />
			</transition>
			<transition name="fade">
				<img v-if="showBackground" class="background" :src="background" />
			</transition>
			<div class="center-box">
				<transition name="fade">
					<h1 v-if="showFirst">{{ titleText }}</h1>
				</transition>
				<transition name="fade">
					<h1 v-if="showSecond" class="special">sotap.dev</h1>
				</transition>
				<transition name="fade">
					<h1 v-if="showThird">你可以在这里找到基础层面的帮助和信息</h1>
				</transition>
				<transition name="fade">
					<div class="inner-content" v-if="animateEnd">
						<transition name="fade" mode="out-in">
							<router-view />
						</transition>
					</div>
				</transition>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			titleText: "嘿，",
			showFirst: false,
			showSecond: false,
			showThird: false,
			showBackground: false,
			animateEnd: false,
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.02.02.jpg"
		};
	},
	async mounted() {
		if (this.$cookies.get("animation") == "no") {
			await this.sleep(200);
			this.showBackground = true;
			this.animateEnd = true;
		} else {
			this.showFirst = true;
			await this.sleep(900);
			this.showFirst = false;
			this.titleText = "欢迎来到";
			await this.sleep(900);
			this.showFirst = true;
			await this.sleep(1000);
			this.showFirst = false;
			await this.sleep(500);
			this.showSecond = true;
			await this.sleep(1500);
			this.showThird = true;
			await this.sleep(2000);
			this.showThird = false;
			if (this.$route.name != "Home") this.showSecond = false;
			this.showBackground = true;
			await this.sleep(500);
			this.animateEnd = true;
			this.$cookies.config("30d");
			this.$cookies.set("animation", "no");
		}
	},
	methods: {
		sleep(time: number) {
			return new Promise(r => {
				setTimeout(() => {
					r(null);
				}, time);
			});
		}
	},
	components: {
		Footer: () => import("@/components/Footer.vue"),
		Navbar: () => import("@/components/Navbar.vue")
	},
	watch: {
		async $route(v) {
			this.showBackground = false;
			await this.sleep(100);
			this.background = v.meta.background ?? this.background;
			await this.sleep(100);
			this.showBackground = true;
		}
	}
});
</script>

<style lang="less" scoped>
.center-container,
.app {
	height: 100%;
	position: relative;
}

.center-container {
	display: flex;
	align-items: center;
	transition: all 0.2s ease;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
}

.background {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	object-fit: cover;
}

.center-box {
	margin: auto;
	display: block;
	text-align: center;
	box-sizing: content-box;
	padding: 16px;

	> h1 {
		color: black;
	}
}

.special {
	background-color: @yellow;
	color: black;
	display: inline-block;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 2px;
	padding-bottom: 2px;
	transition: all 0.2s ease;
	cursor: pointer;
}

.special:hover {
	.common-button-hover;
}
</style>
