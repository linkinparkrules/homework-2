import { useState, useEffect } from "react";

// ví dụ về component Header, sử dụng inline css
export const Header = () => {
    let card = "card-class";
    card += " card-align";
    return (
        <div className={card} style={{color: "green", fontSize: 90}}>
            Header
        </div>
    );
};

// ví dụ vè component Akatsuki, return các object. Chú ý là return phải trả lại 1 thẻ html, kể cả thẻ rỗng <></>
export const Akatsuki = () => {
    let fruits = [
        { 
            name: "apple",
        },
        {
            name: "pineapple",
        },
        {
            name: "grapes",
        }, 
    ];
    return (
        <>
            {fruits.map((hoaQua) => {
                return <div>{hoaQua.name}</div>;
            })}
           
        </>
     );    
}

// ví dụ về component
export const ThuyDoHoi = ({nghiaDepZai}) => {
    return (
        <div>
            <button>{nghiaDepZai}</button>
        </div>
    );
};

// ví dụ về props trong React - chính là các thuộc tính trong HTML. Props có giá trị là 1 object
// các component con trong class childrenhihi cũng sẽ nhận thuộc tính css giống cha
export const Appss = (props) => {
	const x = 1;
	const y = 2;
	return (
		<div>
			<Sum a={x} b={y} />
            <div className="childrenhihi">abcxyz {props.children}</div> 
		</div>
	)
}
const Sum = (props) => {
	console.log(props) // {a: 1, b: 2}

	return (
            <div>The value is: {props.a + props.b}</div>
    )
}

// ví dụ về event
const onClick = () => {
    console.log("Click me!");
}
export const ClickButton = () => {
    return (
        <button onClick = {onClick}>Click me</button>
    );
}

// ví dụ về useState - sử dụng khi ta muốn React tính toán lại giá trị của component
export const IncreaseButton = () => {
    const [count, setCount] = useState(0);
    const [Alice, setAlice] = useState({name: "Alice", age: 20});
    const increaseNum = () => {
        setCount(count + 1);
    }
    const increaseAge = () => {
        setAlice({...Alice, age: Alice.age + 1});
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={increaseNum}>Increase</button>
            <p>My name is {Alice.name}, and i am {Alice.age} years old.</p>
            <button onClick={increaseAge}>Alice's age</button>
        </div>    
    )
}

// ví dụ về useEffect - sử dụng khi ta muốn các logic bên ngoài component có thể xài state và props của component đó
export const TitleCount = () => {
    const [count, setCount] = useState(0);
    const [apple, setApple] = useState(false);
    const [dem, setDem] = useState(0);
    // sử dụng array [count] trong useEffect để ko render cái useEffect cho title nếu giá trị count ko đổi, giúp tối ưu hóa hiệu năng của component
    // khi giá trị của count = 0, component được render với giá trị count tương ứng, React tiến hành so sánh giá trị cũ [0] và giá trị mới [0] của count.
    // Vì tất cả các phần tử đều bằng nhau giữa 2 lần render (0 === 0), React sẽ bỏ qua effect của lần render đó
    useEffect(() => {
        document.title = `Clicked ${count} times`;
        console.log("render effect" + ` ${count}`);
    }, [count])
    // ta có thể sử dụng useEffect để dọn dẹp effect bằng các trả return một function, để tránh bị lặp effect khi render lại
    // useEffect(() => {
    //     const time = setInterval(() => {
    //         console.log(`update ${dem}`)            
    //         setDem(dem + 1);
    //     }, 1000)
    //     return () => {
    //          clearInterval(time);
    //     }
    // },[dem])
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>title count</button>
            <div>
                {apple && <span>"apple"</span>}
                <button onClick={() => {setApple(!apple)}}>apple</button>
            </div>
            {/* <div>{dem}</div> */}
        </div>
    )
}

