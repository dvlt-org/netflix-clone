import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined
} from "@mui/icons-material"
import "./listItem.css"

export default function listItem() {
  const item_img = `https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee`
  return (
    <div className="list-item__container">
      <img src={item_img} className="list-item__img" alt="" />
      <div className="list-item__info">
        <div className="list-info__icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="list-info__date">
          <span>1 hour 14 mins</span>
          <span className="list-date__limi">+16</span>
          <span>1999</span>
        </div>
        <div className="list-info__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam suscipit nam obcaecati aut ut similique enim mollitia molestiae, at quas quibusdam earum et natus, facere, nulla officia debitis nobis?
        </div>
        <div className="list-info__genre">Action</div>
      </div>
    </div>
  )
}
