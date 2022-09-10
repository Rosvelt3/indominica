import type {NextPage} from 'next'
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div>
            <Navbar items={[{text: "Test1", route: "/"}, {text: "Test2", route: "/"}, {text: "Test3", route: "/"}]}/>
        </div>
    )
}

export default Home
