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
      this.changed = (this.usd * this.australia.toFixed());
    } else if (this.select === "ARS") {
      this.changed = (this.usd * this.argentine.toFixed())
    } else if (this.select === "BGN") {
      this.changed = (this.usd * this.bulgarian.toFixed())
    } else if (this.select === "CAD") {
      this.changed = (this.usd * this.canada.toFixed())
    } else if (this.select === "EUR") {
      this.changed = (this.usd * this.europe.toFixed())
    }
  }
}











