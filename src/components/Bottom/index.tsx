import { useState } from 'react';
import { cardInfo, holidayDefault, DateContextType, DateContext } from '../../context/DateContextProvider';
import Calendar from '../Calendar';
import Card from '../Card';
import { DateContextProviderWrapper } from './style';

function Bottom() {

    const [dayNumber, setDayNumber] = useState(0);
    const [monthNumber, setMonthNumber] = useState(1);
    const [holiday, setHoliday] = useState<cardInfo>(holidayDefault);
    
    const value: DateContextType = { dayNumber, monthNumber, holiday, setDayNumber, setMonthNumber, setHoliday };
    return (
    <DateContextProviderWrapper>
        <DateContext.Provider value={value}>
            <Calendar/>
            <Card/>
        </DateContext.Provider>
    </DateContextProviderWrapper>
    );
  };

export default Bottom;