import ScheduleTimePeriodPicker from "./ScheduleTimePeriodPicker.tsx";
import MainScheduleWindow from "./MainScheduleWindow.tsx";
import {Stack} from "@mantine/core";

export default function MainContentWindow() {
    return (
        <Stack
        gap = "md"
        align = "flex-start"
        bg = "var(--mantine-color-body)">
            <ScheduleTimePeriodPicker/>
            <MainScheduleWindow/>
        </Stack>
    )
}