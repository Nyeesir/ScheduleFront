import {NativeSelect} from "@mantine/core";

let mockAvailableSchedules = [
    {
        groupName: "Grypa tygodni",
        schedulues: [
            {
                schedName: "Semestr letni",
                id: 0
            },
            {
                schedName: "Semestr zimowy",
                id: 1
            }
        ]
    },
    {
        groupName: "Pojedyncze dni",
        schedulues: [
            {
                schedName: "24.02 - 2.03",
                id: 3
            },
            {
                schedName: "3.03 - 9.03",
                id: 4
            },
        ]
    }
];

export default function ScheduleTimePeriodPicker() {
    return (
        <NativeSelect label="Okreś okres" style={{width:'auto',float:'left'}}>
            {mockAvailableSchedules.map(group =>
                <optgroup label={group.groupName} key={group.groupName}>
                    {group.schedulues.map(schedulue =>
                        <option key={schedulue.id} value={schedulue.id}>{schedulue.schedName}</option>
                    )}
                </optgroup>
            )}
        </NativeSelect>
    )
}