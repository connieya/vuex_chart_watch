<template>
	<div>
		<main-page></main-page>
	</div>
</template>

<script>
import MainPage from './views/MainPage.vue';
export default {
	components: { MainPage },
};
</script>

<style>
html {
	padding: 25px;
	height: 100%;
	margin: 10px 45px;
}
body {
	padding: 15px;
}
</style>
