import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainView from "./components/MainView";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[100%] bg-bg">
        <Header />
        <MainView />
      </div>
    </div>
  )
}

export default Home