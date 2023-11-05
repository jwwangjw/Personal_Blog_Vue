<template>
	<div class="nav-bar">
		<div class="nav-bar-title">Blog</div>
		<div class="nav-bar-tab">
			<div class="tab-item">技术笔记</div>
			<div class="tab-item">我的相册</div>
			<div class="tab-item">我的文档</div>
		</div>
		<el-input style="width: 200px" :suffix-icon="Search" />
	</div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
// TODO: 接入es，搜索文件
</script>

<style scoped lang="less">
.nav-bar {
	height: 60px;
	background-color: #fff;
	box-shadow: 1px #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 60px;
	padding-right: 100px;
}

.nav-bar-title {
	font-size: 16px;
	font-weight: bold;
}

.nav-bar-tab {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tab-item {
	user-select: none;
	cursor: pointer;
	margin-right: 50px;
	font-size: 14px;
	color: #666;
	font-weight: bold;
}
</style>