"use strict";
module.exports = function(Review) {
  Review.beforeRemote("create", (context, user, next) => {
    let req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });
};
