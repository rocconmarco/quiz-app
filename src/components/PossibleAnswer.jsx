const PossibleAnswer = ({answer, isSelected, onSelect}) => {
    
  return (
    <div onClick={onSelect} className={`h-auto w-[100%] border-2 bg-white rounded p-2 cursor-pointer ${isSelected ? 'border-black' : 'border-white'}`}>
        <p className="text-black select-none">{answer}</p>
      </div>
  )
}

export default PossibleAnswer
