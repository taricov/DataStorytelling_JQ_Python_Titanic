const ctx = document.getElementById('myChart_1').getContext('2d');

// Chart.defaults.global.legend.display = false;
let delay = 88;
var delayed;
var gradient = ctx.createLinearGradient(500, 0, 0, 400);
gradient.addColorStop(0, "rgba(243,163,95, 1)");
gradient.addColorStop(1, "rgba(0,0,0,.7)");

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Less than $50', 'Between $50 to $90', 'More than $90'],
        datasets: [{
            // label: 'Percentage of Dead',
            data: [.7, .4, .15],
            backgroundColor: gradient
            // ['rgba(255, 255, 255, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)']
            ,
            // borderColor: 
            // ['rgba(255, 99, 132, 1)',
            //  'rgba(54, 162, 235, 1)',
            //  'rgba(255, 206, 86, 1)']
            //  ,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                color: 'rgb(243,163,95)',
                font: { size: "30px", weight: 'bold' },
                text: 'Death per Fare Brachets'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('de-DE', { style: 'percent' });
                    },
                    color: 'rgb(243,163,95, .5)',
                },
                grid: {
                    borderColor: 'rgb(243,163,95)'
                }
            },
            x: {
                grid: {
                    borderColor: 'rgb(243,163,95)'
                },
                ticks: {
                    color: 'rgb(243,163,95, .5)',
                },
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 100 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        //   annotation: {
        //     annotations: [{
        //       type: 'line',
        //       mode: 'horizontal',
        //       scaleID: 'y-axis-0',
        //       value: 5,
        //       borderColor: 'rgb(255, 255, 255)',
        //       borderWidth: 4,
        //       label: {
        //         enabled: true,
        //         content: 'Test label'
        //       }
        //     }]
        //   }
    }
});

// ========================

const ctx2 = document.getElementById('myChart_2').getContext('2d');

// Chart.defaults.global.legend.display = false;
// let delay = 88;
// var delayed;
// var gradient = ctx2.createLinearGradient(0,0,0,400);
// gradient.addColorStop(0, "rgba(243,163,95, 1)");
// gradient.addColorStop(1, "rgba(0,0,0,.3)");

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['1st Class', '2nd Class', '3rd Class'],
        datasets: [{
            // label: 'Percentage of Dead',
            data: [.63, .47, .24],
            backgroundColor: gradient
            // ['rgba(255, 255, 255, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)']
            ,
            // borderColor: 
            // ['rgba(255, 99, 132, 1)',
            //  'rgba(54, 162, 235, 1)',
            //  'rgba(255, 206, 86, 1)']
            //  ,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                color: 'rgb(243,163,95)',
                font: { size: "30px", weight: 'bold' },
                text: 'Survival Rate Per Class'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('de-DE', { style: 'percent' });
                    },
                    color: 'rgb(243,163,95, .5)',
                },
                grid: {
                    borderColor: 'rgb(243,163,95)'
                }
            },
            x: {
                grid: {
                    borderColor: 'rgb(243,163,95)'
                },
                ticks: {
                    color: 'rgb(243,163,95, .5)',
                },
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 1000 + context.datasetIndex * 1300;
                }
                return delay;
            },
        },
        //   annotation: {
        //     annotations: [{
        //       type: 'line',
        //       mode: 'horizontal',
        //       scaleID: 'y-axis-0',
        //       value: 5,
        //       borderColor: 'rgb(255, 255, 255)',
        //       borderWidth: 4,
        //       label: {
        //         enabled: true,
        //         content: 'Test label'
        //       }
        //     }]
        //   }
    }
});