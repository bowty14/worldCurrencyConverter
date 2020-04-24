import 'bootstrap';
import './styles.css';
import $ from "jquery";
import { Exchange} from './../src/exchange.js';


$(document).ready(function () {
  
  $("#exchange").click(function(event) {
    event.preventDefault();

    (async () => {
      let exchange = new Exchange();
      exchange.usd = parseInt($("#usd").val());
      exchange.select = $("#currency").val();
      const response = await exchange.currency();
      exchange.australia = response.conversion_rates.AUD;
      exchange.argentine = response.conversion_rates.ARS;
      exchange.bulgarian = response.conversion_rates.BGN;
      exchange.canada = response.conversion_rates.CAD;
      exchange.europe = response.conversion_rates.EUR;
      exchange.change(response);
      $("#money").html(exchange.changed);
    })();
  });
});





