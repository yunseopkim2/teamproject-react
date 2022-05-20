import styles from "@/styles/Home.module.css";
import Login from "../pages/project/login"
import Join from "../pages/project/join"
import FindId from "../pages/project/findId"
import NewPw from "../pages/project/newPw"
import FindPw from "../pages/project/findPw"
import Change from "../pages/project/change"
import Remove from "../pages/project/remove"
import Board from "../pages/project/board"
export function Home() {
    return (
        <>
            <Login /><FindId/><NewPw/>
            <Board/>
</>
    )
}