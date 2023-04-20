import React, { useEffect, useState } from "react"
import ListData from "./ListData"

export default function FetchApp() {
  const [data, setData] = useState([])



  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {/* <ul>
        {data.map((user, index) => (
          <li>
            <p>
              {user.name.first} {user.name.last}
            </p>
            <button onClick={() => handleClick(index)}>
              {isClicked ? <p>More Info</p> : <p>{user.name.first}</p>}
            </button>
          </li>
        ))}
      </ul> */}
      {data.map((user) => {
        return <ListData data={user} />
      })}
    </div>
  )
}
