import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './animate.css';
import $ from "jquery";
import { Exchange} from './../src/exchange.js';


$(document).ready(function () {
  
  $("#exchange").click(function (event) {
    event.preventDefault();
    $("#output").show();
    (async () => {
      let exchange = new Exchange();
      exchange.usd = parseInt($("#usd").val());
      console.log(exchange.usd);
      exchange.select = $("#currency").val();
      const response = await exchange.currency();
      exchange.australia = response.conversion_rates.AUD;
      exchange.argentine = response.conversion_rates.ARS;
      exchange.bulgarian = response.conversion_rates.BGN;
      exchange.colombia = response.conversion_rates.COP;
      exchange.europe = response.conversion_rates.EUR;
      exchange.danish = response.conversion_rates.DKK;
      exchange.hungarian = response.conversion_rates.HUF;
      exchange.indonesian = response.conversion_rates.IDR;
      exchange.southKorean = response.conversion_rates.KRW;
      exchange.paraguayan = response.conversion_rates.PYG;
      exchange.change(response);
      
      if (exchange.select === "AUD" && exchange.usd === 0) {
        $("#money").html("");
      }else if (exchange.select === "AUD") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedAus + " Australian currency.");
      } else if (exchange.select === "ARS") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedArg + " Agentina currency.");
      } else if (exchange.select === "BGN") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedBul + " Bulgarian currency.");
      } else if (exchange.select === "COP") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedCop + " Colombian currency.");
      } else if (exchange.select === "EUR") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedEur + " European currency.");
      } else if (exchange.select === "DKK") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedDan + " Danish currency.");
      } else if (exchange.select === "HUF") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedHun + " Hungarian currency.");
      } else if (exchange.select === "IDR") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedInd  + " Indonesian currency.");
      } else if (exchange.select === "KRW") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedKor + " South Korean currency.");
      } else if (exchange.select === "PYG") {
        $("#money").html(exchange.usd + " USD " + " is " + exchange.changedPar + " Paraguayan currency.");
      } 
      
    })();
  });
});





