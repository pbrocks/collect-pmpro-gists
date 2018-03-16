jQuery(document).ready(function($) {
    // $('#reset-gist-button').hide();

    // var form2clear = $('#reset-gist-button').val();

    $('#collect-gist').click(function(e) {
        alert( 'we\'re adding stuff!!');
        
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: collect_gists_object.collect_gists_ajaxurl,
            data: {
                // Variables defined from form
                action    : 'connect_to_php',
                serialize : $('#collect-gists').serialize(),
                gisturl     : $('#gist-url').val(),
                // last      : $('#lname').val(),

                  // Admin stuff
                script_name   : 'collect-gists.js',
                ajaxurl: collect_gists_object.collect_gists_ajaxurl,
                nonce  : collect_gists_object.collect_gists_nonce,
            },
			// dataType: "json",
            success:function(data) {
                // $('#collect-gist').hide();
                // $('#reset-gist-button').show();
    	        // alert( 'we\'re adding stuff!!');
				$('#simple-msg').html( data );
                console.log( data );
            },

            error: function( jqXHR, textStatus, errorThrown ){
                console.log( errorThrown );
                $('#simple-msg').html( errorThrown );
            }
        });
    });
});
