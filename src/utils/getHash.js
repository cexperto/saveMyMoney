const getHash = () =>{
    console.log("****")
    console.log(location.hash.slice(1).toLocaleLowerCase())
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
} 
    

export default getHash;