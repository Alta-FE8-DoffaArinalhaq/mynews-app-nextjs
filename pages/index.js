import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import NewsList from '../components/NewsList';
import Router, { useRouter } from 'next/router';

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
  const router = useRouter();

  const pageDetail = (item) => {
    Router.push({
      pathname: `/detail`,
      query: {
        imageUrl: item.imageUrl,
        title: item.title,
        content: item.content,
        date: item.date,
        author: item.author,
        time: item.time,
      },
    });
  };

  return (
    <div>
      <NavBar />
      <h1>Head News</h1>
      <div className="container">
        {newsData.map((item, index) => {
          return (
            <div key={index}>
              <NewsList src={item.imageUrl} title={item.title} clickDetail={() => pageDetail(item)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
