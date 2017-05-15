var fuel;
$.get("../data/car_data.json", function (car_data) {
    fuel = new Fuse(car_data, {
        shouldSort: true,
        tokenize: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "mfr",
            "div",
            "car"
        ]
    });
});

var getFuelEfficiency = function (car_name, callback) {
    var result = fuel.search(car_name);
    callback(result[0]);
};
