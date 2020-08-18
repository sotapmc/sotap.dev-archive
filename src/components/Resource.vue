<template>
	<div class="resource" @click="download()">
		<span class="material-icons">{{ getIcon() }}</span>
		<div class="resource-info">
			<div class="name">{{ name }}</div>
			<div class="description">
                <span v-if="attribute">{{ attribute }}</span>
				<span v-if="resolution">分辨率 {{ resolution }}</span>
				<span v-if="transparent">透明背景</span>
				<span v-if="cjk > 0">共计 {{ cjk }} 汉字</span>
				<span v-if="lastUpdate">最近更新 {{ lastUpdate }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: ["val", "type"],
	data() {
		return {
			https: true,
			name: "",
			path: "",
			resolution: "",
			transparent: false,
			cjk: 0,
            lastUpdate: "",
            attribute: ""
		};
	},
	methods: {
		download() {},
		getIcon() {
			switch (this.type) {
				case "images":
					return "image";
				case "docs":
					return "description";
				case "project":
					return "code";
				case "server":
					return "insert_drive_file";
				default:
					return "help";
			}
		}
	},
	mounted() {
		let value: ImageFile & DocumentFile = this.val;
		this.name = value.name;
		this.path = value.path;
		this.resolution = value.resolution;
		this.transparent = value.transparent ? true : false;
		this.cjk = value.cjk;
        this.lastUpdate = value.lastUpdate;
        this.attribute = this.path.substr(this.path.lastIndexOf(".") + 1).toUpperCase();
	}
});
</script>

<style lang="less" scoped>
.resource {
	display: flex;
	align-items: center;
	border-radius: 2px;
	border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
	margin-top: 8px;
	margin-bottom: 8px;
	padding: 8px;
	transition: all 0.2s ease;
    cursor: pointer;
    
	&:hover {
		border-color: white;
	}

	.material-icons {
		font-size: 64px;
	}

	.resource-info {
		margin-left: 16px;
		.name {
			font-weight: bold;
			font-size: 28px;
		}
    }
    
    .description {
        span {
            &::before {
                content: ", ";
            }
            

            &:first-child::before {
                content: none;
            }
        }
    }
}
</style>
