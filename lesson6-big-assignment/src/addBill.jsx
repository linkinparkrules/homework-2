import { useState } from "react";

export const Expense = () => {
    const [expButton, setExpButton] = useState("inline");
    const [expForm, setExpForm] = useState("none");
    const [components2021, setComponents2021] = useState([]);
    const [components2022, setComponents2022] = useState([]);
    const [components2023, setComponents2023] = useState([]);
    const [components2024, setComponents2024] = useState([]);
    const initialComponent = [components2021, components2022, components2023, components2024];
    const changeComponent = [setComponents2021, setComponents2022, setComponents2023, setComponents2024];
    const day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th",
        "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd",
        "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [haveNotSpent2021, setHaveNotSpent2021] = useState([{ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" },])
    const [haveNotSpent2022, setHaveNotSpent2022] = useState([{ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" },])
    const [haveNotSpent2023, setHaveNotSpent2023] = useState([{ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" },])
    const [haveNotSpent2024, setHaveNotSpent2024] = useState([{ height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" }, { height: "100%", borderRadius: "24px 24px 24px 24px", backgroundColor: "rgb(196, 160, 236)" },])
    const [displayYear, setDisplayYear] = useState(["none", "none", "none", "none"]);
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
        console.log(typeof (event.target.expenseDate.value.substr(6, 4)))
        if (event.target.expenseDate.value.substr(6, 4) === "2021") {
            updateExpense(haveNotSpent2021, setHaveNotSpent2021)
        } else if (event.target.expenseDate.value.substr(6, 4) === "2022") {
            updateExpense(haveNotSpent2022, setHaveNotSpent2022)
        } else if (event.target.expenseDate.value.substr(6, 4) === "2023") {
            updateExpense(haveNotSpent2023, setHaveNotSpent2023)
        } else if (event.target.expenseDate.value.substr(6, 4) === "2024") {
            updateExpense(haveNotSpent2024, setHaveNotSpent2024)
        }
        function updateExpense(years, yearsChange) {
            if (((parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) < 0) || (years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].backgroundColor === "red")) {
                alert("you have spent over $100 !")
                changeComponent[Number(event.target.expenseDate.value.substr(6, 4)) - 2021]([...initialComponent[Number(event.target.expenseDate.value.substr(6, 4)) - 2021], <ExpenseList
                    name={event.target.expenseName.value}
                    amount={event.target.expenseAmount.value}
                    day={day[Number(event.target.expenseDate.value.substr(0, 2)) - 1]}
                    month={month[Number(event.target.expenseDate.value.substr(3, 2)) - 1]}
                    year={event.target.expenseDate.value.substr(6, 4)}
                    overSpentAlert="(OVERSPENT)"
                />]
                )
                if (Number(event.target.expenseDate.value.substr(3, 2)) === 1) {
                    yearsChange([{ height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 2) {
                    yearsChange([years[0], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 3) {
                    yearsChange([years[0], years[1], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 4) {
                    yearsChange([years[0], years[1], years[2], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 5) {
                    yearsChange([years[0], years[1], years[2], years[3], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 6) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 7) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 8) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 9) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 10) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 11) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], years[9], { height: "100%", backgroundColor: "red" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 12) {
                    yearsChange([{ height: "100%", backgroundColor: "red" }, ...years])
                }

            } else if ((parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) >= 0) {
                changeComponent[Number(event.target.expenseDate.value.substr(6, 4)) - 2021]([...initialComponent[Number(event.target.expenseDate.value.substr(6, 4)) - 2021], <ExpenseList
                    name={event.target.expenseName.value}
                    amount={event.target.expenseAmount.value}
                    day={day[Number(event.target.expenseDate.value.substr(0, 2)) - 1]}
                    month={month[Number(event.target.expenseDate.value.substr(3, 2)) - 1]}
                    year={event.target.expenseDate.value.substr(6, 4)}
                />]
                )
                if (Number(event.target.expenseDate.value.substr(3, 2)) === 1) {
                    yearsChange([{ height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 2) {
                    yearsChange([years[0], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 3) {
                    yearsChange([years[0], years[1], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 4) {
                    yearsChange([years[0], years[1], years[2], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 5) {
                    yearsChange([years[0], years[1], years[2], years[3], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 6) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 7) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 8) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 9) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 10) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 11) {
                    yearsChange([years[0], years[1], years[2], years[3], years[4], years[5], years[6], years[7], years[8], years[9], { height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                } else if (Number(event.target.expenseDate.value.substr(3, 2)) === 12) {
                    yearsChange([{ height: (parseInt(years[Number(event.target.expenseDate.value.substr(3, 2)) - 1].height) - parseInt(event.target.expenseAmount.value)) + "%", borderRadius: "24px 24px 0 0" }, ...years])
                }
            }
        }

    }
    function yearlyExpense(event) {
        if (event.target.value === "2021") {
            setDisplayYear(["contents", "none", "none", "none"]);
        } else if (event.target.value === "2022") {
            setDisplayYear(["none", "contents", "none", "none"]);
        } else if (event.target.value === "2023") {
            setDisplayYear(["none", "none", "contents", "none"]);
        } else if (event.target.value === "2024") {
            setDisplayYear(["none", "none", "none", "contents"]);
        }
    }
    return (
        <>
            <AddExpense expButton={expButton} addExpense={addExpense} expForm={expForm} addForm={addForm} cancelForm={cancelForm} />
            <div id="showExpense">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "white" }}>Filter by year</span>
                    <input list="years" placeholder="YEAR" onChange={yearlyExpense} />
                    <datalist id="years">
                        <option value={"2021"} />
                        <option value={"2022"}>this year</option>
                        <option value={"2023"} />
                        <option value={"2024"} />
                    </datalist>
                </div>
                <ExpensePerYear key="2021" month={month} initialNotSpent={haveNotSpent2021} components={initialComponent[0]} display={displayYear[0]} />
                <ExpensePerYear key="2022" month={month} initialNotSpent={haveNotSpent2022} components={initialComponent[1]} display={displayYear[1]} />
                <ExpensePerYear key="2023" month={month} initialNotSpent={haveNotSpent2023} components={initialComponent[2]} display={displayYear[2]} />
                <ExpensePerYear key="2024" month={month} initialNotSpent={haveNotSpent2024} components={initialComponent[3]} display={displayYear[3]} />
            </div>
        </>
    )
}

const AddExpense = (prop) => (
    <div id="addExpense">
        <button id="addExpenseButton" style={{ display: prop.expButton }} onClick={prop.addExpense}>ADD NEW EXPENSE</button>
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
        <div className="expensePerYear" style={{ display: props.display }} name={props.name}>
            <ul className="expensePerMonth">
                {(props.month).map((thang, i) => {
                    return (
                        <ExpensePerMonth month={thang} change={(props.initialNotSpent)[i]} key={thang} />
                    )
                })}
            </ul>
            {props.components}
        </div>
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


