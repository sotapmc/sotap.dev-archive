<template>
    <span class="badge" :style="'color:' + color + ';background-color:' + backgroundColor + ';font-size:' + fontSize + ';'">
        <slot/>
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ["color", "backgroundColor", "fontSize"]
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
    font-family: "Consolas", 'Courier New', Courier, monospace;
}
</style>