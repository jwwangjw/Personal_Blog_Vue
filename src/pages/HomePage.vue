<template>
	<div class="home-page" @click="setPageName">
		<div class="page-content">content</div>
	</div>
</template>

<script setup>
const setPageName = () => {
	console.log('setPageName')
}
</script>
<style scoped lang="less">
.home-page {
	display: flex;
	flex-direction: column;
	background-color: #f2f2f2;
	flex: 1;

	.page-tab {
		flex: 1;
	}

	.page-content {
		flex: 1;
	}
}
</style>