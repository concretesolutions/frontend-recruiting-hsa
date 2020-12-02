export default (state, action) => {
  switch (action.type) {
    case "USER_INFO":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
