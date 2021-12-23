export const addToFriends = (user) => {
  return {
    type: "ADD_TO_FRIENDS",
    payload: {
      name: user.name.first + " " + user.name.last,
      from: user.location.city,
      phone: user.phone,
      photo: user.picture.large
    }
  };
};
export const deleteFromFriends = (friend) => {
  return {
    type: "REMOVE_FROM_FRIENDS",
    payload: friend
  };
};