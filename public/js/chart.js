var bar_ctx = document.getElementById('myChart').getContext('2d');

var gradient = bar_ctx.createLinearGradient(0, 0, 0, 160);
gradient.addColorStop(0, 'rgba(218, 55, 48, .7)');
gradient.addColorStop(1, 'rgba(47, 121, 197, .7)');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [{
            data: [12, 19, 3, 8, 14],
            backgroundColor: gradient
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                title: function () {}
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
        }
    }
});