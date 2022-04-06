import React from 'react';
import millify from 'millify';
import {Row, Col, Typography, Avatar } from 'antd';
import { useGetExchangesQuery } from '../services/CryptoExchanges';
import  Loader  from './Loader';
import {Link} from 'react-router-dom';


const { Text } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;
  console.log(exchangesList);


  return (
    <div style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>
      <Row>
        <Col span={6}><strong>EXCHANGES</strong></Col>
        <Col span={6}><strong>24h TRADE VOLUME</strong></Col>
        <Col span={6}><strong>MARKETS NUMBER</strong></Col>
        <Col span={6}><strong>CHANGE</strong></Col>
      </Row>
      <Row style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}} gutter={[0, 32]} >
        {exchangesList.map((exchange) => (
          <Col span={24} classname = "exchange-list">
                <Link to={`/exchange/${exchange.uuid}`}>
                  <Row key={exchange.uuid} >
                    <Col span={6} style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}  style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>${millify(exchange['24hVolume'])}</Col>
                    <Col span={6} style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>{millify(exchange?.numberOfMarkets)}</Col>
                    <Col span={6} style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>{millify(exchange?.marketShare)}%</Col>
                  </Row>
                </Link>
                  
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;