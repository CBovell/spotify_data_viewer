import '../App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'




function Artists({token_, duration}){

    const [data, setData] = useState(null)
   



    useEffect(() =>{

        
    axios
    .get('https://api.spotify.com/v1/me/top/artists', {
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
                <Row xs = {1}md={1} lg={3} xxl={5} className='g-4'>
                    {data.map((artist) => (
                        <Col>
                            <Card onClick={e => onClick(artist.external_urls.spotify)} style={{ cursor: "pointer" }} >
                                <Card.Img variant="top" src={artist.images[0].url}/>
                                <Card.Body>
                                    <center><Card.Title>{artist.name}</Card.Title></center>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}



export default Artists