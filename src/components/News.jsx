import React, {useState, useEffect} from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';
import { useGetCryptosQuery } from '../services/CryptoApi';
import Sentiment from 'sentiment';
import Loader from './Loader';
import positive from '../images/positiveSentiment.jpeg';
import negative from '../images/negativeSentiment.png';
import neutral from '../images/neutralSentiment.png';


const sentiment = new Sentiment();
const{Text, Title} = Typography;
const { Option } = Select;
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';


const News = ({simplified}) => {

    const [newsCategory, setnewsCategoty] = useState('Cryptocurrency');
    const {data} = useGetCryptosQuery(100);
    const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 3 : 18})
    if (!cryptoNews?.value) return <Loader/>

    const analyses = (score) => {
        if(score === 0 ){
            return <img style={{maxWidth: '50px', maxHeight: '25px'}}  src={neutral} alt="neutral" classname='news-image' />
        }
        else if(score > 0){
            return <img style={{maxWidth: '50px', maxHeight: '25px'}} src={positive} alt='positve' classname='news-image' />
        }
        else{
            return <img style={{maxWidth: '50px', maxHeight: '25px'}} src={negative} alt='negative' classname='news-image' />
        }
    }

    return (
    <div style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>
    <Row gutter={[24, 24]}>
        {!simplified && (
            <Col span={24}>
                <Select
                    showSearch
                    className='select-news'
                    placeholder="choose crypto"
                    optionFilterProp='children'
                    onChange={(value) => setnewsCategoty(value)}
                >
                    <Option value="Cryptocurrency"></Option>
                    {data?.data?.coins.map((coin) => <Option value={coin.name}> {coin.name} </Option>)}
                </Select>
            </Col>
        )}
        {cryptoNews.value.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card' >
                    <a href={news.url} target="_blank" rel="noreferre">
                        <div className='news-image-container'>
                            <Title className='news-title' level={4}>
                                {news.name}
                            </Title>
                            <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                        </div>
                        <p>
                            {news.description > 100 ? `${news.description.substring(0, 100)} ...`
                            : news.description}
                        </p>
                        <div className='provider-container'>
                            <div>
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                <Text className='provider-name'>{news.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </div>
                        <p>
                            Sentiment Score: {analyses(sentiment.analyze(news.description).score)}
                        </p>

                    </a>
                </Card>
            </Col>
        ))}
    </Row>
    </div>
    );
};

export default News;
