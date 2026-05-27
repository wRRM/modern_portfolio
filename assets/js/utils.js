window.utils = {

  clamp(value, min, max) {

    return value >= min
      ? (value <= max ? value : max)
      : min;

  }

};