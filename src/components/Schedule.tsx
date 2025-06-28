import { useSchedule } from './../ScheduleContext';

export default function Schedule() {
    const { selectedSchedule } = useSchedule();

    if (!selectedSchedule) {
        return <div>Wybierz harmonogram</div>;
    }

    return (
        <div>
            <h2>{selectedSchedule.id}</h2>
            <h2>{selectedSchedule.type}</h2>
            <h2>{selectedSchedule.timeGroup}</h2>
        </div>
    );
}
