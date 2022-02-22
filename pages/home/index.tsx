import { 
  View,
  ListTask,
  CardTask,
  DescriptionCardTask,
  DateCardTask,
  LineCardTask,
  BollLine
} from "./style";



export default function Home() {

  return (
      <View>        
        <ListTask>

          <CardTask>
            <DateCardTask> 17 </DateCardTask>
            <LineCardTask style={{ backgroundColor: "#00FF94" }}>
              <BollLine style={{ backgroundColor: "#00FF94" }}/>
            </LineCardTask>
            <DescriptionCardTask> Lorem ipsum dolor sit amet consec. </DescriptionCardTask>
          </CardTask>

          <CardTask>
            <DateCardTask> 17 </DateCardTask>
            <LineCardTask style={{ backgroundColor: "#00FF94", borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>
              <BollLine style={{ backgroundColor: "#00FF94" }}/>
            </LineCardTask>
            <DescriptionCardTask> Lorem ipsum dolor sit amet consec. </DescriptionCardTask>
          </CardTask>

          <CardTask>
            <DateCardTask> 17 </DateCardTask>
            <LineCardTask>
              <BollLine/>
            </LineCardTask>
            <DescriptionCardTask> Lorem ipsum dolor sit amet consec. </DescriptionCardTask>
          </CardTask>
         
        </ListTask>
      </View>
  )

}