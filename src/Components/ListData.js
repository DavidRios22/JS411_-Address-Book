import React, { useState } from "react"

export default function ListData(props) {
  const [isClicked, setIsClicked] = useState(true)

  const handleClick = () => {
    return setIsClicked(!isClicked)
  }
  return (
    <div key={props.data.name.id}>
      <img src={props.data.picture.thumbnail} />
      <p>
        {props.data.name.first} {props.data.name.last}
      </p>
      {!isClicked && (
        <p>
          {props.data.location.street.number}
          {props.data.location.street.name}
        </p>
      )}
      <button onClick={() => handleClick()}>
        {isClicked ? <p>More Info</p> : <p>Less Info</p>}
      </button>
    </div>
  )
}
