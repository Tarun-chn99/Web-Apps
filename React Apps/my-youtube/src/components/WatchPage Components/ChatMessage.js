import React from 'react'

const ChatMessage = ({ data }) => {
  return (
    <div className='px-2 flex items-center my-2 '>
        <img className='w-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cKWumkIQpDfrlT2UIKaNsVktAEOySzlmkg&s' alt='user'/>
        <div className='mx-2'>
        <span className='font-bold mx-2 text-black'>{data.name}</span>
        <span>{data.text}</span>
        </div>
    </div>
  )
}

export default ChatMessage
