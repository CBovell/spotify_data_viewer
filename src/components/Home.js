import '../App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function Home({token_, logout}){

    const [data, setData] = useState(null)
    const [playing, setPlaying] = useState(null)
   



    useEffect(() =>{

        
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer " + token_,
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

    },[token_])


    useEffect(() =>{

        
      axios
        .get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: "Bearer " + token_,
          },
        })
        .then((response) => {
          setPlaying(response.data.item)
          
          
          
        })
        .catch((error) => {
          console.log(error);
        });
  
      },[])

      function onClick(link){
        window.open(link)
      }
      
        return(
          <div className='cheese'>
            { data && <h1> Welcome, {data.display_name}</h1>}
            { data && <img src = {data.images[0].url} className='img-fluid rounded-pill'/> }<br />
            <Button variant="light" onClick={logout}>Logout</Button>{' '}
            {playing && 
            <center>
              <div>
                 <br />
                    Currently Playing
                    <Card className = "playCard" onClick={e => onClick(playing.external_urls.spotify)} style={{ cursor: "pointer", width: '20rem' }} >
                      <Card.Body>
                        <center>
                        <div><img src = {playing.album.images[2].url} className = "player" a/></div>
                        <div><h6>{playing.name}<br />{playing.album.name}<br /> {playing.album.artists[0].name}</h6></div>
                        </center>
                      </Card.Body>
                    </Card>
                </div>
              </center>
            }
          </div>
        )   
}

export default Home;