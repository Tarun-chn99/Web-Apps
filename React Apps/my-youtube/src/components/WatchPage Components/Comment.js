import { useState } from 'react';
import { THUMBS_UP_LOGO, THUMBS_DOWN_LOGO } from '../../utils/constants'

const Comment = ({data,setIndex,index,commentIndex}) => {
  
  const [likeCount,setLikeCount] = useState(0);
  const [disLikeCount,setDisLikeCount] = useState(0);
  const { name, text,replies } = data;

  const handleButtonClick = () => (commentIndex === index) ? setIndex(null) : setIndex(index);
    
  return (
    <div className='my-2 rounded-xl p-2 bg-gray-300'>

        <h2 className="px-2  font-bold text-sm">{name}</h2>
        <p className="px-2 my-1 italic">{text}</p>

        <div className='flex mt-2'>
          <div className='flex items-center'>
            <img className='w-5 m-2 cursor-pointer' src={THUMBS_UP_LOGO} alt='Like'  onClick={()=>setLikeCount(likeCount+1)}/>
            <span>{(likeCount !== 0) && likeCount}</span>
          </div>
          <div className='flex items-center'>
            <img className='w-5 m-2 cursor-pointer' src={THUMBS_DOWN_LOGO} alt='DisLike' onClick={()=>setDisLikeCount(disLikeCount+1)}/>        
            <span>{(disLikeCount !== 0) && disLikeCount}</span>
          </div>
          <button className='px-2 py-1 hover:bg-gray-400 text-gray-600 font-bold text-pretty spacing rounded-lg text-sm outline-none '>reply</button>
        </div>

        {(replies.length!==0) && <button className="px-2 py-1 hover:bg-gray-400 text-gray-600 font-bold text-pretty spacing rounded-lg text-sm outline-none inline-block" onClick={handleButtonClick}>replies</button>}
    </div>
  )
}

export default Comment
