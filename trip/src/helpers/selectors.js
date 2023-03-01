export function getAllTripsForUser(trips, user_id) {
  // takes in an array of objects and returns a new array
  const user = Number(user_id);
  const filteredTrips = trips.filter((trip) => trip.user_id === user);
  return filteredTrips;
}

export function getUserFromUsers(users, user_id) {
  // takes in an array of objects and returns a single object
  const user_id_num = Number(user_id);
  const foundUser = users.find((user) => user.id === user_id_num);
  return foundUser;
}

export function getAllActivitiesForUser(activities, trip_id) {
  const trip = Number(trip_id);
  const filteredActivities = activities.filter((activity) => activity.trip_id === trip);
  return filteredActivities;
}
