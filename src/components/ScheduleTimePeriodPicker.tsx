import {NativeSelect} from "@mantine/core";

export default function ScheduleTimePeriodPicker() {
    return (
        <div>
            {/*<NativeSelect label = "Grupa tygodni" data = {["Semestr letni","Semestr zimowy","Sesja","Sesja poprawkowa","Parzyste","Nieparzyste"]} />*/}
            {/*<NativeSelect label = "Grupa tygodni" data = {["Semestr letni","Semestr zimowy","Sesja","Sesja poprawkowa","Parzyste","Nieparzyste"]} />*/}
            <NativeSelect label="Okreś okres">
                <optgroup label="Grupa tygodni">
                    <option value="semestrLetni">Semestr letni</option>
                    <option value="semestrZimowy">Semestr zimowy</option>
                    <option value="sesja">Sesja</option>
                    <option value="sesjaPorpawkowa">Sesja poprawkowa</option>
                    <option value="dniParzyste">Dni Parzyste</option>
                    <option value="dniNieparzyste">Dni Nieparzyste</option>
                </optgroup>
                <optgroup label="Pojedynczy tydzien">
                    <option value="24.02-2.03">24.02 - 2.03</option>
                    <option value="3.03">3.03 - 9.03</option>
                </optgroup>
            </NativeSelect>
        </div>
    )
}