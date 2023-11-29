import React from 'react';

const NewsItem = (props) => {

        let {title,description,url,imageUrl,author,date,source} = props;
        return(
            <div className='my-4'>
                <div  className="card" style={{width: "26rem"}}> 

                    <div style={{
                        display:'flex',
                        justifyContent:'end',
                        position:'absolute',
                        right:'0'
                    }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>

                    <img src={imageUrl ? imageUrl : "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/Tinkerstellar-Python-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"}  className="card-img-top" style={{height:'20rem'}} alt="..."/>
                    <div  className="card-body">
                        <h5  className="card-title">{title ? title.slice(0,28) : ""}</h5>
                        <p  className="card-text">{description ? description.slice(0,78) : ""}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} rel='noreferrer' target='_blank' className="btn btn-dark">Read More</a>
                    </div>

                </div>
            </div>
        )
    
}

export default NewsItem