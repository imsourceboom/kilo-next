const debounce (f, interval = 50) => {
  let now = null;

  return (...param) => {
    if (now) clearTimeout(now);

    now = setTimeout(() => {
      f(...param);
    }, interval);
  };
};

export default debounce;