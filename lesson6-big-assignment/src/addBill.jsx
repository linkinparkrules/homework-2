import { useState } from "react";

export const Expense = () => {
    const [expButton, setExpButton] = useState("inline");
    const [expForm, setExpForm] = useState("none");
    const [components, setComponents] = useState([]);
    const day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th",
        "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd",
        "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [haveNotSpentJan, setHaveNotSpentJan] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentFeb, setHaveNotSpentFeb] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentMar, setHaveNotSpentMar] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentApr, setHaveNotSpentApr] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentMay, setHaveNotSpentMay] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentJun, setHaveNotSpentJun] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentJul, setHaveNotSpentJul] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentAug, setHaveNotSpentAug] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentSep, setHaveNotSpentSep] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentOct, setHaveNotSpentOct] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentNov, setHaveNotSpentNov] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const [haveNotSpentDec, setHaveNotSpentDec] = useState({ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" });
    const initialNotSpent = [haveNotSpentJan, haveNotSpentFeb, haveNotSpentMar, haveNotSpentApr, haveNotSpentMay, haveNotSpentJun, haveNotSpentJul, haveNotSpentAug, haveNotSpentSep, haveNotSpentOct, haveNotSpentNov, haveNotSpentDec];
    const changeNotSpent = [setHaveNotSpentJan, setHaveNotSpentFeb, setHaveNotSpentMar, setHaveNotSpentApr, setHaveNotSpentMay, setHaveNotSpentJun, setHaveNotSpentJul, setHaveNotSpentAug, setHaveNotSpentSep, setHaveNotSpentOct, setHaveNotSpentNov, setHaveNotSpentDec]
    function addExpense() {
        setExpButton("none");
        setExpForm("inline");
    }
    function cancelForm() {
        setExpForm("none");
        setExpButton("inline");
    }
    function addForm(event) {
        event.preventDefault();
        setExpForm("none");
        setExpButton("inline");
        if (((parseInt(initialNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) < 0) || (initialNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1].backgroundColor === "red")) {
            alert("you have spent over $100 !")
            setComponents([...components, <ExpenseList
                name={event.target.expenseName.value}
                amount={event.target.expenseAmount.value}
                day={day[Number(event.target.expenseDate.value.substr(0, 2)) - 1]}
                month={month[Number(event.target.expenseDate.value.substr(3, 2)) - 1]}
                year={event.target.expenseDate.value.substr(6, 4)}
                overSpentAlert="(OVERSPENT)"
            />]
            )
            changeNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1](
                { height: "100%", backgroundColor: "red" }
            )
        } else if ((parseInt(initialNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) >= 0) {
            setComponents([...components, <ExpenseList
                name={event.target.expenseName.value}
                amount={event.target.expenseAmount.value}
                day={day[Number(event.target.expenseDate.value.substr(0, 2)) - 1]}
                month={month[Number(event.target.expenseDate.value.substr(3, 2)) - 1]}
                year={event.target.expenseDate.value.substr(6, 4)}
            />]
            )
            changeNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1](
                { height: (parseInt(initialNotSpent[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }
            )
        }
    }
    function yearlyExpense() {

    }
    return (
        <>
            <AddExpense expButton={expButton} addExpense={addExpense} expForm={expForm} addForm={addForm} cancelForm={cancelForm} />
            <div id="showExpense">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "white" }}>Filter by year</span>
                    <input list="years" name="" placeholder="Thuyxinhdep1st" onChange={yearlyExpense} />
                    <datalist id="years">
                        <option value={"2021"} />
                        <option value={"2022"}>this year</option>
                    </datalist>
                </div>
                <ExpensePerYear month={month} initialNotSpent={initialNotSpent} components={components} />
            </div>
        </>
    )
}

const AddExpense = (prop) => (
    <div id="addExpense">
        <button id="addExpenseButton" style={{display: prop.expButton}} onClick={prop.addExpense}>ADD NEW EXPENSE</button>
        <div id="addExpenseForm" style={{ display: prop.expForm }}>
            <form onSubmit={prop.addForm}>
                <ExpenseInfo x="Name" y="Enter name here..." z="expenseName" />
                <ExpenseInfo x="Amount" y="Enter amount here..." z="expenseAmount" />
                <ExpenseInfo x="Date" y="dd/mm/yyyy" z="expenseDate" />
                <div className="expenseSubmit">
                    <button type="submit">ADD</button>
                    <button type="button" onClick={prop.cancelForm}>CANCEL</button>
                </div>
            </form>
        </div>
    </div>
)

const ExpenseInfo = (prop) => (
    <div className="expenseInfo">
        <span>{prop.x}</span>
        <input style={{ width: "200px" }} placeholder={prop.y} name={prop.z} type={prop.type} />
    </div>
)

const ExpensePerYear = (props) => {
    return (
        <>
            <ul id="expensePerMonth">
                {(props.month).map((thang, i) => {
                    return (
                        <ExpensePerMonth month={thang} change={(props.initialNotSpent)[i]} key={thang} />
                    )
                })}
            </ul>
            {props.components}
        </>
    )
}

const ExpensePerMonth = (props) => {
    return (
        <li className="spentChart" >
            <div className="spent">
                <div className="haveNotSpent" style={props.change}></div>
            </div>
            <span style={{ fontSize: "50%" }}>{props.month}</span>
        </li>
    )
}

const ExpenseList = (prop) => {
    return (
        <div className="expenseList">
            <div className="firstBlock">
                <div className="date">{prop.month} <br /> {prop.day} <br /> {prop.year}</div>
                <div className="name">{prop.name} {prop.overSpentAlert}</div>
            </div>
            <div className="amount">${prop.amount}</div>
        </div>
    )
}


