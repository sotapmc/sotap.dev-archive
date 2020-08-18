import _vue from "vue";
import anime from "animejs";

const install = (Vue: typeof _vue) => {
	Vue.prototype.$anime = anime;
};

declare module "vue/types/vue" {
	interface Vue {
		$anime: typeof anime;
	}

	interface VueConstructor {
		$anime: typeof anime;
	}
}

export default install;
