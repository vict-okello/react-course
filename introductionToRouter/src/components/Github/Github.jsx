import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState ([])
    useEffect (() =>{
        fetch('https://api.github.com/users/vict-okello')
        .then((response) => response.json())
        .then(data =>{
           console.log(data)
           setData(data)
      })
    }, [])

    return (
    <div className='text-center m-4 bg-gray-600 tetx-white
    p-4 text-3xl'>{data.bio}
    <img 
    src={data.avatar_url} width={300}
    alt="" 
    />
    </div>
  )
}

export default Github