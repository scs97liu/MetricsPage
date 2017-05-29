jQuery(document).ready(function($) {
    $("input.form-control.form-control-sm").appendTo("form.form-search.form-inline");
    $("#grid-table_filter").addClass('hide');
    $("input.form-control.form-control-sm" ).attr( "id", "newSearch");
    $("#newSearch").attr( "placeholder", "Enter Name or PCM ID");
    $("#newSearch").removeClass("form-control-sm");
    $("#newSearch").addClass("mr-sm-2 input-medium search-query");

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


    $('#grid-table tbody').on('click', 'tr', function (e) {
        var data = gtable.row( this ).data();
        showModal(data[0])
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
