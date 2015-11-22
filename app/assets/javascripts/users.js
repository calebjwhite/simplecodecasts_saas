$(document).ready(function() {
    Stripe.setPublishableKey($('meta[name-"stripe-key"]').attr('content'));
    
    //Watch for form submission, prevent submit
    $("#form-submit-btn").click(function(event) {
        event.preventDefault();
        //disable button to prevent double clicking
        $('input[type=submit]').prop('disabled', true);
        var error = false;
        //grab values
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMon = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        If (!error) {
            //get stripe token:
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
                }, stripeResponseHandler);
            }
            return false;
        }); //form submission end click event
        
    function stripeResponseHandler(status, response) {
        //Get a reference to the form (set equal to whole form)
        var f = $('#new_user');
        //Get the token from the response
        var token = response.id;
        //Add token to the form
        f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
        //submit form
        f.get(0).submit();
        }

});