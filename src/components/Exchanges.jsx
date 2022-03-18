import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useGetExchangesQuery } from '../services/CryptoApi';
import  Loader  from './Loader';

const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {

  const {data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  console.log(exchangesList);

  if (isFetching) return <Loader/>

    return( 
    <> 
    <Row>
      <Col span={6}>EXCHANGES</Col>
      <Col span={6}>24hrs TRADE VOLUME</Col>
      <Col span={6}>MARKETS</Col>
      <Col span={6}>CHANGE</Col>
    </Row>
    <Row>
      {exchangesList.map((exchange) => (
        <Col span={24}>
          <Collapse>
          <Panel
          key={exchange.id}
          showArrow={false}
          header={(
            <Row key={exchange.id}>
              <Col span={6}>
                <Text><strong>{exchange.rank}.</strong></Text>
                <Avatar className='exchange-image' src={exchange.iconUrl} />
                <Text><strong>{exchange.name}.</strong></Text>
              </Col>
              <Col span={6}>${millify(exchange.volume)}</Col>
              <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
              <Col span={6}>{millify(exchange.marketShare)}%</Col>
            </Row>
          )}
          >
            {HTMLReactParser(exchange.description || '')}
          </Panel>
          </Collapse>
        </Col>
      ))}
    </Row>
    </>
    
  );
};

export default Exchanges;
