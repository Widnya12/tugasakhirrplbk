import { useEffect, useState } from 'react';

// material-ui
import { Card, CardContent, Grid, TextField, Button } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import CardView from './CardView';

// ==============================|| DEFAULT CardListPage ||============================== //

const CardListPage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const [data, setData] = useState([]);
    const [deckid, setDeckid] = useState('');
    // get dummy data
    const getDeck = () => {
        axios.post('https://deckofcardsapi.com/api/deck/new/').then((response) => {
            console.log(response);
            // setData(response.data);
            axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=52`).then((response) => {
                console.log(response);
                setData(response.data.cards);
            });
        });
    };
    // 3. call to get data
    useEffect(() => {
        getDeck();
    }, []);
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 3 }}>
                            {data.map((value, index) => {
                                return (
                                    <Grid key={index} item lg={2} md={6} sm={12} xs={12}>
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

export default CardListPage;
