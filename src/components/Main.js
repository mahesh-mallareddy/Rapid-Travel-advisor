import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header/Header';
import { Grid, List } from '@mui/material';
import Mapnavigation from './mapdata/Mapnavigatin';
import Listdata from './Listdata';
import { fetchUrl } from '../utils/fetchapi';
import Filter from './filter/Filter';

const Main = () => {
    const [traveldata, settraveldata] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})

    const [childClicked, setChildClicked] = useState(null);
    const [optiontype, setoptiontype] = useState('restaurants');
    const [isShimmer, setisShimmer] = useState(" ")
    
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [rating, setRating] = useState('')
    console.log(traveldata.length)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])

    useEffect(() => {
        const filteredPlaces = traveldata.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    useEffect(() => {
        if (bounds) {
            setisShimmer(true);
            fetchUrl(optiontype, bounds.sw, bounds.ne)
                .then((data) => {
                    settraveldata(data);
                    setFilteredPlaces([]);
                    setRating('');
                    setisShimmer(false);
                });
        }
    }, [bounds, optiontype]);

    return (
        <div>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Filter optiontype={optiontype} setoptiontype={setoptiontype}
                rating={rating} setRating={setRating} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <Listdata
                        traveldata={filteredPlaces.length ? filteredPlaces : traveldata}
                        childClicked={childClicked}
                        setoptiontype={setoptiontype}
                        optiontype={optiontype}
                        isShimmer={isShimmer}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Mapnavigation
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        traveldata={filteredPlaces.length ? filteredPlaces : traveldata}
                        setChildClicked={setChildClicked} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Main