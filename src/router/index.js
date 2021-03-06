import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		component: () => import('@/views/MainPage'),
	},
	{
		path: '*',
		component: () => import('@/views/NotFound'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
