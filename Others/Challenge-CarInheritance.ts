class Car {
    protected isSedan: boolean;
    protected seats: number;  
    protected mileage: number;
  
    constructor(isSedan: boolean, seats: number) {
      this.isSedan = isSedan;
      this.seats = seats;
    }
  
    public getIsSedan() {
      return this.isSedan
    }
  
    public getSeats() {
      return this.getSeats
    }
  }
  
  class WagonR extends Car{
    constructor(mileage: number) {
      super(true, 4);
      this.mileage = mileage
    }
  
    getMileage() {
      return `${this.mileage} kmpl`
    }
  }
  
  class HondaCity extends Car{
    constructor(mileage: number) {
      super(true, 6);
      this.mileage = mileage
    }
  
    getMileage() {
      return `${this.mileage} kmpl`
    }
  }
  
  class InnovaCrysta extends Car{
    constructor(mileage: number) {
      super(false, 4);
      this.mileage = mileage
    }
  
    getMileage() {
      return `${this.mileage} kmpl`
    }
  }
  
  
  const wagon = new WagonR(120);
  console.log(wagon.getMileage());