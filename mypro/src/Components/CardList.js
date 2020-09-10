import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from 'antd';
import '../App.css';
const {Title} = Typography
const Card = props => {
  const {avatar_url,html_url,name,bio,followers,following,public_repos,public_gists} = props
    return (
      <div id="box">
    <div className="card">
      <div style={{padding:'10px'}}>
    <img alt="avatar" src={avatar_url} className="cardimage"></img>
  <div style={{
    padding:'10px',
      marginLeft:'10%',
      width:'300px',
      float:'right'
  }} className="wrapper">
  <span>PublicRepos : {public_repos}</span>
  <span style={{ marginLeft:'10px'
  }}>PublicGists : {public_gists}</span>
  <br />
  <br />
  <span>Followers : {followers}</span>
  <span style={{ marginLeft:'15px'
  }}>Following : {following}</span>
  </div>  
 <div style={{dipslay:'block',marginLeft:'10px',marginTop:'10px'}}>
          <div style={{ fontWeight: 'bold',color:'white' }} className="card_name">
               <Typography><a href={html_url}><Title level={3}>{name}</Title></a></Typography>
            </div>
          <div>{bio}</div>
        </div>
        </div>
    </div>
    </div>
    )
  }
  const CardList = ({cards}) => <div className="cardlist" >{cards.map((card,index)=> <Card key={index} {...card} />).sort((a,b)=> a.id>b.id)}</div>
  
  CardList.propTypes = {
    cards:PropTypes.array.isRequired,
    
  }
export default CardList;