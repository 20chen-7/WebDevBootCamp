//js eseversion:6

// module.exports.getDate = getDate; //assign one object to be equal to this one;
exports.getDate = function (){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}

// module.exports.getDay = getDay;
exports.getDay = function getDay(){
    const today = new Date();
    const options = {
        weekday: "long",
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}


