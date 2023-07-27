import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App(){

  const cards = data.map(item => {
    return (
      <Main 
          key = {item.id}
          {...item}
          // img = {item.img}
          // location = {item.location}
          // googleMapsUrl ={item.googleMapsUrl}
          // title = {item.title}
          // startDate = {item.startDate}
          // endDate = {item.endDate}
          // description = {item.description}
      />
    )
})

  return(
    <div>
        <Navbar />
        {cards}
    </div>
  )
}
