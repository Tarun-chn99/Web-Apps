
//  https://www.naukri.com/code360/problems/count-ways-to-reach-nth-stairs_798650

const stairs = 10;

const climbingWays = (stairs) => {

    if(stairs<0)    return 0;
    if(!stairs)     return 1;

    return climbingWays(stairs-1)+climbingWays(stairs-2);
}

console.log("Ways: ",climbingWays(stairs));

