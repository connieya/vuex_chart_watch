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
		// date: {
		// 	type: Array,
		// 	required: true,
		// },
	},
	methods: {
		rerenderBarChart() {
			this.renderChart(
				{
					labels: [
						'1',
						'2',
						'3 ',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
						'17',
						'18',
						'19',
						'20',
						'21',
						'22',
						'23',
						'24',
						'25',
						'26',
						'27',
						'28',
						'29',
						'30',
						'31',
					],
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
