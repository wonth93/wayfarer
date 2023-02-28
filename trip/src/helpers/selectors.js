export function getAllTripsForUser(trips, user_id) {
  // takes in an array of objects and returns a new array
  const user = Number(user_id);
  const filteredTrips = trips.filter((trips) => trips.user_id === user);
  return filteredTrips;
}

// export function getUserFromUsers(users, user_id) {
//   // takes in an array of objects and returns a new array
//   const user_id_num = Number(user_id);
//   const filteredUser = users.find((user) => user.user_id === user_id_num);
//   return filteredUser;
// }
