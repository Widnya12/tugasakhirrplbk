import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const CardView = ({ image, value, suit }) => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Card elevation={2} sx={{ ml: 2, mr: 2, mt: 2 }}>
            <CardMedia component="img" sx={{ height: '100%' }} image={image} alt="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {value} {suit}
                </Typography>
            </CardContent>
        </Card>
    );
};

CardView.propTypes = {
    isLoading: PropTypes.bool
};

export default CardView;
