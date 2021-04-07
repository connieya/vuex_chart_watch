<script>
import { Bar } from 'vue-chartjs';
// const { reactiveProp } = mixins;
export default {
	extends: Bar,
	// mixins: [reactiveProp],
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
	mounted() {
		this.renderBarChart();
	},
	methods: {
		renderBarChart: function() {
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
		accessCarValue: function() {
			this.$data._chart.destroy();
			this.renderBarChart();
		},
		accessValue: function() {
			this.$data._chart.destroy();
			this.renderBarChart();
		},
		accessDate: function() {
			this.$data._chart.destroy();
			this.renderBarChart();
		},
	},
};
</script>
