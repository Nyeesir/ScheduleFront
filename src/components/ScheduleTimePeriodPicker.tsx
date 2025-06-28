import { NativeSelect } from "@mantine/core";
import { useEffect, useState } from 'react';
import { useSchedule } from './../ScheduleContext';


interface ScheduleData {
    periods: Period[];
    weeks: Period[];
}

interface Period {
  name: string;
  id: string;
}

export default function ScheduleTimePeriodPicker() {
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedSchedule, updateTimeGroup } = useSchedule();


  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/avaibleScheduleTimeGroups');
        const data: ScheduleData = await response.json();
        setScheduleData(data);
      } catch (error) {
        setError('Nie udało się pobrać danych. Spróbuj ponownie później.');
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (!scheduleData) {
    return <div>Brak dostępnych danych</div>;
  }

  return (
    <NativeSelect 
      label="Określ okres" 
      style={{ width: '40%', float: 'left' }}
      value={selectedSchedule?.timeGroup || '12'}
      onChange={(event) => updateTimeGroup(event.currentTarget.value)}
      disabled={!selectedSchedule}
    >
      <hr/>
      <optgroup label="Okresy">
        {scheduleData.periods.map(period => (
          <option key={period.id} value={period.id}>
            {period.name}
          </option>
        ))}
      </optgroup>
      <hr/>
      <optgroup label="Tygodnie">
        {scheduleData.weeks.map(week => (
          <option key={week.id} value={week.id}>
            {week.name}
          </option>
        ))}
      </optgroup>
    </NativeSelect>
  );
}