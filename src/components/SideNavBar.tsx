import {Box, NavLink} from '@mantine/core';
import {useEffect, useState} from "react";
import {IconChevronRight, IconDoor, IconUser, IconUsers} from '@tabler/icons-react'

interface ScheduleTypesData {
    scheduleTypes: ScheduleTypeData[];
}

interface ScheduleTypeData {
    scheduleTypeName: string;
    scheduleTpeId: string;
}

interface ScheduleListData {
    items: ScheduleData[];
}

interface ScheduleData {
    name: string;
    id: string;
    type: string;
    hasSchedule: boolean;
    children: ScheduleData[];
}

export default function SideNavBar() {
    const [scheduleTypesData, setScheduleTypesData] = useState<ScheduleTypesData | null>(null);
    const [scheduleListsData, setScheduleListsData] = useState<Record<string, ScheduleListData>>({});
    const [isLoading, setIsLoading] = useState(true);
    // const [isListLoading, setIsListLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchScheduleTypes = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:8080/scheduleTypes');
                const data: ScheduleTypesData = await response.json();
                setScheduleTypesData(data);
            } catch (error) {
                setError('Nie udało się pobrać danych. Spróbuj ponownie później.');
                console.error('Błąd podczas pobierania danych:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchScheduleTypes();
    }, []);

    const addToScheduleLists = (key: string, newData: ScheduleListData) => {
        setScheduleListsData(prev => ({
            ...prev,
            [key]: newData
        }));
    };

    useEffect(() => {
        const fetchScheduleLists = async (id:string) => {
            try {
                const response = await fetch('http://localhost:8080/scheduleList?type='+id);
                const data: ScheduleListData = await response.json();
                addToScheduleLists(id, data)
            } catch (error) {
                setError('Nie udało się pobrać danych. Spróbuj ponownie później.');
                console.error('Błąd podczas pobierania danych:', error);
            }
        };

        fetchScheduleLists("1");
        fetchScheduleLists("2");
        fetchScheduleLists("3");
    }, []);
    
    const generateNav = (scheduleList: ScheduleData[]) => {
        if (!scheduleList) {
            return null;
        }
        
        return scheduleList.map(schedule => (
            <NavLink
                href="#"
                key={schedule.id}
                label={schedule.name}
                childrenOffset={12}
                rightSection={schedule.children ? <IconChevronRight size={16} stroke={2} className="mantine-rotate-rtl" /> : null}
            >
                {schedule.children && generateNav(schedule.children)}
            </NavLink>
        ));
    }

    const getIconForScheduleType = (typeName: string, size: number) => {
        switch (typeName.toLowerCase()) {
            case 'grupy':
                return <IconUsers size={size} />;
            case 'nauczyciele':
                return <IconUser size={size} />;
            case 'sale|zasoby':
                return <IconDoor size={size} />;
            default:
                return ;
        }
    };


    const items = scheduleTypesData?.scheduleTypes.map((scheduleType) => (
        <NavLink
            href="#"
            key={scheduleType.scheduleTpeId}
            label={scheduleType.scheduleTypeName}
            childrenOffset={28}
            leftSection={getIconForScheduleType(scheduleType.scheduleTypeName, 24)}
            rightSection={<IconChevronRight size={16} stroke={2} className="mantine-rotate-rtl" />}
        >
            {generateNav(scheduleListsData[scheduleType.scheduleTpeId]?.items)}
        </NavLink>
    ));

    if (isLoading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    if (!scheduleTypesData) {
        return <div>Brak dostępnych danych</div>;
    }
    
    return (
        <Box style={{overflowY: "scroll", overflowX: "scroll"}}>{items}</Box>
    );
}