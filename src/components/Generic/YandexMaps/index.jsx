import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export const YandexMaps = () => {

    return (
        <YMaps>
            <Map width={'100%'} height={"50vh"} defaultState={{ center: [41.0032371, 71.7124887,], zoom: 10 }} />
            <Placemark geometry={[55.847973, 37.692542]}
            />
        </YMaps>

    )
}
