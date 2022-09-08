import axios from 'axios';
import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import NewsList from '../components/NewsList';

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=startup`);
  const newsData = response.data.data;
  return {
    props: {
      newsData: newsData,
    },
  };
};

const Index = ({ newsData }) => {
  console.log('date time: ', newsData);
  return (
    <div>
      <NavBar />
      <h1>Head News</h1>
      <div className='container'>
        {newsData.map((item, index) => {
          return (
            <div key={index}>
              <NewsList src={item.imageUrl} title={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
