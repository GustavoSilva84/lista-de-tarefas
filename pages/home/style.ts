import styled from 'styled-components/native'

export const View = styled.View`
  flex: 1;
  display: flex;
  background-color: #FFFFFF;
`

export const ListTask = styled.ScrollView`
  padding: 0 10px;
`

export const CardTask = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  `

export const DescriptionCardTask = styled.Text`
  background-color: #f8f8f8;
  padding: 15px;
  width: 100%;
  margin: 0 0 10px 0;
  border-radius: 5px;
`

export const LineCardTask = styled.View`
  height: 100%;
  width: 5px;
  margin: 0 15px;
  background-color: #EFEFEF;
  align-items: center;
`
export const BollLine = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #EFEFEF;
  border-radius: 20px;
  margin: 5px 15px 0 0;
  align-items: center;
  justify-content: center;
`
export const Image = styled.Image`
  width: 15px;
  height: 15px;
`