import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import '../App.css'
import { useGetCryptosQuery } from '../services/CryptoApi';
import { Cryptocurrencies, News } from '../components'

const { Title } = Typography;


const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(12);
    const globalStatistics = data?.data?.stats;
    console.log(data)

    if(isFetching) return 'Loading ...';
    return (
    <div>  
        <Title level={2} className="heading">
            World Round Crypto Statistics
        </Title>
        <Row>
            <Col span={12}><Statistic title="Total Crypto Currencies" value={millify(globalStatistics.total)} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStatistics.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStatistics.totalMarkets)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStatistics.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24hrs Volume" value={millify(globalStatistics.total24hVolume)}/></Col>
        </Row>
        <div className='home-heading-container'>
            <Title level={2} className="home-title" >Top 12 Cryptocurrencies in the World</Title>
            <Title level={3} className="show-more" ><Link to="/cryptocurrencies">Show More</Link> </Title>
        </div>
        <Cryptocurrencies simplified />
        <div className='home-heading-container'>
            <Title level={2} className="home-title" >Latest News about Crypto</Title>
            <Title level={3} className="show-more" ><Link to="/news">Show More</Link> </Title>
        </div>
        <News simplified />
    </div>
    );
};

export default Homepage;
