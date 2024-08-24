import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../appStore/slices.js/chatSlice";
import { giveRandomNames,makeid } from "../../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const input = useRef(null);
    const chatMessages = useSelector(store => store.chat.messages);

    const handleSubmit = () => {
        dispatch(addMessage({
            name: 'Tarun',
            text: input.current.value
        }));
        input.current.value='';
    }

    useEffect(()=>{

        let timerId = setInterval(() => {
            dispatch(addMessage({
                name: giveRandomNames(),
                text: makeid(20)
            }))
        }, 200);
        return () => clearInterval(timerId);
        //eslint-disable-next-line
    },[]);

    return (
        <div className=' w-full mx-4 bg-slate-400 h-[600px] rounded-lg '> 

            <div className=" px-4 py-2  bg-gray-500 rounded-lg font-bold h-[7%] text-xl text-white" >
                Live Chat
            </div>

            <div className="flex flex-col-reverse overflow-y-auto custom-scrollbar h-[86%] outline-none p-2">{   
                chatMessages?.length !== 0 && 
                chatMessages?.map((message,index) => <ChatMessage key={index} data={message}/>)
            }</div>

            <form className=" h-[7%] bg-gray-900" onSubmit={(e) => e.preventDefault()}>
                <input type='text' ref={input} placeholder='Enter comments...' className="w-[80%] h-full outline-none px-4 py-2 bg-gray-400 rounded-bl-lg" />
                <button onClick={handleSubmit} className="w-[20%] p-2 bg-gray-900 font-bold text-white h-full rounded-br-lg">Submit</button>
            </form>

        </div>
    )
}

export default LiveChat;