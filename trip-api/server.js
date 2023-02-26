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

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

//Resource routes
//route for trips
const tripApiRoutes = require("./routes/trips-api");
const activityApiRoutes = require("./routes/activities-api");

//Mount all resource routes
App.use("/trips", tripApiRoutes);
App.use("/activities", activityApiRoutes);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
