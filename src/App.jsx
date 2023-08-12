import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

import Navbar from './Navbar';
import Orientation from './Orientation';
import Pagination from './Pagination';
import Photos from './Photos';

const App = () => {
  const [topic, setTopic] = useState();
  const [photos, setPhotos] = useState([]);
  const [topicPage, setTopicPage] = useState({
    Nature: '1',
    Ocean: '1',
    People: '1',
    Food: '1',
  });

  // DECLARING THE VARIABLES FOR API
  const apiKey = 'ir6gQLxYcguDwucjHLgJAzJBg0SlFdkQOYOkam1CmRLJKhuDfJwYY2Xn';
  const client = createClient(apiKey);

  // USE EFFECT FOR RANDOM PHOTOS
  useEffect(() => {
    client.photos.curated({ per_page: 15 }).then(response => {
      if (response?.photos) {
        setPhotos(response.photos);
      }
    });
  }, [topic, topicPage]);

  // HANDLE ON CHANGE PAGE FUNCTION
  const handleOnChangePage = (e, topic) => {
    const changePage = e.target.innerText;

    setTopic(topic);
    setTopicPage(prevTopicPage => ({ ...prevTopicPage, [topic]: '1' }));

    client.photos
      .search({ query: topic, per_page: 15, page: changePage })
      .then(response => {
        if (response?.photos) {
          setPhotos(response.photos);
        }
      });
  };

  // HANDLE FUNCTIOn TO CHANGE PAGE
  const handlePagination = e => {
    const changePage = e.target.innerText;
    client.photos
      .search({ query: topic, per_page: 15, page: changePage })
      .then(response => {
        if (response?.photos) {
          setPhotos(response.photos);
        }
      });
  };

  return (
    <div className='flex max-w-[1440px] m-auto pt-12'>
      <div className='w-[340px]'>
        <Navbar
          onClick={e => handleOnChangePage(e, 'Nature')}
          topic='Nature'
          setTopic={setTopic}
        />
        <Navbar
          onClick={e => handleOnChangePage(e, 'Ocean')}
          topic='Ocean'
          setTopic={setTopic}
        />
        <Navbar
          onClick={e => handleOnChangePage(e, 'People')}
          topic='People'
          setTopic={setTopic}
        />
        <Navbar
          onClick={e => handleOnChangePage(e, 'Food')}
          topic='Food'
          setTopic={setTopic}
        />
      </div>
      <div className='max-w-[1100px] pl-5'>
        <div className='flex items-center justify-between'>
          <Pagination handlePagination={handlePagination} />
          <Orientation />
        </div>
        <Photos photos={photos} />
      </div>
    </div>
  );
};

export default App;
