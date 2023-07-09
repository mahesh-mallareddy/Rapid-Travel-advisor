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
    const [isShimmer,setisShimmer] = useState(" ")
    const [rating,setRating] = useState('0')
    // console.log(rating)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
            console.log(latitude, longitude)
        })
    }, [])
    
    useEffect(() => {
        const filteredPlaces = places.filter((place) =>
          place.rating ? place.rating > rating : false
        );
        setFilteredPlaces(filteredPlaces);
      }, [rating]);

    useEffect(() => {
        setisShimmer(true)
        fetchUrl(optiontype,bounds.sw, bounds.ne)
            .then((data) => {
                settraveldata(data);
                setisShimmer(false);
            })
            .catch((err) => err.message)
    }, [optiontype, bounds])
    return (
        <div>
            <CssBaseline />
            <Header setCoordinates={setCoordinates}/>
            <Filter optiontype={optiontype} setoptiontype={setoptiontype}
            rating={rating} setRating={setRating}/>
            <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
                    <Listdata 
                    traveldata ={traveldata}
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
                            traveldata={traveldata}
                            setChildClicked={setChildClicked}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Main