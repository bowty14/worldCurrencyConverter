import 'bootstrap';
import './styles.css';
import $ from "jquery";
import { Exchange} from './../src/exchange.js';


$(document).ready(function () {
  
  $("#exchange").click(function(event) {
    event.preventDefault();

    (async () => {
      let exchange = new Exchange();
      const response = await exchange.change();
      getElements(response);
    })();
    function getElements(response) {
      console.log(response);
      if (response) {
        $("#money").html(`${response.conversion_rates.AUD}`);
      }
    }
  });
});





