import { useContext, useEffect, useState } from 'react';
import calendarButton from '../../assets/calendarButton.png';
import { cardInfo, DateContext, holidayDefault, holidayNull } from '../../context/DateContextProvider';
import CalendarServices from '../../services/CalendarServices';
import { CalendarWrapper, CalendarHeader, CalendarButtonLeft, CalendarButtonLeftOff, CalendarHeaderTitle, CalendarButtonRight, CalendarButtonRightOff, CalendarWeekWrapper, CalendarDay, CalendarDayNumberOff, CalendarDayNumberOn, CalendarDayNumber } from './style';

const range = (inicio: number, fim: number) => Array.from(Array(fim - inicio + 1).keys()).map(x => x + inicio);

type month = {
    title : string,
    numberOfDays : number,
    firstDayOfWeek : number
};

const months : month[] = [
    {
        title : "Dezembro 2022",
        numberOfDays : 31,
        firstDayOfWeek : 5
    },
    {
        title : "Janeiro 2023",
        numberOfDays : 31,
        firstDayOfWeek : 1
    },
    {
        title : "Fevereiro 2023",
        numberOfDays : 28,
        firstDayOfWeek : 4
    },
    {
        title : "Março 2023",
        numberOfDays : 31,
        firstDayOfWeek : 4
    },
    {
        title : "Abril 2023",
        numberOfDays : 30,
        firstDayOfWeek : 7
    },
    {
        title : "Maio 2023",
        numberOfDays : 31,
        firstDayOfWeek : 2
    },
    {
        title : "Junho 2023",
        numberOfDays : 30,
        firstDayOfWeek : 5
    },
    {
        title : "Julho 2023",
        numberOfDays : 31,
        firstDayOfWeek : 7
    },
    {
        title : "Agosto 2023",
        numberOfDays : 31,
        firstDayOfWeek : 3
    },
    {
        title : "Setembro 2023",
        numberOfDays : 30,
        firstDayOfWeek : 6
    },
    {
        title : "Outubro 2023",
        numberOfDays : 31,
        firstDayOfWeek : 1
    },
    {
        title : "Novembro 2023",
        numberOfDays : 30,
        firstDayOfWeek : 4
    },
    {
        title : "Dezembro 2023",
        numberOfDays : 31,
        firstDayOfWeek : 6
    }
];

