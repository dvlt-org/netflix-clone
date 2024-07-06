import "./featured.css"
import { PlayArrow, InfoOutlined } from "@mui/icons-material"

export default function featured({ type }) {
    return (
        <div className="featured">
            {
                type && (
                    <div className="featured-categories">
                        <span>{type}</span>
                        <select name="genre" id="genre" className="featured-info__genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img width="100%" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="featured-info">
                <img className="featured-info__img" src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
                <span className="featured-info__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vero totam quia nemo minima quas delectus voluptate. Eveniet dolores minus qui cum laborum. Laudantium incidunt maxime est quas pariatur quam.</span>
                <div className="featured-info__buttons">
                    <button className="featured-buttons__button play">
                        <PlayArrow className="featured-button__icon" />
                        <span>Play</span>
                    </button>
                    <button className="featured-buttons__button more">
                        <InfoOutlined className="featured-button__icon" />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
