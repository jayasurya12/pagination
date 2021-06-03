async function github(){
    fetch(`https://gist.github.com/rvsp/add40254aa126f045837fa5b51f47f1f.js`)
    .then(data=>{
        return data.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
}
github();