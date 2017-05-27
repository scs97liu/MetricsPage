jQuery(document).ready(function($) {
     $('.card').click(function(e) {
        e.preventDefault();
        if (this.id != "Donalad") {
            var xhttp = new XMLHttpRequest();
            // LOAD GET HERE FROM THIS.ID
            xhttp.open("GET", "testHTML.html", false);
            xhttp.send();
            document.getElementById("modal-02").innerHTML = xhttp.responseText;
            $(function () {
                var myChart = Highcharts.chart('container', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Metrics'
                    },
                    xAxis: {
                        categories: ['Tasks', 'Tasks Completed', 'Uncertainities', 'Urgency', 'Graph Complexity']
                    },
                    yAxis: {
                        title: {
                            text: 'Number'
                        }
                    },
                    series: [{
                        name: '$PatientName',
                        data: [6, 2, 4, 5, 4]
                        }]
                });
            });
        }

        $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'zoomIn',
                animatedOut:'bounceOutDown',
                color:'rgba(44, 80, 147, 0.5)',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                     $(".content").addClass("blur")
                },
                afterOpen: function() {
                    console.log("The animation is completed");

                },
                beforeClose: function() {
                    console.log("The animation was called");
                    $(".content").removeClass("blur")
                },
                afterClose: function() {
                    console.log("The animation is completed");

                }
            });

        $("#demo02").click();
    });

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
            }]
        });
    });

    $(document).keyup(function(e) {
    //if (e.keyCode === 13)     // enter
    //if (e.keyCode === 27) $('.cancel').click();
    if (e.keyCode === 27) {
        $('.close-modal-02').click();
    }  // esc
    });
});
