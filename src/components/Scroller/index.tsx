import React, { useEffect, useState } from 'react';
import { Holidays, HolidaysDate, HolidaysText, ScrollerWrapper, StyledScroller, ScrollerTitle, ScrollerContent } from './style';

type datetime = {
    day: number,
    month: number,
    year: number
}

type date = {
    datetime: datetime
}

type scrollerInfo = {
    name: string,
    date: date
}

function ScrollerElement ({
    name,
    date
}: scrollerInfo) {
    return (
        <Holidays>
            <HolidaysDate>{date.datetime.day}/{date.datetime.month}/{date.datetime.year}</HolidaysDate>
            <HolidaysText>{name}</HolidaysText>
        </Holidays>
    )
}

function Scroller () {
    const [holidays, setHolidays] = useState<scrollerInfo[]>();
 
    const feriados : scrollerInfo[] = [
        {
            name: 'New Years Day',
            date: {
                datetime : {
                    day: 10,
                    month: 1,
                    year: 2023,
                }
            }
        },
        {
            name: 'Carnival Monday',
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
            date: {
                datetime : {
                    day: 22,
                    month: 2,
                    year: 2023,
                }
            }
        },
        {
            name: 'Good Friday',
            date: {
                datetime : {
                    day: 7,
                    month: 4,
                    year: 2023,
                }
            }
        },
        {
            name: 'Tiradentes Day',
            date: {
                datetime : {
                    day: 21,
                    month: 4,
                    year: 2023,
                }
            }
        },
        {
            name: 'Labor Day',
            date: {
                datetime : {
                    day: 1,
                    month: 5,
                    year: 2023,
                }
            }
        },
        {
            name: 'Corpus Christi',
            date: {
                datetime : {
                    day: 8,
                    month: 6,
                    year: 2023,
                }
            }
        }
    ]
    useEffect(() => {setHolidays(feriados)}, [])

    return (
        <ScrollerWrapper>
            <ScrollerTitle>Feriados em 2023 :</ScrollerTitle>
            <ScrollerContent>
                <StyledScroller>
                    {
                    holidays?.map((holiday) =>
                        <ScrollerElement
                            key={holiday.name}
                            date={holiday.date}
                            name={holiday.name}
                        />
                        )
                    }
                </StyledScroller>
            </ScrollerContent>
        </ScrollerWrapper>
    )
}

export default Scroller;