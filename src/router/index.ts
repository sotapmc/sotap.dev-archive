import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.02.02.jpg"
		}
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
		meta: {
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.05.13.jpg"
		}
	},
	{
		path: "/resources",
		name: "Resources",
		component: () => import("@/views/Resources.vue"),
		meta: {
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.04.39.jpg"
		}
	},
	{
		path: "/agreement",
		name: "Agreement",
		component: () => import("@/views/Agreement.vue"),
		meta: {
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-08-03_21.27.27.jpg"
		}
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("@/views/Contact.vue"),
		meta: {
			background: "https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-08-03_21.28.01.jpg"
		}
	}
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});

export default router;
