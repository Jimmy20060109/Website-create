import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID OoTw6i8LbWqlC_9vjZKxhMfLv2r3CsH1xLbmUZs1jRA'
        },
        params: {
            query: term,
        }
    })
    
    return response.data.results;
}

export default searchImages;

