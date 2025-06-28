import {Box, NavLink} from '@mantine/core';
import {useEffect, useState} from "react";
// import {IconDoor, IconUser, IconUsers} from '@tabler/icons-react'
// import {IconCategory, IconGauge} from '@tabler/icons-react';

interface ScheduleTypesData {
    scheduleTypes: ScheduleTypeData[];
}

interface ScheduleTypeData {
    scheduleTypeName: string;
    scheduleTpeId: string;
}

interface ScheduleListsData {
    scheduleLists: Map<string,  ScheduleTypesData>;
}

interface ScheduleListData {
    scheduleList: ScheduleData[];
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
    const [isListLoading, setIsListLoading] = useState(true);
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

    if (isLoading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    if (!scheduleTypesData) {
        return <div>Brak dostępnych danych</div>;
    }

    const addToScheduleLists = (key: string, newData: ScheduleListData) => {
        setScheduleListsData(prev => ({
            ...prev,
            [key]: newData
        }));
    };


    let fetchScheduleListData = async (id) => {
        try {
            setIsListLoading(true);
            const response = await fetch('http://localhost:8080/scheduleList?type='+id);
            const data: ScheduleTypesData = await response.json();
            addToScheduleLists(id, data)
        } catch (error) {
            setError('Nie udało się pobrać danych. Spróbuj ponownie później.');
            console.error('Błąd podczas pobierania danych:', error);
        } finally {
            setIsListLoading(false);
        }
    }

    const generateNavChildren = (scheduleList: ScheduleData) => {
        if (!scheduleList?.children) {
            return null;
        }


        return scheduleList.children.map(child => (
            <NavLink
                href="#"
                key={child.id}
                label={child.name}
                childrenOffset={8}
            >
                {child && generateNavChildren(child)}
            </NavLink>
        ));
    };

    const items = scheduleTypesData.scheduleTypes.map((scheduleType) => (
        <NavLink
            href="#"
            key={scheduleType.scheduleTpeId}
            label={scheduleType.scheduleTypeName}
            childrenOffset={28}
            onClick={() => fetchScheduleListData(scheduleType.scheduleTpeId)}
        >
            {scheduleListsData[scheduleType.scheduleTpeId]?.items.map(scheduleList => (
                <NavLink
                    href="#"
                    key={scheduleList.id}
                    label={scheduleList.name}
                    childrenOffset={8}
                >
                    {scheduleList.children && generateNavChildren(scheduleList)}
                </NavLink>
            ))}
        </NavLink>
    ));

    
    return (
        <Box>{items}</Box>
    );
}