import { useSchedule } from './../ScheduleContext';
import {useState, useEffect} from "react";

interface CalendarEventDataDTO {
    start: string;
    end: string;
    timestamp: string;
    summary: string;
    uid: string;
    status: string;
}

// Interfejs używany w aplikacji
interface CalendarEventData {
    start: Date;
    end: Date;
    timestamp: Date;
    summary: string;
    uid: string;
    status: string;
}

// Interfejs dla całego planu zajęć
interface ScheduleDataDTO {
    name: string;
    version: string;
    events: CalendarEventDataDTO[];
    timezone: string;
}

interface ScheduleData {
    name: string;
    version: string;
    events: CalendarEventData[];
    timezone: string;
}



export default function Schedule() {
    const { selectedSchedule } = useSchedule();
    const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const convertEventDates = (eventDTO: CalendarEventDataDTO): CalendarEventData => {
        return {
            ...eventDTO,
            start: new Date(eventDTO.start),
            end: new Date(eventDTO.end),
            timestamp: new Date(eventDTO.timestamp)
        };
    };

    const convertSchedule = (scheduleDTO: ScheduleDataDTO): ScheduleData => {
        return {
            ...scheduleDTO,
            events: scheduleDTO.events.map(convertEventDates)
        };
    };


    useEffect(() => {
        const fetchSchedule = async () => {
            if (!selectedSchedule) return;
            
            setIsLoading(true);
            setError(null);
            
            try {
                let timeGroupData = selectedSchedule.timeGroup.split("_")
                const response = await fetch(`http://localhost:8080/schedule?id=${selectedSchedule.id}&type=${selectedSchedule.type}&time-group=${timeGroupData[1]}&time-group-type=${timeGroupData[0]}`);
                const rawData: ScheduleDataDTO = await response.json();
                const convertedData = convertSchedule(rawData);
                setScheduleData(convertedData);
                console.log(scheduleData);
            } catch (error) {
                setError('Nie udało się pobrać harmonogramu. Spróbuj ponownie później.');
                console.error('Błąd podczas pobierania harmonogramu:', error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchSchedule().then(() => {scheduleData && filterSchedule(scheduleData)});
    }, [selectedSchedule]);


    const filterSchedule = (schedule: ScheduleData) => {
        if (selectedSchedule.timeGroup.startsWith("period")) {
            console.log(schedule);
        }
    }

    if (!selectedSchedule) {return <div></div>;}
    if (isLoading) return <div>Ładowanie...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>{selectedSchedule.id}</h2>
            <h2>{selectedSchedule.type}</h2>
            <h2>{selectedSchedule.timeGroup}</h2>
        </div>
    );
}