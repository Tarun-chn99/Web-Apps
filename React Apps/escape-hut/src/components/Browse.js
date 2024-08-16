import BackGround from './BackGround'
import Header from './Header'


const Browse = () => {

  return (
    <div>
        {/* <BackGround> */}
          <Header/>
        {/* </BackGround> */}
        <iframe 
          className='w-screen h-screen scale-[1] overflow-hidden'
          src="https://www.youtube.com/embed/hXzcyx9V0xw?si=y0qYq1YDK8QqAxCl&autoplay=1&mute=1" 
          title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
    </div>
  )
}

export default Browse
