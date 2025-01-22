// https://leetcode.com/problems/find-in-mountain-array/


function findTarget(s, e, target, isUpside) {
    while (s <= e) {
        const mid = s + Math.floor((e - s) / 2);
        const midVal = mountainArr.get(mid);

        if (midVal === target) {
            return mid;
        }

        if (isUpside) {
            if (target > midVal) {
                s = mid + 1;
            } else {
                e = mid - 1;
            }
        } else {
            if (target > midVal) {
                e = mid - 1;
            } else {
                s = mid + 1;
            }
        }
    }
    return -1;
}

function findPeak() {
    let s = 0;
    let e = length - 1;

    while (s < e) {
        const mid = s + Math.floor((e - s) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return s;
}

const findInMountainArray = function(target, mountainArr) {

    const length = mountainArr.length();
    const peakIndex = findPeak();
    let result = findTarget(0, peakIndex, target, true);

    if (result !== -1)   return result;

    return findTarget(peakIndex + 1, length - 1, target, false);    
};