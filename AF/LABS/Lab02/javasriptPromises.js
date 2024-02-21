
async function checkRoomStatus(){



let promiseToCleanTheRoom=new Promise ((resolve,reject)=>{


    let isClean=true;

    if(isClean){
        resolve('Clean');
    }
    else{
        reject('not Clean');
    }
})

let result=await promiseToCleanTheRoom;

console.log("The room is "+ result)

}

checkRoomStatus();



