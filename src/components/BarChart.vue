<script>
import { Bar } from 'vue-chartjs';

export default {
	extends: Bar,
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
	// props: {
	// 	target: {
	// 		type: Array,
	// 		required: true,
	// 	},
	// 	product: {
	// 		type: Array,
	// 		required: true,
	// 	},
	// 	date: {
	// 		type: Array,
	// 		required: true,
	// 	},
	// },
	methods: {
		rerenderBarChart() {
			this.renderChart(
				{
					labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					datasets: [
						{
							label: '인원',
							colors: 'green',
							backgroundColor: 'blue',
							data: [139, 167, 165, 162, 132, 50, 62, 176],
						},
						{
							label: '차량',
							colors: 'green',
							backgroundColor: 'red',
							data: [106, 122, 133, 131, 104, 45, 26, 154],
						},
					],
				},
				this.options,
			);
		},
	},
	mounted() {
		this.rerenderBarChart();
	},
};
</script>
