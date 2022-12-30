import styled from 'styled-components/native'



export const Row = styled.View({
  flex: props => props?.size ? props.size : 1,
  flexDirection: 'row',
  justifyContent: props => props?.justifyContent ? props?.justifyContent : '',
  backgroundColor: props => props.bgColor

});
export const Column = styled.View({
  flex: props => props?.size ? props.size : 1,
  flexDirection: 'column',
  backgroundColor: props => props.bgColor

});
export const Col = styled.View({
  flex: props => props.size,
  backgroundColor: props => props.bgColor,
});

export const Container = styled.View({
  flex: props => props.size,
  backgroundColor: props => props.bgColor
});
export const ListRow = styled.View({
  flex: 1,
  flexDirection: 'row',
  width: '100%',
  height: 190,
  paddingVertical: 4,
  marginVertical :5
});



export const CenteredView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});


export const MovieItemImage = styled.Image({
  width: '70%',
  height: '100%',
  resizeMode: 'stretch',
  border: 1,
  borderColor: 'transparent',
  borderRadius: 12,
});

export const MovieContent = styled.View({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: 14,
})


// ** Movie Detail Page ** // 





export const MovieDetailPoster = styled.View({
  flex: 2
});

export const DetailTitle = styled.Text(
  {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: props => props?.textAlign ? props.textAlign : 'center',
    marginVertical: 8,
    marginHorizontal: props => props?.marginX ? props.marginX : 3
  }
)

export const DetailContent = styled.Text({
  fontSize: 14,
  color: 'grey',
  textAlign: props => props?.textAlign ? props.textAlign : 'center',
  marginHorizontal: props => props?.marginX ? props.marginX : 3
})