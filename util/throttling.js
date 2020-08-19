const throttling = (f, interval = 300) => {
  let isPending = false;

  return (...param) => {
    if (!isPending) {
      isPending = !!setTimeout(() => {
        f(...param);
        isPending = false;
      }, interval);
    }
  };
};

export default throttling;
