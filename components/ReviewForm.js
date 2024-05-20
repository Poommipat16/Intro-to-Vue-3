app.component("review-form", {
  template:
    /*html*/
    // ใส่ @submit.prevent เพื่อป้องกันการ refresh page เมื่อ submit form
    // แต่ให้เรียกใช้ function onSubmit แทน
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name"/>

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="recommend">Would you reommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>`,

  data() {
    return {
      name: "",
      review: "",
      recommend: "",
      rating: null,
    };
  },
  methods: {
    // function เพื่อเก็บ input จาก user
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.recommend === "" ||
        this.rating === null
      ) {
        alert("Please fill out every field");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        recommend: this.recommend,
        rating: this.rating,
      };
      // เนื่องจากไม่ต้องการให้มีค่า ค้างอยู่ใน form จึงต้องทำการส่งค่าออกไปเพื่อเก็บไว้ใน main
      this.$emit("review-submitted", productReview);
      // เมื่อส่งเสร็จจึงทำการ reset ค่าภายใน input
      this.name = "";
      this.review = "";
      this.recommend = "";
      this.rating = null;
    },
  },
});
