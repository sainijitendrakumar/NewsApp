import React from 'react'

function NewItems({ title, description, imgUrl, url, author, publishedAt, source }) {
    return (
        <div>
            <div className='flex flex-row justify-end'>
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 top-0 ">{source}</span>
        </div>
            
            <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <a href="#">

                    <img className="rounded-t-lg " src={imgUrl ? imgUrl : "https://images.wsj.net/im-904014/social"} alt="" style={{ width: "20rem", height: "10rem" }} />

                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-1xl font-bold  tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 ">{description}</p>

                    <p className="mb-3 font-serif text-xs text-gray-700 dark:text-gray-400">By:- {author ? author : "Unknown"} </p>
                    
                    <p className="mb-3 font-thin text-xs text-gray-700 dark:text-gray-400">published At:- {new Date(publishedAt).toGMTString()}</p>
                    <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewItems