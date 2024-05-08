var compareVersion = function(version1, version2) {
    let v1 = version1.split('.'), v2 = version2.split('.');
    let i = 0;
    while (i < Math.max(v1.length, v2.length)) {
        if (!v1[i] || !v2[i]) {
            if (!v1[i] && v2[i] != 0)  {
                return -1;
            } else if (!v2[i] && v1[i] != 0)  {
                return 1; 
            }
        }
        let dif = Number(v1[i]) - Number(v2[i]);
        if (dif > 0) {
            return 1; 
        } else if (dif < 0) {
            return -1; 
        } 
        i++;
    }
    return 0; 
};
