<script>
import { Line } from 'vue-chartjs';

export default {
	extends: Line,
	data() {
		return {
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
							gridLines: {
								display: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
				legend: {
					display: true,
				},
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	props: {
		accessValue: {
			type: Array,
			required: true,
		},
		accessCarValue: {
			type: Array,
			required: true,
		},
		accessDate: {
			type: Array,
			required: true,
		},
	},
	methods: {
		rerenderBarChart() {
			this.renderChart(
				{
					labels: this.accessDate,
					datasets: [
						{
							label: '인원',
							colors: 'green',
							borderWidth: 2,
							backgroundColor: 'white',
							data: this.accessValue,
							fill: false,
							pointBackgroundColor: 'black',
							borderColor: 'blue',
						},
						{
							label: '차량',
							colors: 'green',
							borderWidth: 2,
							backgroundColor: 'white',
							data: this.accessCarValue,
							fill: false,
							pointBackgroundColor: 'red',
							borderColor: 'red',
						},
					],
				},
				this.options,
			);
		},
	},
	watch: {
		// accessValue: {
		// 	handler: 'rerenderBarChart',
		// },
		// accessDate: {
		// 	handler: 'rerenderBarChart',
		// },
		// accessCarValue: {
		// 	handler: 'rerenderBarChart',
		// },
		accessValue() {
			this.rerenderBarChart();
		},
		accessDate() {
			this.rerenderBarChart();
		},
		accessCarValue() {
			this.rerenderBarChart();
		},
	},
};
</script>
