
exports.min = function min (arr) {
  return !arr ? 0 : !arr.length ? 0 : Math.min(...arr);
}

exports.max = function max (arr) {
  return !arr ? 0 : !arr.length ? 0 : Math.max(...arr);
}

exports.avg = function avg (arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  const res = arr.reduce((acc, cur) => {
		acc += cur;
		return acc;
	}, 0);
	return (res / (arr.length)).toFixed(2);
}