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
  /* height:; */
  width: 100%;
  display: flex;
  flex-direction: row;
  `

export const DescriptionCardTask = styled.Text`
  background-color: #EFEFEF;
  padding: 15px;
  width: 100%;
  margin: 0 0 10px 0;
  border-radius: 5px;
`

export const DateCardTask = styled.Text`
  margin-top: 15px;
`

export const LineCardTask = styled.View`
  height: 100%;
  width: 5px;
  margin: 0 15px;
  background-color: #EFEFEF;
  /* border-radius: 5px; */
  align-items: center;
`
export const BollLine = styled.View`
  width: 15px;
  height: 15px;
  background-color: #EFEFEF;
  border-radius: 10px;
  margin-top: 19px;
`