import axios from 'axios';

const config = {
	requestUrl: 'http://localhost:8000/request',
	accessUrl: 'http://localhost:8000/access',
	noticeUrl: 'http://localhost:8000/notice',
	smsUrl: 'http://localhost:8000/sms',
};
// 방문객 신청현황
function requestRegist(selectedData) {
	return axios.get(`${config.requestUrl}/regist/${selectedData}}`);
}
//임직원 신청현황
function requestReserve(selectedData) {
	return axios.get(`${config.requestUrl}/reserve/${selectedData}`);
}
//방문객 차량 신청현황
function requestRegistCar(selectedData) {
	return axios.get(`${config.requestUrl}/registCar/${selectedData}`);
}
//임직원 차량 신청현황
function requestReserveCar(selectedData) {
	return axios.get(`${config.requestUrl}/reserveCar/${selectedData}`);
}
//방문 인원현황
function accessVisit(selectedData) {
	return axios.get(`${config.accessUrl}/visit/${selectedData}`);
}
//미방문 인원현황
function accessVisitNot(selectedData) {
	return axios.get(`${config.accessUrl}/visitNot/${selectedData}`);
}
//방문 차량현황
function accessVisitCar(selectedData) {
	return axios.get(`${config.accessUrl}/visitCar/${selectedData}`);
}
//미방문 차량현황
function accessVisitNotCar(selectedData) {
	return axios.get(`${config.accessUrl}/visitNotCar/${selectedData}`);
}
//방문 인원 최대시간
function accessVisitMaxTime(selectedData) {
	return axios.get(`${config.accessUrl}/visitMaxTime/${selectedData}`);
}

//방문 인원 평균시간
function accessVisitAvgTime(selectedData) {
	return axios.get(`${config.accessUrl}/visitAvgTime/${selectedData}`);
}

//방문 차량 최대시간
function accessVisitCarMaxTime(selectedData) {
	return axios.get(`${config.accessUrl}/visitCarMaxTime/${selectedData}`);
}
//방문 차량 평균시간
function accessVisitCarAvgTime(selectedData) {
	return axios.get(`${config.accessUrl}/visitCarAvgTime/${selectedData}`);
}
//출입 인원 최대
function entranceMax(selectedData) {
	return axios.get(`${config.accessUrl}/entranceMax/${selectedData}`);
}
//출입 차량 최대
function entranceCarMax(selectedData) {
	return axios.get(`${config.accessUrl}/entranceCarMax/${selectedData}`);
}
//출입 인원 평균
function entranceAvg(selectedData) {
	return axios.get(`${config.accessUrl}/entranceAvg/${selectedData}`);
}
//출입 차량 평균
function entranceCarAvg(selectedData) {
	return axios.get(`${config.accessUrl}/entranceCarAvg/${selectedData}`);
}

// 알림톡 건수
function noticeCount(selectedData) {
	return axios.get(`${config.noticeUrl}/${selectedData}`);
}
// SMS 건수
function smsCount(selectedData) {
	return axios.get(`${config.smsUrl}/${selectedData}`);
}
// 일별 방문현황 인원
function accessList(selectedData) {
	return axios.get(`${config.accessUrl}/list/${selectedData}`);
}
// 일별 방문현황 차량
function accessCarList(selectedData) {
	return axios.get(`${config.accessUrl}/Carlist/${selectedData}`);
}

export {
	requestRegist,
	requestReserve,
	requestRegistCar,
	requestReserveCar,
	accessVisit,
	accessVisitCar,
	accessVisitNot,
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
	accessList,
	accessCarList,
};
