import "@mantine/core/styles.css";
import {AppShell, Burger, Group, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import {useDisclosure} from "@mantine/hooks";
import {IconCalendarEvent} from "@tabler/icons-react";
import Header from "./components/Header.tsx";
import SideNavBar from "./components/SideNavBar.tsx";
import MainContentWindow from "./components/MainContentWindow.tsx";

export default function App() {
    const [opened, { toggle }] = useDisclosure();
    
    return <MantineProvider theme={theme} defaultColorScheme="dark">
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <IconCalendarEvent size={30} />
                    <Header/>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <SideNavBar/>
            </AppShell.Navbar>
            <AppShell.Main>
                <MainContentWindow/>
            </AppShell.Main>
        </AppShell>
    </MantineProvider>;
}
