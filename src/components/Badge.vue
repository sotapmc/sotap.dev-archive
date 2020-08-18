<template>
    <span class="badge" :style="'color:' + color + ';background-color:' + backgroundColor + ';'">
        <slot/>
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ["color", "backgroundColor"]
});
</script>

<style lang="less" scoped>
.badge {
    display: inline-block;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 15px;
    font-family: "Consolas", 'Courier New', Courier, monospace;
}
</style>