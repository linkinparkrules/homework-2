// tạo 1 ứng dụng react gồm có 1 ô trống điền các nhiệm vụ và nút submit các nhiệm vụ đó lên bảng
// giống như hình Untitled
const Task = () => {
    let task = [
        "Clean up bedroom", "Buy some milk", "Jogging", "Learn React", "Doing Exercises"
    ]
    


    return (
        <div style={{ width: "50vh", height: "50vh", border: "black 1px solid" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input style={{ border: "white" }} placeholder="Enter your task here..." />
            </div>
            <hr />
            <div>
                {task.map((prop) => {
                    return (
                        <div>
                            <input type={"checkbox"}/>
                            {prop}
                        </div>)
                })}
            </div>

        </div>
    )
}

export default Task;