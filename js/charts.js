$(function () {
    var myChart = Highcharts.chart('barChart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Aggregate Metric Analysis'
        },
        xAxis: {
            categories: ['Tasks', 'Tasks Completed', 'Unceratinities', 'Urgencies', 'Graph Complexity']
        },
        yAxis: {
            title: {
                text: 'Total number of cases'
            }
        },
        series: [{
            name: 'Thunder Bay Regional',
            data: [10, 7, 3, 10, 5]
        },
        {
            name: 'Some Other Hospital',
            data: [20, 1, 4, 6, 10]
        }]
    });
});

$(function () {
    var myChart = Highcharts.chart('barChart2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Aggregate Metric Analysis'
        },
        xAxis: {
            categories: ['Tasks', 'Tasks Completed', 'Unceratinities', 'Urgencies', 'Graph Complexity']
        },
        yAxis: {
            title: {
                text: 'Total number of cases'
            }
        },
        series: [{
            name: 'Thunder Bay Regional',
            data: [10, 7, 3, 10, 5]
        },
        {
            name: 'Some Other Hospital',
            data: [20, 1, 4, 6, 10]
        }]
    });
});

$(function(){
    var myChart = Highcharts.chart('pieChart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Percentage of cases by Disease'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Disease',
            colorByPoint: true,
            data: [{
                name: 'Pneumonia',
                y: 56.33,
                sliced: true
            }, {
                name: 'Ebola',
                y: 24.03,
                sliced: true
            }, {
                name: 'Cancer',
                y: 10.38,
                sliced: true
            }, {
                name: 'HIV',
                y: 4.77,
                sliced: true
            }, {
                name: 'Other',
                y: 0.2,
                sliced: true
            }]
        }]
    });
});
