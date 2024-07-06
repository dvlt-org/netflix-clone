import { ArrowLeft, ArrowRight, DisplaySettings, DoNotDisturbOnTotalSilence, LocalConvenienceStoreOutlined, LocationCity, Sledding } from "@mui/icons-material"
import ListItem from "../listItem/listItem"
import { useRef, useState } from "react"
import "./list.css"

export default function list() {
  const [isMoved, setIsMoved] = useState(false);
  const [slide, setSlide] = useState(1)
  const listItems = useRef()
  const handleClick = (direction) => {
    setIsMoved(true)
    const distance = listItems.current.getBoundingClientRect().x - 60;
    if (direction === "left" && slide >1) {
      setSlide(slide => slide - 1)
      listItems.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slide < 5) {
      setSlide(slide => slide + 1)
      listItems.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
      <div className="list-container">
        <span className="list-title">Continue to watch</span>
        <div className="list-wrapper__container">
          <ArrowLeft className="list-container__arrow left" style={{
            display: isMoved ? "flex" : "none"
          }} onClick={() => handleClick('left')} />
          <div className="list-container__items" ref={listItems}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <ArrowRight className="list-container__arrow right" onClick={() => handleClick('right')} />
        </div>
      </div>
    </div>
  )
}
