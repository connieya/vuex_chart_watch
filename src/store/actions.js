import {
	requestRegist,
	requestReserve,
	requestRegistCar,
	requestReserveCar,
	accessVisit,
	accessVisitNot,
	accessVisitCar,
	accessVisitNotCar,
	accessVisitMaxTime,
	accessVisitAvgTime,
	accessVisitCarMaxTime,
	accessVisitCarAvgTime,
	noticeCount,
	smsCount,
	entranceMax,
	entranceCarMax,
	entranceAvg,
	entranceCarAvg,
	chartDate,
	userCount,
	visitCarCount,
	visitCount,
} from '@/api/index.js';

export default {
	// 방문객 신청현황
	async fetch_requestRegist({ commit }, selectedData) {
		const response = await requestRegist(selectedData);
		commit('set_requestRegist', response.data);
	},
	// 임직원 신청현황
	async fetch_requestReserve({ commit }, selectedData) {
		const response = await requestReserve(selectedData);
		commit('set_requestReserve', response.data);
	},
	// 방문객 차량 신청현황
	async fetch_requestRegistCar({ commit }, selectedData) {
		const response = await requestRegistCar(selectedData);
		commit('set_requestRegistCar', response.data);
	},
	// 임직원 차량 신청현황
	async fetch_requestReserveCar({ commit }, selectedData) {
		const response = await requestReserveCar(selectedData);
		commit('set_requestReserveCar', response.data);
	},
	//방문 인원 현황
	async fetch_accessVisit({ commit }, selectedData) {
		const response = await accessVisit(selectedData);
		commit('set_accessVisit', response.data);
	},
	//미방문 인원 현황
	async fetch_accessVisitNot({ commit }, selectedData) {
		const response = await accessVisitNot(selectedData);
		commit('set_accessVisitNot', response.data);
	},
	// 방문 차량 현황
	async fetch_accessVisitCar({ commit }, selectedData) {
		const response = await accessVisitCar(selectedData);
		commit('set_accessVisitCar', response.data);
	},
	// 미방문 차량 현황
	async fetch_accessVisitNotCar({ commit }, selectedData) {
		const response = await accessVisitNotCar(selectedData);
		commit('set_accessVisitNotCar', response.data);
	},
	// 방문 인원 최대 사간
	async fetch_accessVisitMaxTime({ commit }, selectedData) {
		const response = await accessVisitMaxTime(selectedData);

		commit('set_accessVisitMaxTime', response.data);
	},
	// 방문 인원 평균 시간
	async fetch_accessVisitAvgTime({ commit }, selectedData) {
		const response = await accessVisitAvgTime(selectedData);

		commit('set_accessVisitAvgTime', response.data);
	},
	// 방문 차량 최대 시간
	async fetch_accessVisitCarMaxTime({ commit }, selectedData) {
		const response = await accessVisitCarMaxTime(selectedData);

		commit('set_accessVisitCarMaxTime', response.data);
	},
	// 방문 차량 평균 시간
	async fetch_accessVisitCarAvgTime({ commit }, selectedData) {
		const response = await accessVisitCarAvgTime(selectedData);

		commit('set_accessVisitCarAvgTime', response.data);
	},
	//출입 인원 최대
	async fetch_entranceMax({ commit }, selectedData) {
		const response = await entranceMax(selectedData);

		commit('set_entranceMax', response.data);
	},
	//출입 차량 최대
	async fetch_entranceCarMax({ commit }, selectedData) {
		const response = await entranceCarMax(selectedData);

		commit('set_entranceCarMax', response.data);
	},
	//출입 인원 평균
	async fetch_entranceAvg({ commit }, selectedData) {
		const response = await entranceAvg(selectedData);

		commit('set_entranceAvg', response.data);
	},
	//출입 차량 평균
	async fetch_entranceCarAvg({ commit }, selectedData) {
		const response = await entranceCarAvg(selectedData);

		commit('set_entranceCarAvg', response.data);
	},

	//알림톡 건수
	async fetch_noticeCount({ commit }, selectedData) {
		const response = await noticeCount(selectedData);

		commit('set_noticeCount', response.data);
	},
	//SMS 건수
	async fetch_SmsCount({ commit }, selectedData) {
		const response = await smsCount(selectedData);

		commit('set_SmsCount', response.data);
	},
	//차트 날짜 데이터
	async fetch_chartDate({ commit }, selectedDate) {
		const response = await chartDate(selectedDate);
		commit('set_charDate', response.data);
	},
	//일변 인원 수
	async fetch_visitCount({ commit }, selectedDate) {
		const response = await visitCount(selectedDate);
		commit('set_visitCount', response.data);
	},
	//일별 차량 방문 수
	async fetch_visitCarCount({ commit }, selectedDate) {
		const response = await visitCarCount(selectedDate);
		commit('set_visitCarCount', response.data);
	},

	// 고객 사용자 수
	async fetch_userCount({ commit }) {
		const response = await userCount();
		commit('set_userCount', response.data);
	},
};
