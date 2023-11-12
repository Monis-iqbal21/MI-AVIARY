import React from 'react';

const Map = () => {
    return (
            <iframe
                className='map_css'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.348585711422!2d67.02776823880582!3d24.920192183710007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff3cefa1805%3A0x1637e4203dde16f6!2sAbbasi%20Shaheed%20Hospital%20-%20KMC!5e0!3m2!1sen!2s!4v1697540387432!5m2!1sen!2s"
                width="80%"
                height="300"
                frameBorder="0"
                style={{ border: 0, margin: "0 0 0 10%" }}  // Center the iframe horizontally
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
    );
};

export default Map;
