import React, { useEffect, useState } from 'react';
import { CardDescription, CardText, Content, StyledCard } from './style';

type datetime = {
    day: number,
    month: number,
    year: number
}

type date = {
    datetime: datetime
}

type cardInfo = {
    name: string,
    description: string,
    date: date
}

function CardContent ({
    name,
    description,
    date
}: cardInfo) {
    return (
        <Content>
            <CardText>Nome : {name}</CardText>
            <CardText>Data : {date.datetime.day}/{date.datetime.month}/{date.datetime.year}</CardText>
            <CardDescription>
                <CardText>Descrição : </CardText>
                <CardText>{description}</CardText>
            </CardDescription>
            
        </Content>
    )
}

function Card () {
    const [holidays, setHolidays] = useState<cardInfo>();
 
    const feriados : cardInfo = {
        name: 'New Years Day',
        description: 'New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.',
        date: {
            datetime : {
                day: 10,
                month: 1,
                year: 2023,
            }
        }
    }

    useEffect(() => {setHolidays(feriados)}, [])

    return (
        <StyledCard>
                <CardContent
                    key={feriados.name}
                    date={feriados.date}
                    name={feriados.name}
                    description={feriados.description}
                />
        </StyledCard>
    )
}

export default Card;