import React, { useEffect, useRef } from 'react';
import CastMember from './CastMember';
import '../styles/expanded_result_styles/CastCrewSlider.css';

export default function CastCrewSlider(props) {
    const slider = useRef(null);
    useEffect(() => {
        slider.current.scrollTo(0, 0);
    })

    return (
        <div ref={slider} className='cast-horiz-scroll d-flex flex-row'>
            {props.rawCastList.map((item, index) =>
                <CastMember key={index} index={index} data={item} handleChangeFocus={props.handleChangeFocus} />
            )}
        </div>
    );
}