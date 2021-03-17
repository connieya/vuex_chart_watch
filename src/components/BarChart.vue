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
	props: {
		accessValue: {
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
							backgroundColor: 'blue',
							data: ['2', '0', '5'],
						},
						// {
						// 	label: '차량',
						// 	colors: 'green',
						// 	backgroundColor: 'red',
						// 	data: [106, 122, 133, 131, 104, 45, 26, 154],
						// },
					],
				},
				this.options,
			);
		},
	},
	watch: {
		accessValue: {
			handler: 'rerenderBarChart',
		},
		accessDate: {
			handler: 'rerenderBarChart',
		},
	},
};
</script>
