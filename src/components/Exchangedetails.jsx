import React  from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useGetExchangeDetailsQuery } from '../services/CryptoExchanges';
import  Loader  from './Loader';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;


const Exchangedetails = () => {
    const {coinId} = useParams();
    const {data, isFetching} = useGetExchangeDetailsQuery(coinId);
    const detailsList = data?.data?.exchange;

    const stats = [
    { title: 'Rank', value: detailsList?.rank, icon: <NumberOutlined /> },
    { title: 'Number of markets', value: detailsList?.numberOfMarkets, icon: <NumberOutlined /> },
    { title: 'Number of coins', value: detailsList?.numberOfCoins, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${detailsList?.["24hVolume"] && millify(detailsList?.["24hVolume"])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Share', value: `$ ${detailsList?.marketShare && millify(detailsList?.marketShare)}`, icon: <DollarCircleOutlined /> },
    { title: 'Verified', value: detailsList?.verified ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Recommended', value: detailsList?.recommended ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    {title: 'Last ticker created at', value: new Date(detailsList?.lastTickerCreatedAt).toLocaleDateString(), icon: <ThunderboltOutlined/>},
    {title: `${detailsList?.name} website`, value: <a href={detailsList?.websiteUrl}>{detailsList?.name} Link</a>, icon: <TrophyOutlined/>}
];


    if (isFetching) return <Loader/>

    return(
        
            <Col className='coin-detail-container' >
                <Col className='coin-heading-container'>
                    <Title level={2} className="coin-name">
                        {detailsList?.name}
                    </Title>
                    <img style={{maxWidth: '200px', maxHeight: '100px'}} src={detailsList?.iconUrl} />
                    <p>
                    {detailsList?.name} price in USD.
                    See value statistics, market cap and supply.
                    </p>
                </Col>

                <Col classname='stats-container'>
                    <Col classname='coin-value-statistics'>
                        <Col classname='coin-value-statistics-heading'>
                            <Title level={3} className="coin-detailes-heading">
                            {detailsList?.name} Exchange Statistics
                        </Title>
                        <p>
                            An overview showing the Exchange statistics of {detailsList?.name}
                        </p>
                        </Col>
                        {stats.map(({icon, title, value}) => (
                        <Col className='coin-stats'>
                                <Col className='coin-stats-name'>
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </Col>
                                <Text className='stats'>{value}</Text>
                        </Col>
                    ))}

                    </Col>
                </Col>
                <Col className='coin-desc-link'>
                <Row className='coin-desc'>
                    <Title level={3} className='coin-details-heading'>
                        What is {detailsList?.name}
                        {HTMLReactParser(detailsList?.description)}
                        </Title>
                </Row>
                <Col className='coin-links'>
                    <Title level={3} className='coin-details-heading'> 
                    {detailsList?.name} Links
                    </Title>
                    {detailsList?.links.map((link) => (
                        <Row className='coin-link' key={link.name}>
                            <Title level={5} className='link-name'>
                                {link.type}
                            </Title>
                            <a href={link.url} target="_blank" rel='noreferrer'> 
                                {link.name}
                            </a>
                        </Row>
                    ))}
                </Col>
            </Col>
        
            </Col>
    )
}

export default Exchangedetails;