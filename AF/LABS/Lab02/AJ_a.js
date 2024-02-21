function fetchData(url,callback){
    console.log('Fetching data from '+url);

    callback();
}

function showData(){
    console.log('Data received');
}

fetchData('https://www.google.com',showData)