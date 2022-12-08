import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import ProfileCard from './ProfileCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ProfileCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
