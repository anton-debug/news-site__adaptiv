//fc3b3db0fb218a7820f0fe94b9403c98
$(document).ready(function(){
    // $('.money').click(function(){
        $.get(
            'http://data.fixer.io/api/latest', 
            {'access_key': 'fc3b3db0fb218a7820f0fe94b9403c98'}, 
            function(response){
                // $('.money_block').text(response.rates);
                console.log(response.rates.RUB);
                console.log(response.rates.EUR);
                console.log(response.rates.USD);
                // $('.money_block').html(
                //     `<p>RUB/EUR ${response.rates.RUB}</p>
                //     <p>EUR ${response.rates.EUR}</p>
                //     <p>USD/EUR ${response.rates.USD}</p>`);
                    
                    var dol = response.rates.USD;
                        euro = response.rates.EUR;
                        rubEur = (response.rates.RUB * euro).toFixed(3);
                        rubDol = (rubEur/response.rates.USD).toFixed(3);

                    $('.money_block').html(
                        `<tr><td><b>1 &#8364 = </b></td><td>${rubEur} <b>&#8381</b></td></tr>
                        <tr><td><b>1 &#36 = </b></td><td>${rubDol} <b>&#8381</b></td></tr>`);
                // $('.money_block').text('Rub ' + response.rates.EUR);
                // $('.money_block').text('Rub ' + response.rates.USD);
                // // response();
                // response.rates = 'rub';

            }
        );
    });