jQuery(document).ready(function($) {
     $('.card').click(function(e) {
        e.preventDefault();
        if (this.id == "Donald") {
            $("#demo02").click(); 
        } else {
            console.log("Card clicked. Do somethng here") 
        }
        console.log("Clickd")
        //window.location = 'http://stackoverflow.com/';
    });

    $(document).keyup(function(e) {
    //if (e.keyCode === 13)     // enter
    //if (e.keyCode === 27) $('.cancel').click();
    if (e.keyCode === 27) {
        $('.close-modal-02').click();
    }  // esc
    });
});
