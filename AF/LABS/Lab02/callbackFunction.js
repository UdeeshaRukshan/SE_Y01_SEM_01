

function greeting (name,callback){
    console.log('Hello '+name);

    callback();
}

//callback function

function showDone(){
    console.log('Process done');
}

greeting('Alice',showDone)

