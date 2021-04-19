<template>
	<div>
		<div>
			<h1 style="text-align : center">
				<select
					class="options"
					name="year"
					id=""
					v-model="selectYear"
					@change="changeYear"
				>
					<option value="2020">2020</option>
					<option value="2021">2021</option> </select
				>년

				<select class="options" name="month" v-model="selectMonth">
					<template v-if="this.selectYear == '2021'">
						<option
							v-for="data in month2021"
							:key="data.id"
							:value="data.value"
						>
							{{ data.text }}
						</option>
					</template>
					<template v-else>
						<option
							v-for="data in month2020"
							:key="data.id"
							:value="data.value"
						>
							{{ data.text }}
						</option>
					</template>
				</select>
				월 서비스 이용현황
			</h1>
		</div>
		<div class="btn-info">
			<button class="excelBtn" @click="excelWrite">엑셀로 출력</button>
		</div>
		<!-- {{ this.$store.state.chartDate }} <br />
		{{ this.$store.state.visitCount }} <br />
		{{ this.$store.state.visitCarCount }} -->

		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>

				<h2>고객 정보</h2>
			</div>

			<!--title -->

			<div>
				<table>
					<tr>
						<td rowspan="2" class="td-standard">고객사</td>
						<td>고객사명</td>
						<td>라이선스</td>
						<td>서비스 형태</td>
						<td>위치</td>
						<td>사용자수</td>
					</tr>
					<tr>
						<td></td>
						<td>MAIN</td>
						<td>클라우드형</td>
						<td></td>
						<td>{{ this.$store.state.userCount }}</td>
					</tr>
				</table>
			</div>
			<!-- table -->
		</div>

		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>
				<div>
					<h2>일별 방문현황</h2>
				</div>
			</div>

			<nlobby-chart
				:accessValue="this.$store.state.visitCount"
				:accessDate="this.$store.state.chartDate"
				:accessCarValue="this.$store.state.visitCarCount"
			></nlobby-chart>
		</div>

		<!-- titleBox !-->
		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>
				<div>
					<h2>신청-방문현황</h2>
				</div>
			</div>
			<div>
				<table>
					<tr>
						<td class="td-standard">구분</td>
						<td colspan="3">인원</td>
						<td colspan="3">차량</td>
					</tr>
					<tr>
						<td class="td-standard" rowspan="2">신청 현황</td>
						<td>방문객</td>
						<td>임직원</td>
						<td>합계</td>
						<td>방문객</td>
						<td>임직원</td>
						<td>합계</td>
					</tr>
					<tr>
						<td>{{ numberWithCommas(this.$store.state.requestRegist) }}</td>
						<td>{{ numberWithCommas(this.$store.state.requestReserve) }}</td>
						<td>
							{{
								numberWithCommas(
									this.$store.state.requestRegist +
										this.$store.state.requestReserve,
								)
							}}
						</td>
						<td>{{ numberWithCommas(this.$store.state.requestRegistCar) }}</td>
						<td>{{ numberWithCommas(this.$store.state.requestReserveCar) }}</td>
						<td>
							{{
								numberWithCommas(
									this.$store.state.requestRegistCar +
										this.$store.state.requestReserveCar,
								)
							}}
						</td>
					</tr>
					<tr>
						<td class="td-standard" rowspan="2">방문현황</td>
						<td>방문</td>
						<td>미방문</td>
						<td>합계</td>
						<td>방문</td>
						<td>미방문</td>
						<td>합계</td>
					</tr>
					<tr>
						<td>{{ numberWithCommas(this.$store.state.accessVisit) }}</td>
						<td>{{ numberWithCommas(this.$store.state.accessVisitNot) }}</td>
						<td>
							{{
								numberWithCommas(
									this.$store.state.accessVisit +
										this.$store.state.accessVisitNot,
								)
							}}
						</td>
						<td>{{ numberWithCommas(this.$store.state.accessVisitCar) }}</td>
						<td>{{ numberWithCommas(this.$store.state.accessVisitNotCar) }}</td>
						<td>
							{{
								numberWithCommas(
									this.$store.state.accessVisitCar +
										this.$store.state.accessVisitNotCar,
								)
							}}
						</td>
					</tr>
				</table>
			</div>
		</div>
		<!-- titleBox !-->
		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>
				<div>
					<h2>방문현황 분석</h2>
				</div>
			</div>
			<div>
				<table>
					<tr>
						<td class="td-standard" rowspan="2">구분</td>
						<td colspan="2">체류시간 분석</td>
						<td colspan="2">출입 분석</td>
						<td class="td-standard">구분</td>
						<td>건수</td>
					</tr>
					<tr>
						<td>최대</td>
						<td>평균</td>
						<td>최대</td>
						<td>평균</td>
						<td class="td-standard">알림톡</td>
						<td>{{ numberWithCommas(this.$store.state.noticeCount) }}</td>
					</tr>
					<tr>
						<td class="td-standard">인원</td>
						<td>{{ this.$store.state.accessVisitMaxTime }}</td>
						<td>{{ this.$store.state.accessVisitAvgTime }}</td>
						<td>{{ this.$store.state.entranceMax }}</td>
						<td>{{ this.$store.state.entranceAvg }}</td>
						<td class="td-standard">SMS</td>
						<td>{{ numberWithCommas(this.$store.state.SmsCount) }}</td>
					</tr>
					<tr>
						<td class="td-standard">차량</td>
						<td>
							{{ numberWithCommas(this.$store.state.accessVisitCarMaxTime) }}
						</td>
						<td>{{ this.$store.state.accessVisitCarAvgTime }}</td>
						<td>{{ numberWithCommas(this.$store.state.entranceCarMax) }}</td>
						<td>{{ this.$store.state.entranceCarAvg }}</td>
						<td class="td-standard">합계</td>
						<td>
							{{
								numberWithCommas(
									this.$store.state.SmsCount + this.$store.state.noticeCount,
								)
							}}
						</td>
					</tr>
				</table>
			</div>
		</div>

		<!-- titleBox !-->
		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>
				<div>
					<h2>서비스 가용성</h2>
				</div>
			</div>
			<div>
				<table>
					<tr>
						<td class="td-standard" rowspan="2">장애</td>
						<td>접수시간</td>
						<td>복구시간</td>
						<td>소요시간</td>
						<td>가용성</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>100.00%</td>
					</tr>
				</table>
			</div>
		</div>
		<!-- titleBox !-->
		<div class="titleBox">
			<div class="title">
				<div class="square">
					<i class="fas fa-square"></i>
				</div>
				<div>
					<h2>서비스 기타</h2>
				</div>
			</div>
			<div>
				<table>
					<tr>
						<td class="td-standard">일자</td>
						<td>내용</td>
					</tr>
					<tr>
						<!-- <td class="td-standard">d</td> -->
						<!-- <td>d</td> -->
					</tr>
					<tr></tr>
				</table>
			</div>
		</div>

		<!-- titleBox !-->
	</div>
