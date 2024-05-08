var numRescueBoats = function (people, limit) {
    let p = people.sort((a, b) => b - a);
    let i = 0; 
    let j = p.length - 1; 
    let b = 0; 
    while (i <= j) {
        if (p[i] === limit) {
            b++; 
            i++; 
        } else if (p[i] + p[j] <= limit) {
            b++; 
            i++; 
            j--; 
        } else {
            b++; 
            i++; 
        }
    }
    return b;
};
