<template>
	<div class="home">
		<div class="center-container">
      <transition name="fade">
      <img v-if="showBackground" class="background" src="https://i.loli.net/2020/08/18/mUuXRFbSK7wlZg6.png"/>
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
          <h1>Build Our World Together.</h1>
          <p>共同建立全新的 SoTap 社区</p>
        </div>
        </transition>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			titleText: "嘿，",
			showFirst: true,
			showSecond: false,
      showThird: false,
      showBackground: false,
      animateEnd: false,
			background: ""
		};
	},
	async mounted() {
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
		this.showSecond = false;
		this.showThird = false;
		await this.sleep(500);
    this.showBackground = true;
    await this.sleep(500);
    this.animateEnd = true;
	},
	methods: {
		sleep(time: number) {
			return new Promise(r => {
				setTimeout(() => {
					r(null);
				}, time);
			});
		}
	}
});
</script>

<style lang="less" scoped>
.center-container,
.home {
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
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
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

.inner-content {
  color: white;
  h1 {
    font-size: 5rem;
    margin-top: 16px;
    margin-bottom: 16px;

    &+p {
      font-size: 18px;
    }
  }
}
</style>
