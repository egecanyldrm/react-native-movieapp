import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Col, DetailTitle, Row, DetailContent, Container, Column } from '../style'
import { ICast, MovieDetailState } from '../types'



const MovieDetailContent = ({ detail }: { detail: MovieDetailState | null }) => {
    const cast = detail?.cast.cast.splice(0, 10);
    return (
        <Container size={3}>
            <Row justifyContent='space-evenly' alignItems='center' size={1}>
                <View>
                    <DetailTitle>Duration</DetailTitle>
                    <DetailContent marginHorizontal={12}>{detail?.details?.runtime} Minute</DetailContent>
                </View>
                <View>
                    <DetailTitle>Genres</DetailTitle>
                    <DetailContent>{detail?.details.genres[0]?.name}, {detail?.details.genres[1]?.name}</DetailContent>
                </View>
                <View>
                    <DetailTitle>Language</DetailTitle>
                    <DetailContent>{detail?.details.spoken_languages[0].english_name}</DetailContent>
                </View>
            </Row>
            <Column size={1}>
                <Col>
                    <DetailTitle marginX={20} textAlign='start'>Synopsis</DetailTitle>
                </Col>
                <Col>
                    <DetailContent marginX={20} textAlign='start'>{detail?.details.overview} </DetailContent>
                </Col>
            </Column>
            <Column size={3} >
                <View>
                    <Text style={style.title}>Main Cast</Text>
                </View>
                <View>
                    <ScrollView horizontal>
                        {cast?.map((cast: ICast) => {
                            const url = cast.profile_path ?
                                { uri: `https://image.tmdb.org/t/p/w185/${cast.profile_path}` }
                                : require('../utility/UserThumbnail.png')
                            return (
                                <View style={style.castCard}>
                                    <View style={style.castImage}>
                                        <Image style={style.image} source={url} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text> {cast.name || cast.original_name}</Text>
                                    </View>

                                </View>
                            )
                        }
                        )
                        }
                    </ScrollView>
                </View>
            </Column>
        </Container >
    )
}

export default MovieDetailContent

const style = StyleSheet.create({
    castCard: {
        flex: 1,
        width: 100,
        height: 200,
        marginHorizontal: 10
    }, castImage: {
        flex: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        border: 1,
        borderColor: 'transparent',
        borderRadius: 10
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'start',
        marginVertical: 12,
        marginLeft: 20
    }
})