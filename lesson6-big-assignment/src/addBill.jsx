import { useState } from "react";

export const AddExpenseButton = () => {
    const [expButton, setExpButton] = useState("inline");
    const [expForm, setExpForm] = useState("none");
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

        console.log(event.target.expenseName.value);
    }
    return (
        <div id="addExpense">
            <button id="addExpenseButton" style={{ display: expButton }} onClick={addExpense}>ADD NEW EXPENSE</button>
            <div id="addExpenseForm" style={{ display: expForm }}>
                <form onSubmit={addForm}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Name</span>
                        <input placeholder="Enter name here..." name="expenseName" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Amount</span>
                        <input placeholder="Enter amount here..." />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Date</span>
                        <input placeholder="dd/mm/yy" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button type="submit">ADD</button>
                        <button type="button" onClick={cancelForm}>CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const Expense = () => {

    return (
        <div>
            <div style={{ backgroundColor: "black" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "white" }}>Filter by year</span>
                    <input list="years" name="" placeholder="Thuyxinhdep1st" />
                    <datalist id="years">
                        <option value={"2022"} />
                        <option value={"2021"} />
                    </datalist>
                </div>
                <ExpensePerMonth />
                <ExpenseList />
            </div>
        </div>
    )
}

const ExpensePerMonth = () => {

    return (
        <>
            <div style={{ backgroundColor: "white", margin: 10, padding: 5, borderRadius: "8px", display: "flex" }}>
                <div>
                    <div style={{ border: "1px solid black", borderRadius: "24px", height: "50px", width: "10px", backgroundColor: "blue", margin: 5 }}>
                        <div style={{ width: "100%", height: "50%", backgroundColor: "purple", borderRadius: "24px 24px 0px 0px" }}></div>
                    </div>
                    <span>Jan</span>
                </div>
                <div>
                    <div style={{ border: "1px solid black", borderRadius: "24px", height: "50px", width: "10px", backgroundColor: "blue", margin: 5 }}>
                        <div style={{ width: "100%", height: "50%", backgroundColor: "purple", borderRadius: "24px 24px 0px 0px" }}></div>
                    </div>
                    <span>Feb</span>
                </div>
            </div>
        </>
    )
}

const ExpenseList = () => {

    return (
        <div>
            <div style={{ color: "white" }}>abc</div>
            <div style={{ color: "white" }}>xyz</div>
        </div>
    )
}