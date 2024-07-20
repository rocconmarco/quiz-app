import React, { useState } from 'react'

const PossibleAnswer = ({answer}) => {
    const [isCLicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isCLicked)
    }
    
  return (
    <div onClick={handleClick} className={`h-auto w-[100%] border-2 bg-white rounded p-2 cursor-pointer ${isCLicked ? 'border-black' : 'border-white'}`}>
        <p className="text-black select-none">{answer}</p>
      </div>
  )
}

export default PossibleAnswer
