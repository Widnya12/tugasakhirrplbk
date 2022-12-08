// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import './About.css';

// ==============================|| SAMPLE PAGE ||============================== //

const AboutPage = () => (
    <MainCard title="Tentang Aplikasi">
        <h4>About app</h4>
        <div className="about grid-container">
            <img
                src="https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-pack-of-playing-cards-png-image_4669810.png"
                alt="author pic"
            />
            <p> List Card adalah webstite sederhana berisikan List Kartu Bridge (kartu remi). </p>
            <p> Aplikasi ini kami buat untuk memenuhi Tugas Akhir RPLBK. </p>
        </div>
    </MainCard>
);

export default AboutPage;
