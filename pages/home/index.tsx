import {
  useState
} from "react";

import { 
  View,
  ListTask,
  CardTask,
  DescriptionCardTask,
  BollLine,
  Image
} from "./style";

import { 
  Text
} from 'react-native';

interface item {
  description: string;
  select: boolean;
  day: number;
}

export default function Home() {

  const [ dataListTask, setDataListTask ] = useState<Array<item>>([
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
    }
  ]);

  function selectTask(id: number) {

    let newDate = dataListTask;
    newDate[id].select = !dataListTask[id].select;
    setDataListTask([...newDate]);

  }

  return (
    <View>         
      <ListTask>

        {dataListTask.map((data, key) => {

          return (
            <CardTask key={key}>

              <BollLine 
                style={{ 
                  backgroundColor: data.select ? "#00FF94" : "#f8f8f8"
                }}
                onPress={() => selectTask(key)}
              >

                {data.select 
                  ? <Image style={{ resizeMode: "contain" }}source={require("../../assets/certo.png")}/>
                  : <Text> {data.day} </Text>
                }

              </BollLine>
              <DescriptionCardTask> Lorem ipsum dolor sit amet consec. </DescriptionCardTask>
            </CardTask>
          )

        })}

      </ListTask>
    </View>
  )

}