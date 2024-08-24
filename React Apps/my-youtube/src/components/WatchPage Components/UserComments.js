import { useState } from 'react'
import Comment from './Comment'

const UserComments = ({data}) => {

    const [commentIndex,setCommentIndex] = useState(null);
    const setIndex = (index) => setCommentIndex(index);

    return (
    <div className='rounded-xl'>
        {data?.map((element,index)=>{
          return <div key={index}>
                    <Comment key={index} data={element} setIndex={setIndex} index={index} commentIndex={commentIndex}/>
                    {(commentIndex === index) && <div className='pl-4 ml-2 mt-2 border-l-2 border-gray-400 '>
                      {(element?.replies?.length !== 0) && <UserComments data={element.replies}/>}
                    </div>}
                  </div>
        }
        )}
    </div>
  )
}


export default UserComments
