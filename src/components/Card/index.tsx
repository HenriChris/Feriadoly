import { useContext } from 'react';
import { cardInfo, DateContext, holidayDefault } from '../../context/DateContextProvider';
import { Content, CardText, CardDescription, StyledCard, ContentOff } from './style';


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

    const { dayNumber ,holiday } = useContext(DateContext);

    return (
        <StyledCard>
            {dayNumber !== 0 
                ?
                holiday?.name !== ''
                    ? 
                    <CardContent
                    key={holiday?.name ?? holidayDefault.name}
                    date={holiday?.date ?? holidayDefault.date}
                    name={holiday?.name ?? holidayDefault.name}
                    description={holiday?.description ?? holidayDefault.description}
                    />
                    : 
                    <ContentOff>
                        Não há feriados nesse dia :(
                    </ContentOff>
                :
                <ContentOff>
                    Escolha um dia :)
                </ContentOff>
            }
        </StyledCard>
    )
};

export default Card;