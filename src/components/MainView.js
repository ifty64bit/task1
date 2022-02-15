import { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import axios from 'axios';
import Card from './Card';

function MainView() {
  const userContext=useContext(UserContext)
  const suggestions = ["All For You", "Recommended", "Top Manufacturers", "Winter Special", "Demin Special", "Womens Were", "Kid's Were", "T-Shirt", "Men's Fation", "Shorts", "Hoodies"];
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://devapi.dhakai.com/api/v2/manufacturers', {
        headers: {
          "Authorization":userContext.user.token
        }
      })
      setCardData([...data.result.manufacturers])
    }
    getData()
  },[userContext.user.token])
  return (
    <div>
      <div className='px-6 py-4'>
        <ul className='flex gap-x-4'>
          {suggestions.map((c, index) => {
            return (
              <li key={index} className={`border-[1px] cursor-pointer border-gray-500 rounded-md px-3 py-2 ${index===0?"bg-green text-white":""}`} >{ c }</li>
            )
          })}
        </ul>
      </div>
      <div className='px-4 flex gap-5 flex-wrap justify-center'>
        {
          cardData.map((data) => {
            return <Card key={data.uid} data={ data }/>
          })
        }
      </div>
    </div>
  )
}

export default MainView