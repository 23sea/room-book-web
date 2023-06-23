import { useState, useEffect } from 'react';
import BookCommand from './BookCommand';
import axios from 'axios';

export default function TestList(props) {
  const { profile } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4200/book')
      .then((response) => {
        // Handle the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
    >
      {data.map((element) => (
        <li
          key={element.email}
          className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow mb-4'
        >
          <div className='flex w-full items-center justify-between space-x-6 p-6'>
            <div className='flex-1 truncate'>
              <div className='flex items-center space-x-3'>
                <h3 className='truncate text-sm font-medium text-gray-900'>
                  {element.book_time} - {element.book_time + 1}
                </h3>
                {element.display_status ? (
                  <span className='inline-flex flex-shrink-0 items-center rounded-full bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20'>
                    Unavailable
                  </span>
                ) : (
                  <span className='inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                    Available
                  </span>
                )}
              </div>
              <h4 className='mt-1 truncate text-sm text-gray-500'>
                {element.name_book}
              </h4>
            </div>
            {element.display_status ? (
              <img
                className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={element.imageUrl}
                alt='profile'
              />
            ) : (
              <BookCommand
                key={element.time}
                id={element._id}
                profile={profile}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
