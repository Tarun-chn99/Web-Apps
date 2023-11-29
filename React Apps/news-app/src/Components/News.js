import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

        const [articles, setArticles] = useState([]);
        const [loading, setLoading] = useState('false');
        const [page, setPage] = useState(1);
        const [infiniteLoad, setInfiniteLoad] = useState('false');
        const [progress, setProgress] = useState(0);
        const [totalResults, setTotalResults] = useState(0)

        const updateNews = async () => {
            props.setprog(5);
            const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading('true');
            let data = await fetch(url);
            // props.setprog(30);
            let parsedData = await data.json();
            // props.setprog(75);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading('false');       
            // props.setprog(100);   
        }

        useEffect(() => {
            updateNews();
        }, [])

        const handleCapitalize = (word) => {
            return  word.charAt(0).toUpperCase() + word.slice(1);
        }

        const fetchMoreData = async () => {

            setProgress(progress+10);
            props.setprog(progress);
            setPage(page+1);
            setInfiniteLoad('true');

            const  url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setInfiniteLoad('false');

        }

        return(
            <>
                <h2 className='text-center my-4'>EagleNews - {handleCapitalize(props.category)} Top Headlines</h2>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={infiniteLoad && <Spinner/>} >
                    
                    <div className="container">

                    <div className='row'>
                        {
                            articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                        <NewsItem 
                                            title={element.title} 
                                            description={element.description ? element.description : ""}  
                                            imageUrl={element.urlToImage} 
                                            url={element.url}
                                            author={element.author ? element.author : "Unknown"}
                                            date={element.publishedAt}
                                            source={element.source.name} />
                                    </div>
                            })
                        }
                    </div>
                    </div>

                </InfiniteScroll>


            </>
            )
    }

    News.defaultProps = {
        country:'in',
        pageSize:8,
        category:'general'
    }

    News.propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number, 
        category:PropTypes.string
    }

    export default News;