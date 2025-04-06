// singletorn  //object.create

//Object literals =>

 const mySym = Symbol("key1")
    const JsUser = {

        name:            "Abhishek",
        "full name":     "Abhishek Goswami",
        [mySym]:          "mykey1",
        age:             "18",
        email:           "Nicky@abhishek",
        isLoggedin:      "false",
        LastLoginDays:   ["monday","saturaday"],
       
    }

    // console.log(JsUser.email)
    // console.log(JsUser["email"])
    // console.log(JsUser["full name"])
    // console.log(JsUser[mySym])



    //chanje karne ke liye

    JsUser.email = "Nicky@chatgpt.com"
   // Object.freeze(JsUser)
    JsUser.email = "hitesh@microsoft.com"
    //console.log(JsUser);


    JsUser.greeting = function(){
        console.log("Hello JS user");
    }
    console.log(JsUser.greeting());



    JsUser.greetingTwo = function() {
        console.log(`Hello JS user ${this.name}`);
    }
    console.log(JsUser.greetingTwo());