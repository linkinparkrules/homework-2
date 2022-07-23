import React, { useState, useEffect } from "react";
import useRandomColor from "./useRandomColor";
function Square() {
  const color = useRandomColor();

  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
  );
}


export default Square;


/* 
1. Khởi tạo react app - create-react-app
2. Tạo ra các component - file jsx: 
-> https://reactjs.org/docs/thinking-in-react.html 

3. Component nó thực hiện chức năng gì 
-> useState: Là các biến (cập nhật ngay lên màn hình mỗi giá trị của nó bị thay đổi) -> đọc thêm về destructing 
-> useEffect: Thường gọi API 


*/


import React, { useState, useEffect } from "react";

function useRandomColor() {
  const [color, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get random color
      const newColor = Math.floor(Math.random() * 999999);
      setColor(newColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return `#${color}`;
  return [variable,setVariable]
}

// useState -> hàm viết sẵn, định nghĩa ra 1 biến và 1 hàm để thực hiện cập nhật biến đó 

export default useRandomColor;

