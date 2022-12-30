import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { CenteredView, Col, ListRow, MovieContent, MovieItemImage, Row, } from '../style'
import { IMovieData } from '../types'


const MovieItem = ({ item, handleOnPress }: { item: IMovieData, handleOnPress: (item: IMovieData) => void }) => {
    return (
        <Pressable onPress={() => { handleOnPress(item) }}>
            <View style={style.listRow}>
                <Col size={2}  >
                    <CenteredView>
                        <MovieItemImage source={{ uri: `https://image.tmdb.org/t/p/w154${item.poster_path}` }} />
                    </CenteredView>
                </Col>
                <Col size={3} >
                    <MovieContent >
                        <View>
                            <Text style={{ fontWeight: '800', fontSize: 16 }}> {item.original_title || item.title} </Text>
                            <Text style={{ marginTop: 6 }}> {item.release_date} | {item.original_language.toUpperCase()} </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: '600' }}> {item.vote_average}/10 </Text>
                        </View>
                    </MovieContent>
                </Col>
            </View>
        </Pressable>
    )
}
export default MovieItem

const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 190,
        paddingVertical: 4,
        marginVertical: 5
    }
})