jQuery(document).ready(function($) {
    // click card view, hide list stuff
    $('#CardView').click(function(e) {
        if (!$(this).hasClass('active')) {
            // Unhide card list, hide grid, make grid button active
            $('#navbarRightItem').removeClass('hide');
            $('#card-list').removeClass('hide');
            $('#grid-list').addClass('hide');
            $('#CardView').addClass('active');
            $('#ListView').removeClass('active');
            $('#resetSearch').removeClass('hide');
        }
    });

    // click list view icon, hide card stuff
    $('#ListView').click(function(e) {
        if (!$(this).hasClass('active')) {
            //redraw table // might not need
            gtable.draw();

            // Unhide card list, hide grid, make grid button active
            $('#navbarRightItem').addClass('hide');
            $('#grid-list').removeClass('hide');
            $('#card-list').addClass('hide');
            $('#CardView').removeClass('active');
            $('#ListView').addClass('active');
            $('#resetSearch').addClass('hide');
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

    // datatables css
    $("input.form-control.form-control-sm").appendTo("form.form-search.form-inline");
    $("#grid-table_filter").addClass('hide');
    $("input.form-control.form-control-sm" ).attr( "id", "newSearch");
    $("#newSearch").attr( "placeholder", "Enter Name or PCM ID");
    $("#newSearch").removeClass("form-control-sm");
    $("#newSearch").addClass("mr-sm-2 input-medium search-query");
    
    // search as you type
    $('#newSearch').keyup(function(event){
            var keyCode = event.which;
            var term = $(this).val();

            var query = term
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

    $('#resetSearch').click(function(e){
        gtable.search('').draw();
        $(".circle-border").each(function(){
            $(this).closest('div.card').parent().fadeIn();
        });
    });

    // close navBar toggle if open
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("#navbarSupportedContent").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggle") && !clickover.is('input')) {
            $("body > nav > button").click();
        }
    });
});
