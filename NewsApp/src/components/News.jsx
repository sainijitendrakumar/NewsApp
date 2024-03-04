import React, { useEffect, useState } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'



function News({ category, pageSize, apiKey }) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const [totalResults, setTotalResults] = useState(0)

  const articleData = () => {
    const p = fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`)
    p.then(data => data.json())
      .then(userData => {
        setData(userData.articles)
        setTotalResults(userData.totalResults)
      })



  }

  useEffect(() => {
    articleData()
  }, [category])

  const fetchMoreData = () => {
    const p = fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1}&pageSize=${pageSize}&apiKey=2c4aa9313dac42f183b0174f2644f41c`)
    setPage(page + 1)
    p.then(data => data.json())
      .then(userData => {
        setData(data.concat(userData.articles))
        setTotalResults(userData.totalResults)
      }
      )
  }


  console.log(data.length)
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <span className='text-3xl font-bold '>NewsToday - Top {Capitalize(category)} Headline</span>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length !== totalResults}
          loader={<Spinner />}
          endMessage={'there is no more data'}>
          <div className='flex flex-col items-center'>
            <div className='grid grid-cols-4 gap-4 m-2 p-3'>
              {data.map((news) =>
                <div key={news.url}>
                  <NewItems title={news.title ? news.title.slice(0, 20) : ''} description={news.description ? news.description.slice(0, 80) : ''} imgUrl={news.urlToImage} url={news.url}
                    author={news.author} publishedAt={news.publishedAt} source={news.source.name} />
                </div>
              )}
            </div>
          </div>
        </InfiniteScroll>
      </div>

    </>
  )
}

export default News