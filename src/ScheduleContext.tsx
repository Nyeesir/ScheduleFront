import { createContext, useContext, ReactNode, useState } from 'react';

export interface ScheduleIdentifier {
    id: string;
    type: string;
    timeGroup: string;
}

interface ScheduleContextType {
    selectedSchedule: any | ScheduleIdentifier;
    setSelectedSchedule: (schedule: any) => void;
    updateTimeGroup: (newTimeGroup: string) => void;

}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export function ScheduleProvider({ children }: { children: ReactNode }) {
    const [selectedSchedule, setSelectedSchedule] = useState<any | null>(null);

    const updateTimeGroup = (newTimeGroup: string) => {
        if (selectedSchedule) {
            setSelectedSchedule({
                ...selectedSchedule,
                timeGroup: newTimeGroup
            });
        }
    };


    return (
        <ScheduleContext.Provider value={{ selectedSchedule, setSelectedSchedule, updateTimeGroup }}>
            {children}
        </ScheduleContext.Provider>
    );
}

export function useSchedule() {
    const context = useContext(ScheduleContext);
    if (context === undefined) {
        throw new Error('useSchedule must be used within a ScheduleProvider');
    }
    return context;
}