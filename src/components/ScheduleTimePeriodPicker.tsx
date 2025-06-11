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
        <div style={{width:'100%', float:'left'}}>
            {/*<NativeSelect label = "Grupa tygodni" data = {["Semestr letni","Semestr zimowy","Sesja","Sesja poprawkowa","Parzyste","Nieparzyste"]} />*/}
            {/*<NativeSelect label = "Grupa tygodni" data = {["Semestr letni","Semestr zimowy","Sesja","Sesja poprawkowa","Parzyste","Nieparzyste"]} />*/}
            {/*<NativeSelect label="Okreś okres" style={{width:'auto',float:'left'}}>*/}
            {/*    <optgroup label="Grupa tygodni">*/}
            {/*        <option value="semestrLetni">Semestr letni</option>*/}
            {/*        <option value="semestrZimowy">Semestr zimowy</option>*/}
            {/*        <option value="sesja">Sesja</option>*/}
            {/*        <option value="sesjaPorpawkowa">Sesja poprawkowa</option>*/}
            {/*        <option value="dniParzyste">Dni Parzyste</option>*/}
            {/*        <option value="dniNieparzyste">Dni Nieparzyste</option>*/}
            {/*    </optgroup>*/}
            {/*    <optgroup label="Pojedynczy tydzien">*/}
            {/*        <option value="24.02-2.03">24.02 - 2.03</option>*/}
            {/*        <option value="3.03">3.03 - 9.03</option>*/}
            {/*    </optgroup>*/}
            {/*</NativeSelect>*/}
            <NativeSelect label="Okreś okres" style={{width:'auto',float:'left'}}>
                {mockAvailableSchedules.map(group =>
                    <optgroup label={group.groupName} key={group.groupName}>
                        {group.schedulues.map(schedulue =>
                            <option key={schedulue.id} value={schedulue.id}>{schedulue.schedName}</option>
                        )}
                    </optgroup>
                )}
            </NativeSelect>
        </div>
    )
}