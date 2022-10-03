import '../App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'




function Songs({token_, duration}){

    const [data, setData] = useState(null)




    useEffect(() =>{

        
    axios
      .get('https://api.spotify.com/v1/me/top/tracks', {
        params:{
          limit: 50,
          time_range: duration
        },
        headers: {
          Authorization: "Bearer " + token_,
        }
        
      })
      .then((response) => {
        setData(response.data.items)
    
      })
      .catch((error) => {
        console.log(error);
      });

    


    },[duration])


    function onClick(link){
      window.open(link)
    }
    

    if (data){
        return(
            <div className='artists' a>
                <Row xs={1} sm={1} md={1} xl={1} xxl={3} className='g-4'>
                    {data.map((item) => (
                        <Col>
                            <Card onClick={e => onClick(item.external_urls.spotify)}  style={{ cursor: "pointer" }}>
                                <Card.Img className = "songimg" a variant="top" src={item.album.images[0].url}/>
                                <Card.Body>
                                    <center><Card.Title>{item.name}</Card.Title></center>
                                    <center><Card.Text>{item.album.name}</Card.Text></center>
                                    <center><Card.Text>{item.artists[0].name}</Card.Text></center>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}



export default Songs