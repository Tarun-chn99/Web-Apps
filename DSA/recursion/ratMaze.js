//  rat in a maze problem

const maze = [[1,0,0,0],
              [1,1,0,1],
              [1,1,0,0],
              [0,1,1,1]];

const visited = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];

const path = [];
const ans = [];

const isSafe = (maze,size,visited,newx,newy) => {
    return ((newx >=0 && newx <= size-1) && (newy >=0 && newy <= size-1) && !(visited[newx][newy]) && maze[newx][newy])
}

const ways = (maze,i,j,visited,path,ans,size) => {

    if(!maze[0][0])
        return ans;

    if((i === size-1) && (j === size-1)){
        ans.push([...path]);
        return;
    }

    visited[i][j] = 1;

    // Up 
    let newx = i-1;
    let newy = j;

    if(isSafe(maze,size,visited,newx,newy)){
        path.push('U');
        ways(maze,newx,newy,visited,path,ans,size);
        path.pop();
    }

    // Down 
    newx = i+1;
    newy = j;
    if(isSafe(maze,size,visited,newx,newy)){
        path.push('D');
        ways(maze,newx,newy,visited,path,ans,size);
        path.pop();
    }

    // Left 
    newx = i;
    newy = j-1;
    if(isSafe(maze,size,visited,newx,newy)){
        path.push('L');
        ways(maze,newx,newy,visited,path,ans,size);
        path.pop();
    }

    // Right 
    newx = i;
    newy = j+1;
    if(isSafe(maze,size,visited,newx,newy)){
        path.push('R');
        ways(maze,newx,newy,visited,path,ans,size);
        path.pop();
    }

    visited[i][j] = 0;
}

ways(maze,0,0,visited,path,ans,4);

console.log("Ways: ",ans);