</template>

<script>
import NlobbyChart from '../components/NlobbyChart.vue';
import { getExcelData } from '../api/index';
export default {
	components: {
		NlobbyChart,
	},
	data() {
		return {
			selectYear: '2021',
			selectMonth: '2021-02-01',
			month2021: [
				{ value: '2021-01-01', text: '01' },
				{ value: '2021-02-01', text: '02' },
			],
			month2020: [
				{ value: '2020-01-01', text: '01' },
				{ value: '2020-02-01', text: '02' },
				{ value: '2020-03-01', text: '03' },
				{ value: '2020-04-01', text: '04' },
				{ value: '2020-05-01', text: '05' },
				{ value: '2020-06-01', text: '06' },
				{ value: '2020-07-01', text: '07' },
				{ value: '2020-08-01', text: '08' },
				{ value: '2020-09-01', text: '09' },
				{ value: '2020-10-01', text: '10' },
				{ value: '2020-11-01', text: '11' },
				{ value: '2020-12-01', text: '12' },
			],
		};
	},
	methods: {
		numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},

		changeYear() {
			if (this.selectYear == '2020') {
				this.selectMonth = '2020-01-01';
			} else {
				this.selectMonth = '2021-02-01';
			}
		},
		async excelWrite() {
			try {
				const response = await getExcelData(this.selectMonth);
				console.log(this.selectMonth);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.$store.dispatch('fetch_userCount');
	},

	watch: {
		selectMonth: {
			handler: function() {
				// 방문객 신청현황
				this.$store.dispatch('fetch_requestRegist', this.selectMonth);
				// 임직원 신청현황
				this.$store.dispatch('fetch_requestReserve', this.selectMonth);
				//방문객 차량 신청현황
				this.$store.dispatch('fetch_requestRegistCar', this.selectMonth);
				//임직원 차량 신청현황
				this.$store.dispatch('fetch_requestReserveCar', this.selectMonth);
				//방문 인원 현황
				this.$store.dispatch('fetch_accessVisit', this.selectMonth);
				//미방문 인원 현황
				this.$store.dispatch('fetch_accessVisitNot', this.selectMonth);
				//방문 차량 현황
				this.$store.dispatch('fetch_accessVisitCar', this.selectMonth);
				//미방문 차량 현황
				this.$store.dispatch('fetch_accessVisitNotCar', this.selectMonth);
				//방문 인원 최대 시간
				this.$store.dispatch('fetch_accessVisitMaxTime', this.selectMonth);
				//방문 인원 평균 시간
				this.$store.dispatch('fetch_accessVisitAvgTime', this.selectMonth);
				//방문 차량 최대 시간
				this.$store.dispatch('fetch_accessVisitCarMaxTime', this.selectMonth);
				//방문 차량 평균 시간
				this.$store.dispatch('fetch_accessVisitCarAvgTime', this.selectMonth);
				//출입 인원 최대
				this.$store.dispatch('fetch_entranceMax', this.selectMonth);
				//출입 차량 최대
				this.$store.dispatch('fetch_entranceCarMax', this.selectMonth);
				//출입 인원 평균
				this.$store.dispatch('fetch_entranceAvg', this.selectMonth);
				//출입 차량 평균
				this.$store.dispatch('fetch_entranceCarAvg', this.selectMonth);
				//알림 톡 건수
				this.$store.dispatch('fetch_noticeCount', this.selectMonth);
				//sms 건수
				this.$store.dispatch('fetch_SmsCount', this.selectMonth);
				//차트 날짜 데이터
				this.$store.dispatch('fetch_chartDate', this.selectMonth);
				// 일별 인원 수
				this.$store.dispatch('fetch_visitCount', this.selectMonth);
				// 일별 차량 방문 수
				this.$store.dispatch('fetch_visitCarCount', this.selectMonth);
				this.excelWrite();
			},

			immediate: true,
		},
	},
};
</script>

<style scoped>
.options {
	font-size: 1.6rem;
}
.title {
	display: flex;
	margin-left: 10px;
}
.square {
	display: grid;
	align-items: center;
	margin-right: 3px;
}
table {
	border: 2px solid rgb(170, 164, 164);
	text-align: center;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	border-collapse: collapse;
	font-size: 1.4rem;
}
td {
	border: 2px solid rgb(170, 164, 164);
}

.td-standard {
	background-color: rgb(178, 197, 139);
}
.titleBox {
	width: 100%;
}
.btn-info {
	display: flex;
	justify-content: flex-end;
}
.excelBtn {
	background-color: teal;
	color: white;
	border: 1px solid black;
	border-radius: 6%;
	text-align: end;
	font-size: 25px;
	margin: 5px;
	padding: 5px;
	cursor: pointer;
}
</style>
