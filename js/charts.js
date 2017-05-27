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
