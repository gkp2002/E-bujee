import {useState,useEffect} from 'react'

function Clock() {
  const [time,setTime] = useState();
  useEffect(()=>{
      setInterval(()=>{
             const timeobj = new Date();
             const hour = timeobj.getHours();
             const min = timeobj.getMinutes();
             const CurrentTime = hour + ' : ' +min;
             setTime(CurrentTime);
      },1000)
  })
  return (
    <div>
         {time}
    </div>
  )
}

export default Clock
