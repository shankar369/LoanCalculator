const clickBtn = document.getElementById('calculate').addEventListener('click',function(e){
    //showing loading animation
    document.getElementById('loading').style.display = 'block';
    //hiding loading animation
    document.getElementById('results').style.display = 'none';
    //calling main calculations function
    setTimeout(calculations,2000);
    e.preventDefault()
});

function calculations(){
    //Turning off animation
    document.getElementById('loading').style.display = 'none';

    //Required field values
    //input fields
    const amount = document.querySelector('#amount');
    const years = document.querySelector('#years');
    const intrest = document.querySelector('#intrest');
    //output fields
    const monthly_payment = document.querySelector('#monthly-payment');
    const total_payment = document.querySelector('#total-payment');
    const total_intrest = document.querySelector('#total-intrest');
    //getting values from input fields
    const principal = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(intrest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //calculations
    const x = Math.pow(1 + calculatedIntrest , calculatedPayments);
    const monthly = (principal*x*calculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        //console.log( monthly.toFixed(2),'two',(monthly * calculatedPayments).toFixed(2),'three',((monthly * calculatedPayments)-principal).toFixed(2));
        monthly_payment.value = monthly.toFixed(2);
        total_payment.value = (monthly*calculatedPayments).toFixed(2);
        total_intrest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        //showing results block
        document.getElementById('results').style.display = 'block';
    }
    else{
        //showing errors
        showError("please check your numbers");
    }
    
}

function showError(error){
     //hiding loading animation
     document.getElementById('loading').style.display = 'none';
     //hiding loading animation
     document.getElementById('results').style.display = 'none';
    //creating a div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //adding class
    errorDiv.className = 'alert alert-danger';

    //creating a text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //inserting error to show
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,3000); 

}


//removing error after some time.
function clearError(){
    document.querySelector('.alert').remove();
}