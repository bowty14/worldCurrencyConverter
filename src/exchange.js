export class Exchange {

  async currency() {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();

      } else {
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }


  change() {
    if (this.select === "AUD") {
      this.changedAus = (this.usd * this.australia.toFixed());
    } else if (this.select === "ARS") {
      this.changedArg = (this.usd * this.argentine.toFixed())
    } else if (this.select === "BGN") {
      this.changedBul = (this.usd * this.bulgarian.toFixed())
    } else if (this.select === "COP") {
      this.changedCop = (this.usd * this.colombia.toFixed())
    } else if (this.select === "EUR") {
      this.changedEur = (this.usd * this.europe.toFixed())
    }
  }
}











