<template>
  <section class="preview-cars">
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />hi
      <pre>{{carList}}</pre>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carList: [
        {
          id: 1,
          nameCar: "Chevrolet Tahoe",
          imagesCar: require("@/assets/img/car/car1.jpg"),
          priceCar: "1 995",
          typeCar: "Внедорожник",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "5",
          usersCar: "7"
        },
        {
          id: 2,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5"
        },
        {
          id: 3,
          nameCar: "Kia Sportage",
          imagesCar: require("@/assets/img/car/car3.jpg"),
          priceCar: "1 995",
          typeCar: "Кроссовер",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5"
        },
        {
          id: 4,
          nameCar: "Chevrolet Tahoe",
          imagesCar: require("@/assets/img/car/car1.jpg"),
          priceCar: "1 995",
          typeCar: "Внедорожник",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5"
        },
        {
          id: 5,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5"
        },
        {
          id: 6,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>
