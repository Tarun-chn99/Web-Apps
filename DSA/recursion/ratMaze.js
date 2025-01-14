//  https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

const maze = [[1,0,0,0],
              [1,1,0,1],
              [1,1,0,0],
              [0,1,1,1]];

const visited = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];

const path = '';
const ans = [];

const isSafe = (maze,visited,newx,newy,size) => {
    return (newx >=0 && newx <= size-1) && (newy >=0 && newy <= size-1) && maze[newx][newy] && !visited[newx][newy]; 
}

const ways = (maze,i,j,path,ans,size,visited) => {

    if(!maze[0][0]) return ans;

    if(i === size-1 && j === size-1){
        ans.push(path);
        return;    
    }

    visited[i][j] = 1;

    let newx,newy;

    // Move Up

    newx = i;
    newy = j-1;

    if(isSafe(maze,visited,newx,newy,size)){
        path += 'U'
        ways(maze,newx,newy,path,ans,size,visited);
        path = path.slice(0,path.length-1);
    }

    // Move Down

    newx = i+1;
    newy = j;

    if(isSafe(maze,visited,newx,newy,size)){
        path += 'D'
        ways(maze,newx,newy,path,ans,size,visited);
        path = path.slice(0,path.length-1);
    }

    // Move Left

    newx = i-1;
    newy = j;

    if(isSafe(maze,visited,newx,newy,size)){
        path += 'L'
        ways(maze,newx,newy,path,ans,size,visited);
        path = path.slice(0,path.length-1);
    }
    
    // Move Right

    newx = i;
    newy = j+1;

    if(isSafe(maze,visited,newx,newy,size)){
        path += 'R'
        ways(maze,newx,newy,path,ans,size,visited);
        path = path.slice(0,path.length-1);
    }
    
    visited[i][j] = 0;

}

ways(maze,0,0,path,ans,4,visited);

console.log(ans.sort((a,b) => a.localeCompare(b)));