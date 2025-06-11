import ScheduleTimePeriodPicker from "./ScheduleTimePeriodPicker.tsx";
import Schedule from "./Schedule.tsx";
import {Stack} from "@mantine/core";

export default function MainContentWindow() {
    return (
        <Stack
        gap = "md"
        bg = "var(--mantine-color-body)">
            <ScheduleTimePeriodPicker/>
            <Schedule/>
        </Stack>
    )
}