export default (state, action) => {
  switch (action.type) {
    case "USER_INFO":
      return {
        user: action.payload,
      };
    case "USER_REPO":
      return {
        ...state,
        userRepository: action.payload,
      };
    default:
      return state;
  }
};
