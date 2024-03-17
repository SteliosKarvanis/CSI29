import React from 'react';
import { VerticalCardProps } from '@/lib/types';

export const VerticalCard = (props: VerticalCardProps): JSX.Element => {
    const address = `${props.city}, ${props.county}`;
    const price = `R$ ${props.price.toFixed(2)}`;
    const pricePerSquareMeter = `Valor do m2 R$ ${props.pricePerSquareMeter.toFixed(2)}`;
    return (
        <div style={{ width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.08)', borderRadius: '20px', overflow: 'hidden', border: '1px black solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={props.imgSrc} />
            <div style={{ alignSelf: 'stretch', height: '186px', paddingTop: '10px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '50px', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', height: '53px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '5px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>{address}</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>{props.street}</div>
                </div>
                <div style={{ alignSelf: 'stretch', height: '53px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '5px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>{price}</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>{pricePerSquareMeter}</div>
                </div>
            </div>
        </div>
    );
}