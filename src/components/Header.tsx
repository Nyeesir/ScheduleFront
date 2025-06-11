import {Text} from "@mantine/core";
import { useMantineTheme } from '@mantine/core';


export default function Header() {
    const theme = useMantineTheme();
    
    return <div>
        <Text size="xl"
              fw={900}
              variant="gradient" 
              gradient={{ from: theme.colors.blue[1], to: theme.colors.blue[8], deg: 90 }}>
            Plan zajęć Uniwersytetu śląskiego - Wydział Nauk Ścisłych i Technicznych
        </Text>
    </div>
}