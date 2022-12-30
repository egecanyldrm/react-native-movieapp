import React, { useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import MovieItem from '../components/MovieItem'
import { ResultType, IMovieData } from '../types'
type Props = {
    navigation: any
}

const Movie = ({ navigation }: Props) => {
    const [data, setData] = useState<null | IMovieData[]>(null);
    const [search, setSearch] = useState<null | IMovieData[]>(null);
    useEffect(() => {
        const handleGetData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6a36190fedc206b2be58a35c9b08e95`)
                setData(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        handleGetData()
    }, [])

    useEffect(() => {

        navigation.setOptions({
            headerTitle: 'Movies',
            headerSearchBarOptions: {
                placeholder: 'Search Movie',
                onChangeText: (event: any) => {
                    handleSearch(event.nativeEvent.text)
                }
            }
        })

    }, [navigation])

    const handleSearch = async (text: string) => {
        if (text.length === 0) setSearch(null)

        try {
            const res = await axios.get<ResultType>(`https://api.themoviedb.org/3/search/movie?api_key=b6a36190fedc206b2be58a35c9b08e95&query=${text}`);
            setSearch(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }


    const handleOnPress = (item: IMovieData) => {
        navigation.navigate('Movie Detail', {
            ...item
        });
    }

    if (!data) return null
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: search ? 100 : 160 }}>
            <FlatList
                data={search ? search : data}
                renderItem={({ item }) => (
                    <MovieItem
                        item={item}
                        handleOnPress={handleOnPress}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

export default Movie

