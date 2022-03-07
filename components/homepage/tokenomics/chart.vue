<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: [
        'Play to earn: 20%',
        'Company reserve: 27%',
        'Team: 15%',
        'Advisors: 2%',
        'Private sale: 1%',
        'IDO: 6%',
        'ICO: 6%',
        'Marketing & Social media: 12%',
        'Liquidity pool: 10%',
        'Airdrop: 1%',
      ],
      datasets: [
        {
          borderColor: '#B0C1EE',
          borderWidth: 0,
          hoverOffset: 5,
          data: [20, 27, 15, 2, 1, 6, 6, 12, 10, 1],
          backgroundColor: [
            'rgb(61, 136, 251)',
            'rgb(86, 55, 200)',
            'rgb(59, 216, 157)',
            'rgb(172, 223, 53)',
            'rgb(145, 27, 204)',
            'rgb(53, 132, 189)',
            'rgb(247, 241, 56)',
            'rgb(50, 60, 110)',
            'rgb(222, 218, 77)',
            'rgb(171, 62, 91)',
          ],
        }
      ]
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        usePointStyle:true,
        callbacks: {
          label: function(tooltipItem, data) {
            return data['labels'][tooltipItem['index']];
          },
          labelPointStyle: function(tooltipItem, data) {
            return {
              pointStyle: 'triangle',
              rotation: 0
            };
          },
        }
      },
      labelPointStyle: {
        pointStyle: 'triangle',
        rotation: 0
      },
      responsive: true,
      maintainAspectRatio: true,
      borderColor: '#B0C1EE',
      borderWidth: 5,
      color: '#ffffff',
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
