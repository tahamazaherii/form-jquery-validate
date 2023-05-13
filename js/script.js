$(document).ready(function () {
  
  $(".form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      a1: "required",
      a2: "required",
      a3: "required",
      a4: "required",
      a5: "required",


      b1: "required",
      b2: "required",
      b3: "required",
      b4: "required",
      b5: "required",


      c1: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
      c2: "required",
      c3: "required",
      c4: "required",
      c5: "required",



      d1: "required",
      d2: "required",
      d3: "required",
      d4: "required",
      d5: "required",


      // a3: {
      //   required: true,
      //   // Specify that email should be validated
      //   // by the built-in "email" rule
      //   email: true
      // },
      // a4: {
      //   required: true,
      //   minlength: 5
      // }
    },
    // Specify validation error messages
    messages: {
      a1: "اسم خود را وارد کنید",
      a2: "فامیلی خود را وارد کنید",
      a3: "تاریخ تولد خود را وارد کنید",
      a4: "شماره بیمه خود را وارد کنید",
      a5: "وضعیت خانوادگی خود را وارد کنید",

      b1: "آدرس خود را وارد کنید",
      b2: "استان خود را وارد کنید",
      b3: "شهر خود را وارد کنید",
      b4: "کد پستی خود را وارد کنید",
      b5: "کشور خود را وارد کنید",


      c1: "ایمیل خود را وارد کنید",
      c2: "تلفن خود را وارد کنید",
      c3: "شماره همراه خود را وارد کنید",
      c4: " شماره پدر خود را وارد کنید",
      c5: "شماره مادر خود را وارد کنید",


      d1: "مدل خود را وارد کنید",
      d2: "رنگ خود را وارد کنید",
      d3: "ایراد  خود را وارد کنید",
      d4: " قدرت موتور خود را وارد کنید",
      d5: "شماره شاسی خود را وارد کنید",

      // a2: "Please enter your lastname",
      // a4: {
      //   required: "Please provide a password",
      //   minlength: "Your password must be at least 5 characters long"
      // },
      // a3: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
  




  
  




});

