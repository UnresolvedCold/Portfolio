
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(e){
       
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        if(check === true)
        POST();

        return false;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    $("button.ok_cool").click(function()
    {
        $("#dialogbox").addClass("hidden");

    });
    

    function POST()
    {
        const _name= $(name).val().trim();
        const _subject = $(subject).val().trim();
        const _email = $(email).val().trim();
        const _message = $(message).val().trim();

        const data = {_name,_subject,_email,_message}; 
        const options=
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };
        
        fetch('/email',options)
        .then((resp)=>resp.json())
        .then(function(data) 
        {
            console.log(data.status);
            if(status=='success')
            {
                //show dialog
                $("p.MailStatus").html("Email has been sent<br/>successfully");
                $("#dialogbox").removeClass("hidden");
            }
            else
            {
                $("p.MailStatus").html("Internal Error!<br/>Try again later.");
                $("#dialogbox").removeClass("hidden");
            }

        })
            
    }
    

})(jQuery);

