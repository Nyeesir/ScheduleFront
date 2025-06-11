import "@mantine/core/styles.css";
import {Grid, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import SideNavBar from "./components/SideNavBar.tsx";
import Header from "./components/Header.tsx";
import Schedule from "./components/Schedule.tsx";

export default function App() {
  return <MantineProvider theme={theme} defaultColorScheme="dark">
    {/*<Grid grow={true}>*/}
    {/*    <Grid.Col span={12}><Header /></Grid.Col>*/}
    {/*    <Grid.Col span={2}><SideNavBar /></Grid.Col>*/}
    {/*    <Grid.Col span={10}><Schedule/></Grid.Col>*/}
    {/*</Grid>*/}
      
      <div>
          <Header/>
          <SideNavBar/>
          <Schedule/>
      </div>
  </MantineProvider>;
}
