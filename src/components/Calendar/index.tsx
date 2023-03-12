import React, { useState } from 'react';
import calendarButton from '../../assets/calendarButton.png';
import { CalendarButtonLeft, CalendarButtonLeftOff, CalendarButtonRight, CalendarButtonRightOff, CalendarDay, CalendarDayNumber, CalendarDayNumberOff, CalendarDayNumberOn, CalendarHeader, CalendarHeaderTitle, CalendarWeekWrapper, CalendarWrapper } from './style';

function Calendar() {

    type month = {
        title : string,
        numberOfDays : number,
        firstDayOfWeek : number
    };
    
    let months : month[] = [
        {
            title : "Dezembro 2022",
            numberOfDays : 31,
            firstDayOfWeek : 4
        },
        {
            title : "Janeiro 2023",
            numberOfDays : 31,
            firstDayOfWeek : 7
        },
        {
            title : "Fevereiro 2023",
            numberOfDays : 28,
            firstDayOfWeek : 3
        },
        {
            title : "Março 2023",
            numberOfDays : 31,
            firstDayOfWeek : 3
        },
        {
            title : "Abril 2023",
            numberOfDays : 30,
            firstDayOfWeek : 6
        },
        {
            title : "Maio 2023",
            numberOfDays : 31,
            firstDayOfWeek : 1
        },
        {
            title : "Junho 2023",
            numberOfDays : 30,
            firstDayOfWeek : 4
        },
        {
            title : "Julho 2023",
            numberOfDays : 31,
            firstDayOfWeek : 6
        },
        {
            title : "Agosto 2023",
            numberOfDays : 31,
            firstDayOfWeek : 2
        },
        {
            title : "Setembro 2023",
            numberOfDays : 30,
            firstDayOfWeek : 5
        },
        {
            title : "Outubro 2023",
            numberOfDays : 31,
            firstDayOfWeek : 7
        },
        {
            title : "Novembro 2023",
            numberOfDays : 30,
            firstDayOfWeek : 3
        },
        {
            title : "Dezembro 2023",
            numberOfDays : 31,
            firstDayOfWeek : 5
        },
        {
            title : "Janeiro 2024",
            numberOfDays : 31,
            firstDayOfWeek : 1
        }
    ];

    const [monthNumber, setMonthNumber] =  useState(1);
    const [dayNumber, setDayNumber] = useState(0);

    function decrementMonth () {
        if (monthNumber !== 1) {
            setMonthNumber (monthNumber - 1);
            setDayNumber (0);
        };
    };

    function incrementMonth () {
        if (monthNumber !== 12) {
            setMonthNumber (monthNumber + 1);
            setDayNumber (0);
        };
    };

    function ChooseDay (i : number) {
        setDayNumber(i);
    };

    return (

    <CalendarWrapper>
        <CalendarHeader>
            {monthNumber !== 1 ? <CalendarButtonLeft src={calendarButton} onClick={decrementMonth} /> : <CalendarButtonLeftOff/>}
            <CalendarHeaderTitle>{months[monthNumber].title}</CalendarHeaderTitle>
            {monthNumber !== 12 ? <CalendarButtonRight src={calendarButton} onClick={incrementMonth} /> : <CalendarButtonRightOff/>}
        </CalendarHeader>
        <CalendarWeekWrapper>
            <CalendarDay>Seg</CalendarDay>
            <CalendarDay>Ter</CalendarDay>
            <CalendarDay>Qua</CalendarDay>
            <CalendarDay>Qui</CalendarDay>
            <CalendarDay>Sex</CalendarDay>
            <CalendarDay>Sab</CalendarDay>
            <CalendarDay>Dom</CalendarDay>
        </CalendarWeekWrapper>

        {/* {months[monthNumber].title} */}
        {/* {
            [1, 2, 3, 4].map((i) =>
            <CalendarWeekWrapper>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((j) =>
                        <CalendarDayNumber>{j}</CalendarDayNumber>
                    )
                }
            </CalendarWeekWrapper>
            )
        } */}
        <CalendarWeekWrapper>
            <CalendarDayNumberOff>26</CalendarDayNumberOff>
            <CalendarDayNumberOff>27</CalendarDayNumberOff>
            <CalendarDayNumberOff>28</CalendarDayNumberOff>
            <CalendarDayNumberOff>29</CalendarDayNumberOff>
            <CalendarDayNumberOff>30</CalendarDayNumberOff>
            <CalendarDayNumberOff>31</CalendarDayNumberOff>
            {dayNumber === 1 ? <CalendarDayNumberOn>1</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(1)} >1</CalendarDayNumber>}
        </CalendarWeekWrapper>

        <CalendarWeekWrapper>
            {dayNumber === 2 ? <CalendarDayNumberOn>2</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(2)} >2</CalendarDayNumber>}
            {dayNumber === 3 ? <CalendarDayNumberOn>3</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(3)} >3</CalendarDayNumber>}
            {dayNumber === 4 ? <CalendarDayNumberOn>4</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(4)} >4</CalendarDayNumber>}
            {dayNumber === 5 ? <CalendarDayNumberOn>5</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(5)} >5</CalendarDayNumber>}
            {dayNumber === 6 ? <CalendarDayNumberOn>6</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(6)} >6</CalendarDayNumber>}
            {dayNumber === 7 ? <CalendarDayNumberOn>7</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(7)} >7</CalendarDayNumber>}
            {dayNumber === 8 ? <CalendarDayNumberOn>8</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(8)} >8</CalendarDayNumber>}
        </CalendarWeekWrapper>

        <CalendarWeekWrapper>
            {dayNumber === 9 ? <CalendarDayNumberOn>9</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(9)} >9</CalendarDayNumber>}
            {dayNumber === 10 ? <CalendarDayNumberOn>10</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(10)} >10</CalendarDayNumber>}
            {dayNumber === 11 ? <CalendarDayNumberOn>11</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(11)} >11</CalendarDayNumber>}
            {dayNumber === 12 ? <CalendarDayNumberOn>12</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(12)} >12</CalendarDayNumber>}
            {dayNumber === 13 ? <CalendarDayNumberOn>13</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(13)} >13</CalendarDayNumber>}
            {dayNumber === 14 ? <CalendarDayNumberOn>14</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(14)} >14</CalendarDayNumber>}
            {dayNumber === 15 ? <CalendarDayNumberOn>15</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(15)} >15</CalendarDayNumber>}
        </CalendarWeekWrapper>

        <CalendarWeekWrapper>
            {dayNumber === 16 ? <CalendarDayNumberOn>16</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(16)}>16</CalendarDayNumber>}
            {dayNumber === 17 ? <CalendarDayNumberOn>17</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(17)}>17</CalendarDayNumber>}
            {dayNumber === 18 ? <CalendarDayNumberOn>18</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(18)}>18</CalendarDayNumber>}
            {dayNumber === 19 ? <CalendarDayNumberOn>19</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(19)}>19</CalendarDayNumber>}
            {dayNumber === 20 ? <CalendarDayNumberOn>20</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(20)}>20</CalendarDayNumber>}
            {dayNumber === 21 ? <CalendarDayNumberOn>21</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(21)}>21</CalendarDayNumber>}
            {dayNumber === 22 ? <CalendarDayNumberOn>22</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(22)}>22</CalendarDayNumber>}
        </CalendarWeekWrapper>

        <CalendarWeekWrapper>
            {dayNumber === 23 ? <CalendarDayNumberOn>23</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(23)} >23</CalendarDayNumber>}
            {dayNumber === 24 ? <CalendarDayNumberOn>24</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(24)} >24</CalendarDayNumber>}
            {dayNumber === 25 ? <CalendarDayNumberOn>25</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(25)} >25</CalendarDayNumber>}
            {dayNumber === 26 ? <CalendarDayNumberOn>26</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(26)} >26</CalendarDayNumber>}
            {dayNumber === 27 ? <CalendarDayNumberOn>27</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(27)} >27</CalendarDayNumber>}
            {dayNumber === 28 ? <CalendarDayNumberOn>28</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(28)} >28</CalendarDayNumber>}
            {dayNumber === 29 ? <CalendarDayNumberOn>29</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(29)} >29</CalendarDayNumber>}
        </CalendarWeekWrapper>

        <CalendarWeekWrapper>
            {dayNumber === 30 ? <CalendarDayNumberOn>30</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(30)} >30</CalendarDayNumber>}
            {dayNumber === 31 ? <CalendarDayNumberOn>31</CalendarDayNumberOn> : <CalendarDayNumber onClick={() => ChooseDay(31)} >31</CalendarDayNumber>}
            <CalendarDayNumberOff>1</CalendarDayNumberOff>
            <CalendarDayNumberOff>2</CalendarDayNumberOff>
            <CalendarDayNumberOff>3</CalendarDayNumberOff>
            <CalendarDayNumberOff>4</CalendarDayNumberOff>
            <CalendarDayNumberOff>5</CalendarDayNumberOff>
        </CalendarWeekWrapper>

    </CalendarWrapper>

  );
};

export default Calendar;