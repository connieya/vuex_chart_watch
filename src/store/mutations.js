export default {
	// 방문객 신청현황
	set_requestRegist(state, data) {
		state.requestRegist = data;
	},
	// 임직원  신청현황
	set_requestReserve(state, data) {
		state.requestReserve = data;
	},
	// 방문객 차량 신청현황
	set_requestRegistCar(state, data) {
		state.requestRegistCar = data;
	},
	//임직원 차량 신청현황
	set_requestReserveCar(state, data) {
		state.requestReserveCar = data;
	},
	//방문 인원 현황
	set_accessVisit(state, data) {
		state.accessVisit = data;
	},
	//미방문 인원 현황
	set_accessVisitNot(state, data) {
		state.accessVisitNot = data;
	},
	//방문 차량 현황
	set_accessVisitCar(state, data) {
		state.accessVisitCar = data;
	},
	//미방문 차량 현황
	set_accessVisitNotCar(state, data) {
		state.accessVisitNotCar = data;
	},
	//방문 인원 최대 시간
	set_accessVisitMaxTime(state, data) {
		state.accessVisitMaxTime = data;
	},
	//방문 인원 평균 시간
	set_accessVisitAvgTime(state, data) {
		state.accessVisitAvgTime = data;
	},
	//방문 차량 최대 시간
	set_accessVisitCarMaxTime(state, data) {
		state.accessVisitCarMaxTime = data;
	},

	//방문 차량 평균 시간
	set_accessVisitCarAvgTime(state, data) {
		state.accessVisitCarAvgTime = data;
	},
	// 출입 인원 최대
	set_entranceMax(state, data) {
		state.entranceMax = data;
	},

	// 출입 차량 최대
	set_entranceCarMax(state, data) {
		state.entranceCarMax = data;
	},
	// 출입 인원 평균
	set_entranceAvg(state, data) {
		state.entranceAvg = data;
	},
	// 출입 차량 평균
	set_entranceCarAvg(state, data) {
		state.entranceCarAvg = data;
	},

	//알림톡 건수
	set_noticeCount(state, data) {
		state.noticeCount = data;
	},
	//SMS 건수
	set_SmsCount(state, data) {
		state.SmsCount = data;
	},
	//차트 날짜 데이터
	set_charDate(state, data) {
		state.chartDate = data;
	},
	// 일별 인원 수
	set_visitCount(state, data) {
		state.visitCount = data;
	},
	// 일별 차량 방문 수
	set_visitCarCount(state, data) {
		state.visitCarCount = data;
	},

	//고객 사용자 수
	set_userCount(state, data) {
		state.userCount = data;
	},
};
