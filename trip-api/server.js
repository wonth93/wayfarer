const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(morgan("dev"));
App.use(BodyParser.json());
App.use(Express.static("public"));

//Resource routes
//route for trips
const usersRoutes = require("./routes/users-api");
const tripApiRoutes = require("./routes/trips-api");
const activityApiRoutes = require("./routes/activities-api");

//Mount all resource routes
App.use("/api/users", usersRoutes);
App.use("/api/trips", tripApiRoutes);
App.use("/api/activities", activityApiRoutes);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
