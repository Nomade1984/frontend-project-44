const iteration = (callback, user) => {
  for (let i = 0; i < 3; i += 1) {
    const end = callback(user, i);
    if (end === 3) {
      break;
    }
  }
};
export default iteration;
