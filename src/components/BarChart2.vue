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
		accessCarValue: {
			type: Array,
			required: true,
		},
		accessCarDate: {
			type: Array,
			required: true,
		},
		// date: {
		// 	type: Array,
		// 	required: true,
		// },
	},
	methods: {
		rerenderBarChart() {
			this.renderChart(
				{
					labels: this.accessCarDate,
					datasets: [
						{
							label: '차량',
							colors: 'green',
							backgroundColor: 'red',
							data: this.accessCarValue,
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
		accessCarValue: {
			handler: 'rerenderBarChart',
		},
		accessCarDate: {
			handler: 'rerenderBarChart',
		},
	},
};
</script>
