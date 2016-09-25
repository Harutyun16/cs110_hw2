const p = function(m) {
	if(m === 0){
		return "";
	}
		return " " + p(m - 1);
};

const a = function(n) {
	if(n === 0) {
		return "";
	}
		return "*" + a(n - 1);
};

const main = function(m, n, k) {
	if(k === 0) {
		return "";
	}
		console.log(p(m) + a(n));
		main(m-1, n + 2, k-1);
};

const triangleStar = function(k) {
	main(k-1, 1, k);
};

triangleStar(3);
