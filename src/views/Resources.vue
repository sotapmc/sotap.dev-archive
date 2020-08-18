<template>
	<div class="resources">
		<h1>资源</h1>
		<small>单击即可下载</small>
		<p>以下列出的所有资源在使用时必须注明来源为 SoTap，如有条件请指向本站链接。{{ isPCView() ? "" : "请使用电脑访问以查看文件完整信息。"}}</p>
		<p>特别提示：如果您因为某些原因需要使用 SoTap Logo 源文件进行二次创作，请联系我们取得授权。联系方式可查看<router-link to="/contact">这里</router-link>。</p>
		<div v-for="(k, i) in Object.keys(resources)" :key="i">
			<h3>{{ namedict[k] }}</h3>
			<Resource v-for="(x, y) in resources[k]" :val="x" :key="y" :type="k" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { isPCView } from "@/functions";

export default Vue.extend({
	data() {
		return {
			resources: {
				images: [
					{
						name: "带字 Logo 1",
						path: "resources/art/logo-1050x350-transparent.png",
						resolution: "1050*350",
						transparent: true
					},
					{
						name: "带字 Logo 2",
						path: "resources/art/logo-3840x2160-transparent.png",
						resolution: "3840*2160",
						transparent: true
					},
					{
						name: "带字 Logo 3",
						path: "resources/art/logo-3840x2160.png",
						resolution: "3840*2160"
					},
					{
						name: "夏雨鸳昂封面 1",
						path: "resources/banners/xyya1.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 2",
						path: "resources/banners/xyya2.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 3",
						path: "resources/banners/xyya3.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 4",
						path: "resources/banners/xyya4.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 5",
						path: "resources/banners/xyya5.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 6",
						path: "resources/banners/xyya6.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 7",
						path: "resources/banners/xyya7.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 5v",
						path: "resources/banners/xyya5-v.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 6v",
						path: "resources/banners/xyya6-v.png",
						resolution: "5334*3000"
					},
					{
						name: "夏雨鸳昂封面 7v",
						path: "resources/banners/xyya7-v.png",
						resolution: "5334*3000"
					}
				],
				docs: [
					{
						name: "关于近期 SoTap 风气的梳理和说明（楼兰事件）",
						path: "documents/关于近期SoTap风气的梳理和说明.docx",
						cjk: 5497,
						lastUpdate: "2020-06-13"
					},
					{
						name: "关于近日 SoTap x EBS 联动纠纷事件始末及其后续的说明",
						path: "documents/关于近日SoTapxEBS联动纠纷事件始末及其后续的说明.docx",
						cjk: 7780,
						lastUpdate: "2020-08-16"
					},
					 {
						 name: "7.24 特大服务器纠纷事件消息记录整理",
						 path: "documents/7.24特大服务器撕逼事件消息记录整理.txt",
						 cjk: 0,
						 lastUpdate: "2019-07-24"
					 }
				],
				server: [
					{
						name: "服务器插件列表",
						path: "server/pluginlist.txt",
						lastUpdate: "2020-08-18"
					}
				],
				project: [
					{
						name: "材料翻译 yml",
						path: "projects/materialtranslation/translations.yml",
						lastUpdate: "2020-08-18"
					},
					{
						name: "材料翻译 json",
						path: "projects/materialtranslation/translations.json",
						lastUpdate: "2020-08-18"
					}
				]
			} as Resources,
			namedict: {
				images: "图片",
				docs: "文档归档",
				server: "服务器相关",
				project: "项目文件"
			}
		};
	},
	components: {
		Resource: () => import("@/components/Resource.vue")
	},
	methods: {
		isPCView
	},
	mounted() {
		let that = this;
		let origin = window.document.body.clientWidth;
		window.onresize = () => {
			let current = window.document.body.clientWidth;
			if (origin < 1024) {
				if (current >= 1024) {
					this.$router.go(0);
				}
			} else {
				if (current < 1024) {
					this.$router.go(0);
				}
			}
		}
	}
});
</script>

<style lang="less" scoped>
.resources {
	text-align: left;
	padding-top: 48px;
	padding-bottom: 32px;
}
</style>
