module.exports = function(CoffeeShop) {
  "use strict";
  CoffeeShop.status = (done) => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    const OPEN_HOUR = 6;
    const CLOSE_HOUR = 20;
    console.log("Current hour is", currentHour);
    let response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = "We are open for business";
    }
    else {
      response = "Sorry, we are closed. Open daily from 6am to 8pm";
    }
    done(null, response);
  };

  CoffeeShop.remoteMethod(
    "status",
    {
      http: { path: "/status", verb: "get" },
      returns: { arg: "status", type: "string" }
    }
  );

  CoffeeShop.getName = (shopId, done) => {
    CoffeeShop.findById(shopId, (err, instance) => {
      if (err) return done(err);
      if (!instance) return done(new Error("Not found"));
      let res = `Name of coffee shop is ${instance.name}`;
      done(null, res);
      console.log(res);
    });
  };

  CoffeeShop.remoteMethod(
    "getName",
    {
      http: { path: "/getname", verb: "get" },
      accepts: { arg: "id", type: "number", http: { source: "query" } },
      returns: { arg: "name", type: "string" }
    }
  );
};
