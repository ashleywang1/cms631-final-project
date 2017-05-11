function getCommute(origin, destination, callback) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'TRANSIT',
    }, function (res, status) {
        var has_transit = res.rows[0].elements[0].status != "ZERO_RESULTS";
        if (has_transit) {
            var transit_distance = res.rows[0].elements[0].distance.value;
        }
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
        }, function (res, status) {
            var distance_in_meters = res.rows[0].elements[0].distance.value;
            callback({
                "distance_in_meters": distance_in_meters,
                "car": Math.floor(distance_in_meters*0.230577999) + " grams", // 371 g/pass-mi
                "car_yearly": Math.floor(distance_in_meters*0.230577999*42*5) + " grams",
                "bus": Math.floor(distance_in_meters*0.18582970789)  + " grams", // 299 g/pass-mi
                "bike": Math.floor(distance_in_meters*0.021) + " grams", //21 g/km,
                "pct_saving_if_bus": Math.floor(100*(distance_in_meters*0.230577999-transit_distance*0.18582970789)/(distance_in_meters*0.230577999)),
                "pct_saving_if_bike": Math.floor(100*(371-21)/371),
                "has_transit": has_transit,
                "transit_distance": transit_distance
            })
        });
    })
};
