import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header/Header';
import { Grid, List } from '@mui/material';
import Mapnavigation from './mapdata/Mapnavigatin';
import Listdata from './Listdata';
import { fetchUrl } from '../utils/fetchapi';

const Main = () => {
    const [traveldata, settraveldata] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
            console.log(latitude, longitude)
        })
    }, [])
// const cords = {lat: 17.5008826, lng: 78.4567522}
    // console.log(coordinates)
    useEffect(() => {
        fetchUrl(bounds.sw, bounds.ne)
            .then((data) => {
                settraveldata(data)
            })
            .catch((err) => err.message)
    }, [coordinates, bounds])

    console.log(traveldata)
    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <Listdata traveldata ={traveldata} />
                </Grid>
                <Grid item xs={12} md={8}>
                        <Mapnavigation
                            setCoordinates={setCoordinates}
                            setBounds={setBounds} 
                            coordinates={coordinates}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Main