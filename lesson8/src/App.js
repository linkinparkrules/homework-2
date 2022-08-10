import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [love, setLove] = useState(0);
  const [hienthi, setHienthi] = useState("none");
  
  useEffect(() => {
    document.title = "anh yêu em " + love
    const handleScroll = () => {
      const scrolltop = document.documentElement.scrollTop
      console.log(scrolltop)
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  function loveThuy() {
    setLove(love + 1);
  }

  return (
    <div className="App">
      <button onClick={loveThuy} style={{ padding: "20px" }} />
      <p>
        100 ĐIỀU PHẢI LÀM NẾU MAY MẮN CÓ NGƯỜI YÊU Ở HÀ NỘI ❤️❤️❤️<br />
        1. Phải có người yêu cái đã nha :))) ❤️<br />
        2. Dắt tay nhau cùng ngắm lá vàng rơi trên phố Phan Đình Phùng ❤️<br />
        3. Đi lượn 1 vòng Hồ Tây hít hoa sữa nở ❤️<br />
        4. Đi dọc đường Hoàng Diệu cùng người thương ❤️<br />
        5. Đi chơi Trung Thu với nhau trên phố Hàng Mã ❤️<br />
        6.Đưa đón nhau đi làm, tận hưởng những cơn mưa chuyển mùa bất chợt ❤️<br />
        7. Cùng nhau dậy sớm đi bộ 1 vòng Hồ Gươm, tận hưởng không khí trong lành sáng mùa Thu ❤️<br />
        8. Lê la cafe vỉa hè cùng người yêu. ❤️<br />
        9, Cùng nhau phượt đêm Hà Nội ❤️<br />
        10. Dậy sớm ngắm bình minh mùa Thu trên Cầu Long BIên ❤️<br />
        11. Thưởng thức Ô mai Hàng Đường để tình iu thêm ngọt ngào ❤️<br />
        12. Ngắm nắng vàng mùa thu trên Quảng trường Ba Đình ❤️<br />
        13. Dạo quanh Phố cổ và ăn vặt ❤️<br />
        14. Rủ người yêu dạo bước trong vườn Bách thảo ❤️<br />
        15. Chở nhau đi vòng quanh Hồ Tây, ăn kem Hồ Tây vào buổi chiều ❤️<br />
        16. Đi chơi phố đi bộ vào T7,CN rồi ăn Kem Tràng Tiền ❤️<br />
        17. Uống Cafe tại Phố Đường Tàu ❤️<br />
        18. Ngắm hoàng hôn tại Đường Thanh niên, tay đan vào nhau, an nhiên tự tại. ❤️<br />
        19. Ăn phở chiên giòn Khâm Thiên ❤️<br />
        20. Làm 1 bộ ảnh đôi tại phố bích họa Phùng Hưng ❤️<br />
        21. Đi Chợ đêm Đồng Xuân ăn bánh tôm cùng nhau ❤️<br />
        22. Dạo chợ hoa Quảng Bá lúc 4h sáng ❤️<br />
        23. Hẹn hò, ngắm Hà Nội từ trên cao tại Trill Rooftop Coffee số 1 Ngụy Như Kon Tum ❤️<br />
        24. Đi xem Lễ hạ cờ và lễ Thượng Cờ tại Lăng Bác ❤️<br />
        25. Chụp ảnh tại Toà Soạn báo mới, Hồ Hoàn Kiếm ❤️<br />
        26. Check in cây cô đơn Hồ Tây ❤️<br />
        27. Đi chơi cùng nhau cả ngày tại Aeon Mall Long Biên, Aeon mall Hà Đông ❤️<br />
        28. Đi chơi tại bãi đá Sông Hồng hóng gió và ngắm hoàng hôn ❤️<br />
        29. Ăn hoa quả dầm phố Tô Tịch ❤️<br />
        30. Rủ rê tụ tập mấy đôi khác cùng ăn lẩu Gầm Cầu ❤️<br />
        31. Nhâm nhi cafe Highland Cột cờ Hà Nội ❤️<br />
        32. Đi xem thử (một) buổi biểu diễn tại Nhà Hát Lớn ❤️<br />
        33. Đi trượt băng tại Royal City ❤️<br />
        34. Lên tầng cao nhất của Tòa nhà Lotte Đào Tấn ❤️<br />
        35. Ra đền Ngọc Sơn nghe hát xẩm dân gian ❤️<br />
        36. Trải nghiệm đi Bus 2 tầng quanh Hà Nội ❤️<br />
        37. Trở về tuổi thơ chơi các trò chơi dân gian phố đi bộ vào cuối tuần ❤️<br />
        38. Thưởng thức vị phở Bát Đàn, nếu người yêu không ăn được hành nhất định phải gọi bát không hành ❤️<br />
        39. Thử ăn bún mọc Hàng Gà ❤️<br />
        40. Check in Kone Cafe - 295 Khâm Thiên ❤️<br />
        41. Dắt tay nhau dạo chợ Hoa quả Long Biên 3h sáng ❤️<br />
        42. Thử phượt xe bus 1 vòng Hà Nội ❤️<br />
        43. Hẹn hò sang chảnh tầng 20 khách sạn Sofitel chụp view cả thành phố ❤️<br />
        44. Xem xiếc ôn lại tuổi thơ tại rạp xiếc Trung Ương ❤️<br />
        45. Thăm thuỷ cung ở Times City ❤️<br />
        46. Dạo quanh Hà Nội bằng Xích Lô như những cặp đôi quý tộc thời xưa ❤️<br />
        47. Ngồi hàn huyên tại trà đá vỉa hè phố cổ ❤️<br />
        48. Lôi nhau đi tập thể dục trong công viên Thống Nhất ❤️<br />
        49. Đi chơi cuối tuần cùng người yêu tại Hanoi Creative City ❤️<br />
        50. Cùng nhau bị các anh giao thông bắt một lần ở Hà Nội ❤️<br />
        51, Cùng nhau đi chùa Hà ❤️<br />
        52, Ăn cháo sườn Chợ Đồng Xuân ❤️<br />
        53, Cùng nhau uống bia ở Phố Tạ Hiện ❤️<br />
        54, Ăn bánh mì sốt vang phố Hoè Nhai ❤️<br />
        55, Đi chơi ở Thảo Nguyên Hoa Long Biên ❤️<br />
        56, Cùng nhau đi làng luạ Vạn Phúc Hà Đông ❤️<br />
        57, Uống cafe ở Top of Ha Noi trên đỉnh toà nhà Lotte center<br />
        58, Đi thăm Vườn Nhật Bản ❤️<br />
        59, Cùng đi hẻm bia Lost in Hong Kong ❤️<br />
        60, Cùng đi thuỷ cung Times city và xem nhạc nước ❤️<br />
        61, Đi thăm Văn Miếu Quốc Tử Giám ❤️<br />
        62, Đi chơi phố sách Hà Nội ❤️<br />
        63, Dạo quanh bờ hồ Hoàn Kiếm bằng Xích Lô ❤️<br />
        64, Chụp ảnh tại chung cư phía sau khu vực chợ Đồng Xuân<br />
        65, Đi bộ cùng nhau ở Phố Đi bộ Trịnh Công Sơn ❤️<br />
        66, Chụp ảnh mùa Cúc hoạ mi Bãi đá sông Hồng ❤️<br />
        67, Đến thăm nhà sách Mão ❤️<br />
        68, Cùng người yêu ăn tối ở 6 Degress cafe ngắm Hồ Tây ❤️<br />
        69, Đến thăm hẻm Từ Hoa, Hồ Tây ❤️<br />
        70, Uống cafe ở Eden coffee ngắm Nhà Thờ Lớn ❤️<br />
        71, Uống cafe ở Em Rooftop Cofee, quán cafe đẹp nhất quận Cầu Giấy ❤️<br />
        72, Check in con đường lá phong đỏ ở Thảo Nguyên hoa Long Biên ❤️<br />
        73, Ngắm tàu chạy rồi ăn ngô nướng trên Cầu Long Biên ❤️<br />
        74, Ăn bò nhúng dấm 46 Trần Xuân Soạn ❤️<br />
        75. Ăn xôi Yến 35 Nguyễn Hữu Huân ❤️<br />
        76, Đi bến Hàn Quốc cùng nhau ở Hồ Tây ❤️<br />
        77, Cùng đến thăm đền Ngọc Sơn ❤️<br />
        78, Uống cafe ngắm cầu Long Biên ở Serein Cafe<br />
        79, Đón phun tuyết mùa noel ở Đại học Thăng Long ❤️<br />
        80, Ăn bánh giò thập cẩm trước cổng trường THPT Chu Văn An ❤️<br />
        81. Ăn chả rươi 25 Gia Ngư ❤️<br />
        82. Ăn bánh cuốn Bà Hoành 66 Tô Hiến Thành ❤️<br />
        83. Ăn Bún Chả Hàng Quạt ❤️<br />
        84, Thử miến lươn Hàng Điếu ❤️<br />
        85, Đi làng văn hoá các dân tộc Việt Nam ❤️<br />
        86, đón mùa hoa dã quỳ trên vườn quốc gia Ba Vì cùng nhau ❤️<br />
        87. Cắm trại tại Núi Trầm ❤️<br />
        88. Check in Bốt Hàng mùa Thu lá vàng ❤️<br />
        89. Ăn Bánh Tráng trộn Hàng Trống ❤️<br />
        90. Check in tại De Tầm ❤️<br />
        91, Ăn mỳ vằn thắn phố Hàng Chiếu ❤️<br />
        92. Ăn Bún Mọc Hàng Gà ❤️<br />
        93, Cùng nhau cắm trại ở Sơn Tinh Camp ❤️<br />
        94, Đi chơi ở Royal city ❤️<br />
        95, Cùng nhau mua sắm quần áo phố Chùa Bộc và Cầu Giấy ❤️<br />
        96, Ăn vặt ngõ Tạm Thương ❤️<br />
        97. Mùng 01 lên Phủ Tây Hồ thắp hương ❤️<br />
        98, Check in sân bay Gia Lâm ❤️<br />
        99. Check in biểu tượng Hà Nội ở ga Cát Linh ❤️<br />
        100, Chụp ảnh cưới cùng nhau quanh Hà Nội ❤️<br />
        Lưu lại và tìm người cùng thực hiện nha ^^<br />
      </p>
      <a href='#top' style={{ border: "1px solid black", padding: "2px", backgroundColor: "lightblue", borderRadius: "2px", position: "fixed", right: 20, bottom: 20, display: hienthi }}>top</a>
    </div>
  );
}

export default App;
