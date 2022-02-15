import {useState} from "react";

function Switch({ data }) {
  
  const [active, setActive] = useState(0);
  

  const handleClick = () => {
    setActive(active === 0 ? 1 : 0);
  }

    return (
      <div className="relative text-gray-300 bg-green-dark flex justify-between items-center w-40 h-10 py-2 px-4 rounded-full">
        <span className="hidden translate-x-[117%] this is here because floting div confitional css not generating"></span>
        <div >{ data[0] }</div>
            <div
                id="float"
                className={`absolute flex items-center justify-center bg-green h-9 w-[45%] px-2 rounded-full left-[0.1rem] translate-x-${active===0?"[0]":"[117%]"} text-white cursor-pointer transition duration-200`}
                onClick={handleClick}          
            >
                {data[active]}
            </div>
        <div>{ data[1]}</div>
        </div>
    );
}

export default Switch;
