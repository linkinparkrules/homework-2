*** Lesson 2
+ when starting a react project, we create a new react app:
    (npx create-react-app my-app ---> cd my app ---> npm start)
    hoặc (npx nano-react-app . ---> npm i) cái này sẽ nhanh hơn, gọn hơn và khởi chạy npm start nhanh hơn
            (npx nano-react-app . sẽ ko tạo thư mục mới, giống npx create-react-app ./)
            (npm i để tải node_modules)
        _ tải thư viên react:
            1: vào terminal gõ: cd. tên-thư-mục
            vd: cd .\lesson3\
            2: gõ: npx create-react-app tên-thư-mục
            vd: npx create-react-app lesson3 
                npx create-react-app ./  (gõ câu lệnh này sẽ ko tạo thư mục mới)
    _ Ta sẽ xây dựng các file trong thư mục src. 
    _ Những lần sau muốn chạy một project react thì ta "open in intergrated terminal" thư mục chứa project rồi gõ
    "npm start" để chạy project, thay vì mở file index.html rồi "open with live server"
+ hiểu gần đúng về jsx: gộp js với html với nhau
    vd: tạo một file Card.jsx rồi export vào file App.js ở thư mục src 
        _ trong file Card.jsx đó ghi:
                Cách export 1:                                  Cách export 2:
            const Header = () => {                          export const Header = () => {
                return (                                        return (
                    <div>                                           <div>
                        Header                                          Header
                    </div>                                          </div>
                )                                               )
            }                                               }
            export default Header;
        _ trong file App.js sẽ import file Card.jsx
                Cách export 1:                                  Cách export 2:
            import ViếtCáiGìCũngĐược from './Card';         import {Header} from './Card'; 
            // tên thì viết gì cũng đc nhưng nên viết       // bắt buộc phải viết đúng tên component 
            // tên giống component                          // mà đang export trong file component 
            function App() {                                function App() {
                return (                                        return (
                  <div className="App">                             <div className="App"></div>
                    <ViếtCáiGìCũngĐược/>                                <Header/>
                  </div>                                            </div>
                );                                              );
            }                                               }
    ! Chú ý: các dự án react có một config giúp cho: trong thư mục src, các file đều đc mặc định có đuôi jsx, nên khi import
    những file jsx thì ko cần phải ghi .jsx ở cuối nữa
+ lý do React reload trang nhanh: sử dụng virtual DOM (chỉ reload những khu vực được thay đổi thay vì reload cả trang web)

*** Lesson 3
+ cách đặt class cho 1 thẻ trong jsx:
    export const Header = () => {
        return (
            // viết là className chứ ko phải class
            // style phải để trong một ngoặc nhọn nữa, và các thuộc tính css cách nhau bằng dấu phẩy
            <div className="card" style={{color: "green", fontSize: 90}}>  
                Header
            </div>
        );
    };
  muốn css class "card" này thì ta style trong file App.css, hoặc 1 file css nào đó rồi export vào App.js, hoặc style luôn vào file jsx 
+ return phải trả lại một thẻ tag html: 
  vd: export const Akatsuki = () => {
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

    !!! NOTE: Tên biến để export (tạo ra thẻ tag) phải viết hoa chữ cái đầu tiên
    vd: như thằng Akatsuki với Header ở vd trên 
