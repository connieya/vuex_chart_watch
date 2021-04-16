import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		requestRegist: '',
		requestReserve: '',
		requestRegistCar: '',
		requestReserveCar: '',
		accessVisit: '',
		accessVisitNot: '',
		accessVisitCar: '',
		accessVisitNotCar: '',
		accessVisitMaxTime: '',
		accessVisitAvgTime: '',
		accessVisitCarMaxTime: '',
		accessVisitCarAvgTime: '',
		entranceMax: '',
		entranceCarMax: '',
		noticeCount: '',
		SmsCount: '',
		entranceAvg: '',
		entranceCarAvg: '',
		userCount: '',
		chartDate: [],
		visitCount: [],
		visitCarCount: [],
	},
	mutations: mutations,
	actions: actions,
	modules: {},
});
