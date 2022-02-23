import React, {
  useState
} from "react";

import { 
  View,
  ListTask,
  CardTask,
  DescriptionCardTask,
  Boll,
  Image,
  Filter,
  ImageArrow,
  ButtonArrow,
  TextFilterDate
} from "./style";

import { 
  Text,
  StatusBar
} from 'react-native';

import NavBar from "../../components/navBar/index";

interface InterfaceDataListTask {
  description: string;
  select: boolean;
  day: number;
}

export default function Home() {

  const [dateFilter, setDateFilter] = useState("22/02/2022")
  const [ dataListTask, setDataListTask ] = useState<Array<InterfaceDataListTask>>([
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 13
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: false,
      day: 20
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 15
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 28
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 13
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: false,
      day: 20
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 15
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 28
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 13
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: false,
      day: 20
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 15
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 28
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 13
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: false,
      day: 20
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 15
    },
    { 
      description: 'Lorem ipsum dolor sit amet consec.',
      select: true,
      day: 28
    },
  ]);

  function selectTask(id: number) {

    let newDate = dataListTask;
    newDate[id].select = !dataListTask[id].select;
    setDataListTask([...newDate]);

  }

  function date() {
    
  }

  return (
    <View>  

      <StatusBar
        backgroundColor="#00f891"
        barStyle="light-content"
      />    

      <Filter>

        <ButtonArrow>
          <ImageArrow 
            style={{ resizeMode: "contain" }} 
            source={require("./img/arrow.png")}
          />
        </ButtonArrow>

        <TextFilterDate> 12/02/2022 </TextFilterDate>

        <ButtonArrow>
          <ImageArrow 
            style={{ resizeMode: "contain", transform: [{ scale: -1 }]}}
            source={require("./img/arrow.png")}
          />
        </ButtonArrow>

      </Filter>

      <ListTask>

        {dataListTask.map((data, key) => {

          return (
            <CardTask key={key}>

              <Boll
                style={{ 
                  backgroundColor: data.select ? "#00FF94" : "#f8f8f8"
                }}
                tvParallaxProperties={{
                  pressDuration: 10
                }}
                onPress={() => selectTask(key)}
              >

                {data.select 
                  ? <Image style={{ resizeMode: "contain" }}source={require("../../assets/certo.png")}/>
                  : <Text> {data.day} </Text>
                }

              </Boll>
              <DescriptionCardTask> Lorem ipsum dolor sit amet consec. </DescriptionCardTask>
            </CardTask>
          )

        })}

      </ListTask>

      <NavBar/>
    </View>
  )

}