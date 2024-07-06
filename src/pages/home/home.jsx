import Featured from "../../components/featured/featured"
import Navbar from "../../components/navbar/navbar"
import List from "../../components/list/list"
import "./home.css"

export default function home() {
    return (
        <div>
            <Navbar />
            <Featured type="Series" />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}
