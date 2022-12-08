import { useEffect, useState } from 'react';

// material-ui
import { Card, CardContent, Grid, TextField, Button } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import CardView from './CardView';

// ==============================|| DEFAULT CardDrawPage ||============================== //

const CardDrawPage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const [data, setData] = useState([]);
    const [deckid, setDeckid] = useState('');
    // get dummy data
    const getDeckid = () => {
        axios.post('https://deckofcardsapi.com/api/deck/new/shuffle?deck_count=6').then((response) => {
            console.log(response);
            setDeckid(response.data.deck_id);
            // setData(response.data);
        });
    };
    // 3. call to get data
    useEffect(() => {
        getDeckid();
    }, []);
    const handleClick = () => {
        console.log(deckid);
        axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=12`).then((response) => {
            console.log(response);
            setData(response.data.cards);
        });
    };
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <CardContent>
                        <Button sx={{ height: '100%' }} variant="contained" onClick={handleClick}>
                            DRAW
                        </Button>
                        <Grid container spacing={gridSpacing} sx={{ mt: 3 }}>
                            {data.map((value, index) => {
                                return (
                                    <Grid key={index} item lg={3} md={4} sm={12} xs={12}>
                                        <CardView image={`${value.image}`} value={`${value.value}`} suit={`${value.suit}`} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CardDrawPage;
