import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { Container, MovieDetailPoster } from '../style'
import { ICastRoot, IMovieData, IMovieDetail, MovieDetailState } from '../types'
import MovieDetailContent from './MovieDetailContent'
import { useNavigation } from '@react-navigation/native';

type Props = {
    navigation: object,
    route: {
        params: IMovieData
    }
}

const MovieDetail = (props: Props) => {
    const { title, original_title, backdrop_path, id } = props.route.params;

    const [detail, setDetail] = useState<null | MovieDetailState>(null);
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({ title: title || original_title })
        handleGetDetail();
    }, [])

    const handleGetDetail = async () => {
        try {
            const response = await axios.get<IMovieDetail>(`https://api.themoviedb.org/3/movie/${id}?api_key=b6a36190fedc206b2be58a35c9b08e95`)
            const cast = await axios.get<ICastRoot>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b6a36190fedc206b2be58a35c9b08e95`)
            setDetail({
                details: response.data,
                cast: cast.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (!detail) return null

    return (
        <Container size={1} bgColor='white'>
            <MovieDetailPoster>
                <ImageBackground
                    source={{ uri: `https://image.tmdb.org/t/p/w780/${backdrop_path}` }}
                    style={style.ImageBackground}
                    imageStyle={style.IBackgroundImage}
                >
                    <Text style={style.text}> {title || original_title}</Text>
                </ImageBackground>
            </MovieDetailPoster>
            <MovieDetailContent detail={detail} />
        </Container>
    )
}

export default MovieDetail


const style = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 32,
        lineHeight: 44,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    IBackgroundImage: {
        resizeMode: 'cover',
    }
});