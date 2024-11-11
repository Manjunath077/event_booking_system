export function setData(data){
    return localStorage.setItem("users",JSON.stringify(data))
}

export function getData(){
    return JSON.parse(localStorage.getItem('users')) || []
}