function Calendar() {

    const { dayNumber, monthNumber, setDayNumber, setMonthNumber, setHoliday } = useContext(DateContext);
    const [holidays, setHolidays] = useState<cardInfo[]>([holidayDefault]);

    useEffect(() => {
        CalendarServices.getHolidaysCalendar('BR', '2023', '', '', 'c830eba06186831261fab92aa4b6325727b35a8e').then(response => {
            setHolidays(response?.data.response.holidays);
        })
    }, [])

/*     const holidaysDummy : cardInfo[] = [
        {
            name: 'Null',
            description: 'Null',
            date: {
                datetime : {
                    day: 0,
                    month: 0,
                    year: 0,
                }
            }
        },
        {
            name: 'New Years Day',
            description: 'New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.',
            date: {
                datetime : {
                    day: 1,
                    month: 1,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival Monday',
            description: 'Carnival Friday is a observance in Brazil.',
            date: {
                datetime : {
                    day: 20,
                    month: 2,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival Tuesday',
            description: 'Carnival Saturday is a observance in Brazil.',
            date: {
                datetime : {
                    day: 21,
                    month: 2,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival End',
            description: 'Carnival Monday is a observance in Brazil.',
            date: {
                datetime : {
                    day: 22,
                    month: 2,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival Tuesday',
            description: 'Carnival Friday is a observance in Brazil.',
            date: {
                datetime : {
                    day: 20,
                    month: 2,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival end (until 2pm)',
            description: 'Ash Wednesday marks the first day of Lent in western Christian churches.',
            date: {
                datetime : {
                    day: 21,
                    month: 2,
                    year: 2023,
                }
            }
        },
    ];

    useEffect(() => {setHolidays(holidaysDummy)}, []); */
    useEffect(() => {setHoliday(holidays.find((element) => element.date.datetime.day === dayNumber && element.date.datetime.month === monthNumber) ?? holidayNull)}, [dayNumber]);

    function decrementMonth () {
        setMonthNumber (monthNumber - 1);
        setDayNumber (0);
    };

    function incrementMonth () {
        setMonthNumber (monthNumber + 1);
        setDayNumber (0);
    };

    return (

    <CalendarWrapper>
        <CalendarHeader>
            {monthNumber !== 1 ? <CalendarButtonLeft src={calendarButton} onClick={decrementMonth} /> : <CalendarButtonLeftOff/>}
            <CalendarHeaderTitle>{months[monthNumber].title}</CalendarHeaderTitle>
            {monthNumber !== 12 ? <CalendarButtonRight src={calendarButton} onClick={incrementMonth} /> : <CalendarButtonRightOff/>}
        </CalendarHeader>
        <CalendarWeekWrapper>
            <CalendarDay>Dom</CalendarDay>
            <CalendarDay>Seg</CalendarDay>
            <CalendarDay>Ter</CalendarDay>
            <CalendarDay>Qua</CalendarDay>
            <CalendarDay>Qui</CalendarDay>
            <CalendarDay>Sex</CalendarDay>
            <CalendarDay>Sab</CalendarDay>
        </CalendarWeekWrapper>

        {/* Primeira Semana */}
        <CalendarWeekWrapper>
            {
                range(2 + months[monthNumber - 1].numberOfDays - months[monthNumber].firstDayOfWeek, months[monthNumber - 1].numberOfDays).map((j) =>
                    <CalendarDayNumberOff key={j}>{j}</CalendarDayNumberOff>
                )
            }
            {
                range(1, 8 - months[monthNumber].firstDayOfWeek).map((j) =>
                    dayNumber === j ? <CalendarDayNumberOn key={j}>{j}</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => setDayNumber(j)} key={j}>{j}</CalendarDayNumber>
                )
            }
        </CalendarWeekWrapper>

        {/* Segunda, Terceira e Quartas Semanas */}
        {
            [9 , 16, 23].map((i) =>
                <CalendarWeekWrapper key={i}>
                    {
                        range(i - months[monthNumber].firstDayOfWeek, i + 6 - months[monthNumber].firstDayOfWeek).map((j) =>
                            dayNumber === j ? <CalendarDayNumberOn key={j}>{j}</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => setDayNumber(j)} key={j}>{j}</CalendarDayNumber>
                        )
                    }
                </CalendarWeekWrapper>
            )
        
        }
        
        {/* Quinta e Sexta Semanas */}
        {
            /* Caso fevereiro começe em um domingo num ano não bissexto */
            months[monthNumber].numberOfDays == 28 && months[monthNumber].firstDayOfWeek === 1
            ?
            [2 , 9].map((i) =>
                <CalendarWeekWrapper key={i}>
                    {
                        range(i - months[monthNumber].firstDayOfWeek, i + 6 - months[monthNumber].firstDayOfWeek).map((j) =>
                            <CalendarDayNumberOff key={j}>{j}</CalendarDayNumberOff>
                        )
                    }
                </CalendarWeekWrapper>
            )
            :
            /* Caso o número de dias se extenda até apenas a quinta linha */
            months[monthNumber].numberOfDays + months[monthNumber].firstDayOfWeek - 29 <= 7
            ?
            <>
                <CalendarWeekWrapper>
                    {
                        range(30 - months[monthNumber].firstDayOfWeek, months[monthNumber].numberOfDays).map((j) =>
                            dayNumber === j ? <CalendarDayNumberOn key={j}>{j}</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => setDayNumber(j)} key={j}>{j}</CalendarDayNumber>
                        )
                    }
                    {
                        range(1, 36 - months[monthNumber].numberOfDays - months[monthNumber].firstDayOfWeek).map((j) =>
                            <CalendarDayNumberOff key={j}>{j}</CalendarDayNumberOff>
                        )
                    }
                </CalendarWeekWrapper>
                <CalendarWeekWrapper>
                    {
                        range(7 - months[monthNumber].numberOfDays + 30 - months[monthNumber].firstDayOfWeek, 6 - months[monthNumber].numberOfDays + 30 - months[monthNumber].firstDayOfWeek + 7).map((j) =>
                            <CalendarDayNumberOff key={j}>{j}</CalendarDayNumberOff>
                        )
                    }
                </CalendarWeekWrapper>
            </>
            :
            /* Caso o número de dias se extenda até a sexta linha */
            <>
                <CalendarWeekWrapper>
                    {
                        range(30 - months[monthNumber].firstDayOfWeek, 31 + 5 - months[monthNumber].firstDayOfWeek).map((j) =>
                            dayNumber === j ? <CalendarDayNumberOn key={j}>{j}</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => setDayNumber(j)} key={j}>{j}</CalendarDayNumber>
                        )
                    }
                </CalendarWeekWrapper>
                <CalendarWeekWrapper>
                    {
                        range(31 + 6 - months[monthNumber].firstDayOfWeek, months[monthNumber].numberOfDays).map((j) =>
                            dayNumber === j ? <CalendarDayNumberOn key={j}>{j}</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => setDayNumber(j)} key={j}>{j}</CalendarDayNumber>
                        )
                    }
                    {
                        range(1, 43 - months[monthNumber].numberOfDays - months[monthNumber].firstDayOfWeek).map((j) =>
                            <CalendarDayNumberOff key={j}>{j}</CalendarDayNumberOff>
                        )
                    }
                </CalendarWeekWrapper>
            </>
        }

    </CalendarWrapper>
  );
};

export default Calendar;