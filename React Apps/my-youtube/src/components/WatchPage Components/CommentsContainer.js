import { useRef, useState } from 'react'
import UserComments from './UserComments'

const data = [
    {
        name: "Tanisha Chuhan",
        text:  "dfsdfcsd sdfvsdfc fsds",
        replies: [
            {
                name: "Ashiah Gupta",
                text:  "dfsdfcsd sdfvsdfc fsds",
                replies: [
          
                ]
            },
            {
                name: "Ashiah Gupta",
                text:  "dfsdfcsd sdfvsdfc fsds",
                replies: [
          
                ]
            },
        ]
    },
    {
        name: "Ashiah Gupta",
        text:  "dfsdfcsd sdfvsdfc fsds",
        replies: [
            {
                name: "Ashiah Gupta",
                text:  "dfsdfcsd sdfvsdfc fsds",
                replies: [
          
                ]
            },
            {
                name: "Ashiah Gupta",
                text:  "dfsdfcsd sdfvsdfc fsds",
                replies: [
          
                ]
            },
        ]
    },
    {
        name: "Anna",
        text:  "dfsdfcsd sdfvsdfc fsds",
        replies: [
            {
                name: "Ashiah Gupta",
                text:  "dfsdfcsd sdfvsdfc fsds",
                replies: [
                    {
                        name: "Ashiah Gupta",
                        text:  "dfsdfcsd sdfvsdfc fsds",
                        replies: [
                            {
                                name: "Ashiah Gupta",
                                text:  "dfsdfcsd sdfvsdfc fsds",
                                replies: [
                          
                                ]
                            },
                            {
                                name: "Ashiah Gupta",
                                text:  "dfsdfcsd sdfvsdfc fsds",
                                replies: [
                          
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
  ]

const CommentsContainer = () => {

    const [commentData,setCommentData] = useState(data);
    const input = useRef();
    const handleComments = () => {
        setCommentData([
            ...data,
            {
                name: "Tarun Chauh",
                text: input.current.value,
                replies:[]
            }
        ])
    }

    return (
    <div className='bg-gray-200 py-2 px-4 rounded-xl my-4 w-full '>
        <h1 className='text-2xl font-bold my-4 px-2'>Comments</h1>
        <form className='w-full' onSubmit={(e)=>e.preventDefault()}>
            <input ref={input} className='w-10/12 p-4 my-2 rounded-lg outline-none ' type='text' placeholder='Enter Comments...'/>
            <button className='bg-blue-200 p-4 rounded-lg outline-none w-1/6 font-bold ' onClick={handleComments}>Comment</button>
        </form>
        <UserComments data={commentData}/>
    </div>
  )
}

export default CommentsContainer
