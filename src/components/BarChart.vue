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
							backgroundColor: 'blue',
							data: this.accessValue,
						},
						{
							label: '차량',
							colors: 'green',
							backgroundColor: 'red',
							data: this.accessCarValue,
						},
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
