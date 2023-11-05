console.clear();

let n = -3;
let m = 3;

let amountOfPairs = 0;

let limit = 30;

limitPairs: for (let a = 0; ;) {

    if (n > 0 && a > n) {
        break;
    } else if (n < 0 && a < n) {
        break;
    }

    for (let b = 0; ;) {

        if (m > 0 && b > m) {
            break;
        } else if (m < 0 && b < m) {
            break;
        }
        
        console.log(a, b);
        ++amountOfPairs;
        
        if (amountOfPairs === limit) {
            break limitPairs;
        }
    
        if (m > 0) {
            b++;
        } else if (m < 0) {
            b--;
        }
    }

    if (n > 0) {
        a++;
    } else if (n < 0) {
        a--;
    }

}



//console.log (amountOfPairs);