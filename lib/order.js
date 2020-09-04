class Order {

    name;
    deliveryMinute;
    #drivingDistanceInMinutes;
    #COOK_TIME = 20;
    startTime;

    constructor(name, deliveryMinute, drivingDistanceInMinutes) {
        this.name = name;
        this.deliveryMinute = deliveryMinute;
        this.#drivingDistanceInMinutes = drivingDistanceInMinutes;
        this.startTime = this.deliveryMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);
    }



}

module.exports = Order;
