import {Text} from "@mantine/core";

export default function Header() {
    return <div style={{width:'100%', height:'60px'}}>
        <Text size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: 'blue', to: 'white', deg: 90 }}>
            Plan zajęć Uniwersytetu śląskiego
        </Text>
    </div>
}