jQuery(document).ready(function($) {


    $('#CardView').click(function(e) {
        if (!$(this).hasClass('active')) {
            // Unhide card list, hide grid, make grid button active
            $('#navbarRightItem').removeClass('hide');
            $('#card-list').removeClass('hide');
            $('#grid-list').addClass('hide');
            $('#CardView').addClass('active');
            $('#ListView').removeClass('active');
        }
    });

    $('#ListView').click(function(e) {
        if (!$(this).hasClass('active')) {
            // Unhide card list, hide grid, make grid button active
            $('#navbarRightItem').addClass('hide');
            $('#grid-list').removeClass('hide');
            $('#card-list').addClass('hide');
            $('#CardView').removeClass('active');
            $('#ListView').addClass('active');
        }
    });

    var showModal = function(id) {
        console.log("PasSED ID:" + id)
        var xhttp = new XMLHttpRequest();
        
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

        // init the popup modal
        $("#demo02").animatedModal({
            modalTarget:'modal-02',
            animatedIn:'zoomIn',
            animatedOut:'bounceOutDown',
            color:'rgba(44, 80, 147, 0.5)',
            zIndexIn: '9999',  
            zIndexOut: '9999',
            // Callbacks
            beforeOpen: function() {
                    $(".content").addClass("blur")
                    $(".navbar").addClass("blur")
            },
            afterOpen: function() {
            },
            beforeClose: function() {
                $(".content").removeClass("blur")
                $(".navbar").removeClass("blur")
            },
            afterClose: function() {

            }
        });
        // activate the modal
        $("#demo02").click();
    };



     $('.card').click(function(e) {
        e.preventDefault();
        showModal(this.id)
    });


    $('#grid-table tbody').on('click', 'tr', function (e) {
        var data = gtable.row( this ).data();
        showModal(data[0])
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


    $('#modal-02').click(function(e){
        if (!$(e.target).is('.close-modal-02')) {
            $(this).find(".close-modal-02").trigger('click');
        }
    });

    $(document).keyup(function(e) {
    //if (e.keyCode === 13)     // enter
    //if (e.keyCode === 27) $('.cancel').click();
    if (e.keyCode === 27) {
        $('.close-modal-02').click();
    }  // esc
    });

    $('.dropdown-item').click(function(e){
        var status=($(this)[0].childNodes[1].className);
            $(".circle-border").each(function(){
                $(this).closest('div.card').parent().fadeOut();
                if($(this)[0].className == status){
                    $(this).closest('div.card').parent().fadeIn();
                }
            });
    });

    $('#resetSearch').click(function(e){
        $(".circle-border").each(function(){
            $(this).closest('div.card').parent().fadeIn();
        });
    });

    $('.form-search').on('submit',function(){return false;});
    $('.form-search .btn').on('click', function(e){
        var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
        $(".card-title").each(function(){
             var $this = $(this);
             if($this.text().toLowerCase().indexOf(query) === -1){
                $this.closest('div.card').parent().fadeOut();
            }
            else $this.closest('div.card').parent().fadeIn();
        });
        $(".card-subtitle").each(function(){
             var $this = $(this);
             if($this.text().toLowerCase().indexOf(query) === -1){
            }
            else $this.closest('div.card').parent().fadeIn();
        });
    });
});
