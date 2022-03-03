import React, { useEffect, useRef } from 'react';
import CastMember from './CastMember';
import '../styles/expanded_result_styles/CastCrewSlider.css';

export default function CastCrewSlider(props) {
    const slider = useRef(null);

    useEffect(() => {
        slider.current.scrollTo(0, 0);
    });

    function limitCastCrewSize(arr) {
        const sizeLimit = 50;
        return arr.slice(0, sizeLimit);
    }

    const slicedCastCrew = limitCastCrewSize(props.rawCastList);

    return (
        <div ref={slider} className='cast-horiz-scroll d-flex flex-row'>
            {slicedCastCrew.map((item, index) =>
                <CastMember key={index} index={index} data={item} handleChangeFocus={props.handleChangeFocus} cast={item.job ? true : false} />
            )}
        </div>
    );
}