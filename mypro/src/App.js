import React, { useState } from 'react'
import {Typography, Layout} from 'antd';
import './App.css';
import  Form from './Components/Form';
import  CardList from './Components/CardList';
const {Header,Content} = Layout
const {Title} = Typography
const App = () =>
{
     const [cards, setCards] = useState([])
     const addNewCard = cardInfo => {
     setCards(cards.concat(cardInfo))
      }

   return(
     <>
     <Layout className="layout">
       <Header className="header">
       <Typography>
         <Title level={2} style={{
           fontSize:'30px'
         }}>GithubCompare</Title>
       </Typography>
       </Header>
      <Content className='container'>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
      </Content>
     </Layout>
                         
     </>
   )

}
export default App;