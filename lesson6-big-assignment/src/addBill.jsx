import { useState } from "react";

export const Expense = () => {
    const [expButton, setExpButton] = useState("inline");
    const [expForm, setExpForm] = useState("none");
    const [components, setComponents] = useState([]); 
    const day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th",
                 "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd",
                 "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [haveNotSpent, setHaveNotSpent] = useState("100%");
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
        setComponents([...components, <ExpenseList 
                                name={event.target.expenseName.value} 
                                amount={event.target.expenseAmount.value} 
                                day={day[Number(event.target.expenseDate.value.substr(0,2)) - 1]} 
                                month={month[Number(event.target.expenseDate.value.substr(3,2)) - 1]} 
                                year={event.target.expenseDate.value.substr(6,4)} 
                        />] 
        
        )
        setHaveNotSpent(
            
        )
    }
    return (
        <>
            <div id="addExpense">
                <button id="addExpenseButton" style={{ display: expButton }} onClick={addExpense}>ADD NEW EXPENSE</button>
                <div id="addExpenseForm" style={{ display: expForm }}>
                    <form onSubmit={addForm}>
                        <ExpenseInfo x="Name" y="Enter name here..." z="expenseName" />
                        <ExpenseInfo x="Amount" y="Enter amount here..." z="expenseAmount" />
                        <ExpenseInfo x="Date" y="dd/mm/yyyy" z="expenseDate"/>
                        <div className="expenseSubmit">
                            <button type="submit">ADD</button>
                            <button type="button" onClick={cancelForm}>CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="showExpense">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span style={{color: "white"}}>Filter by year</span>
                    <input list="years" name="" placeholder="Thuyxinhdep1st" />
                    <datalist id="years">
                        <option value={"2022"} />
                        <option value={"2021"} />
                    </datalist>
                </div>
                <ul id="expensePerMonth">
                    {month.map((thang) => {
                        return (
                            <ExpensePerMonth month={thang} heightChange={haveNotSpent} key={thang}/>
                        )
                    })}
                    
                </ul>
                
                {components}
                

            </div>
        </>

    )
}

const ExpenseInfo = (prop) => (
    <div className="expenseInfo">
        <span>{prop.x}</span>
        <input style={{ width: "200px" }} placeholder={prop.y} name={prop.z} type={prop.type} />
    </div>
)

const ExpensePerMonth = (props) => {
    return (
                <li className="spentChart" >
                    <div className="spent">
                        <div className="haveNotSpent" style={{height: props.heightChange}}></div>
                    </div>
                    <span style={{fontSize: "50%"}}>{props.month}</span>
                </li>            
    )
}

const ExpenseList = (prop) => {

    return (
        <div className="expenseList">
            <div className="firstBlock">
                <div className="date">{prop.month} <br /> {prop.day} <br /> {prop.year}</div>
                <div className="name">{prop.name}</div>
            </div>
            <div className="amount">{prop.amount}</div>
        </div>
    )
}