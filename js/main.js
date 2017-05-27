jQuery(document).ready(function($) {
     $('.card').click(function(e) {
        e.preventDefault();
        alert(this.id)
        if (this.id == "Donald") {
            $("#demo02").click(); 
        } else {
            $("#demo01").click(); 
        }
        console.log("Clickd")
        //window.location = 'http://stackoverflow.com/';
    });

    $(document).keyup(function(e) {
    if (e.keyCode === 13) $("#demo01").animatedModal();     // enter
    //if (e.keyCode === 27) $('.cancel').click();
    if (e.keyCode === 27) {
        $('.close-animatedModal').click(); 
        $('.close-modal-02').click();
    }  // esc
    });
});
