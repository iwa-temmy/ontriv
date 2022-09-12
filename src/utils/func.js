export const getDate = (time) => {
    let date = new Date(time)
    let formatDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    
    return formatDate;
}

export const getTime = (time) => {
   let newTime = new Date(time)
   let formatTime = newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds()

   return formatTime;
}