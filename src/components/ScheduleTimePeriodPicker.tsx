import { NativeSelect } from "@mantine/core";
import { useEffect, useState } from 'react';
import { useSchedule } from './../ScheduleContext';


interface TimeGroupsData {
    periods: Period[];
    weeks: Period[];
}

interface Period {
    name: string;
    id: string;
}

export default function ScheduleTimePeriodPicker() {
  const [timeGroupsData, setTimeGroupsData] = useState<TimeGroupsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedSchedule, updateTimeGroup } = useSchedule();

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/avaibleScheduleTimeGroups');
        const data: TimeGroupsData = await response.json();
        setTimeGroupsData(data);
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

  if (!timeGroupsData) {
    return <div>Brak dostępnych danych</div>;
  }

  return (
    <NativeSelect 
      label="Określ okres" 
      style={{ width: '40%', float: 'left' }}
      value={selectedSchedule?.timeGroup || 'period_12'}
      onChange={(event) => updateTimeGroup(event.currentTarget.value)}
      disabled={!timeGroupsData}
    >
      <hr/>
      <optgroup label="Okresy">
        {timeGroupsData.periods.map(period => (
          <option key={"period_"+period.id} value={"period_"+period.id}>
            {period.name}
          </option>
        ))}
      </optgroup>
      <hr/>
      <optgroup label="Tygodnie">
        {timeGroupsData.weeks.map(week => (
          <option key={"week_"+week.id} value={"week_"+week.id}>
            {week.name}
          </option>
        ))}
      </optgroup>
    </NativeSelect>
  );
}