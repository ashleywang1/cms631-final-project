function getCommute(origin, destination, callback) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
    }, function (res, status) {
        var distance_in_meters = res.rows[0].elements[0].distance.value;
        callback({
            "distance_in_meters": distance_in_meters + " meters!",
            "car": Math.floor(distance_in_meters*0.001),
            "bus": Math.floor(distance_in_meters*0.0005),
            "bike": Math.floor(distance_in_meters*0.00001)
        })
    });
};
