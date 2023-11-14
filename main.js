const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $(".infor_name_song");
const cdthumb = $(".infor_img");
const singer = $(".infor_name_singer");
const audio = $("#audio");
const btnPlay = $(".play_pause");
const player = $(".playing");
const cdthumdCircle = $(".infor_img");
const range = $(".progress");
const timeA = $(".time_a");
const timeB = $(".time_b");
const nextBtn = $(".nextBtn");
const backBtn = $(".backBtn");
const btnRandom = $(".btn_Random");
const btnRepeat = $(".btn_repeat");
const choiseSong = $$(".song_item");
const control = $$(".control_item");
const center = $(".center");
const lyricOfSong = $(".right");
const progress_volume = $(".progress_volume");
const progress_volume2 = $(".progress_volume2");
// console.log(progress_volume2.value);

const app = {
    currentIndex: 0, //tien de de lay bai hat dau tien cua mang
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    _this: this,
    // config: JSON.parse(localStorage.setItem(PLAYER_STORAGE_KEY) || {}),
    // setConfig: function (key, value) {
    //     this.config[key] = value;
    //     localStorage.setItems(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    // },
    songs: [
        {
            name: "2 Phút Hơn",
            singer: "Pháo",
            path: "./css/mp3/2_phut_hon.mp3",
            image: "./css/img/2_phut_hon.jpeg",
            lyric: "Tay em đang run run<br> Nhưng anh thì cứ rót đi<br>Anh mà không nể em<br>Là khi mà anh không hết ly<br>Uống thêm vài ly<br>Đời mình chẳng mấy khi vui<br>Nốc thêm vài chai<br>Vì anh em chả mấy khi gặp lại<br>Nơi đây đang xoay xoay<br>Thế gian đang xoay vòng<br>Anh đang ở nơi đâu<br>Biết anh có thay lòng<br>Đừng nói chi mà mình uống đi<br>Một hai ba bốn hai ba một<br>Hình như anh nói anh say rồi<br>Một hai ba bốn hai ba một<br>Hình như anh nói anh yêu em rồi<br>Đừng nói chi mà mình uống đi<br>Đừng nói chi mà mình uống đi<br>Tay em đang run run<br>Nhưng anh thì cứ rót đi<br>Anh mà không nể em<br>Là khi mà anh không hết ly<br>Uống thêm vài ly<br>Đời mình chẳng mấy khi vui<br>Nốc thêm vài chai<br>Vì anh em chả mấy khi gặp lại<br>Nơi đây đang xoay xoay<br>Thế gian đang xoay vòng<br>Anh đang ở nơi đâu<br>Biết anh có thay lòng<br>Đừng nói chi mà mình uống đi<br>Một hai ba bốn hai ba một<br>Hình như anh nói anh say rồi<br>Một hai ba bốn hai ba một<br>Hình như anh nói anh yêu em rồi<br>Một hai ba bốn hai ba",
        },
        {
            name: "Buồn Của Anh",
            singer: "Đạt G",
            path: "./css/mp3/buon_cua_anh.mp3",
            image: "./css/img/buon_cua_anh.png",
            lyric: "Hai tay anh ôm xương rồng rất đau<br>Đôi vai anh mang nỗi buồn rất lâu<br>Chân anh lang thang kiếm em ở khắp trốn<br>Nước mắt trào tiếng em giờ ở nơi đâu<br>Đôi khi cô đơn giết anh từng cơn em hỡi<br>Bao nhiêu nước mắt để đổi bình yên bên em<br>Sao bao lâu quên tối nay mình anh lê bước<br>Anh ước gì cánh tay mình đừng buông ra<br>Chạy theo em ở phương trời xa lắm em ơi người ơi tình ơi<br>Chạy đi đâu để có niềm vui vùi chôn nỗi buồn<br>Hạ sang thu còn chưa kịp thay lá kia sao lòng em vội thay<br>Anh ở lại để ôm một mình nhớ thương<br>Ngày không em lòng anh tựa đông<br>Giá băng theo chiều tan màu mưa<br>Một lần xa vòng tay của em là bao bão lòng<br>Nhìn vào mắt của anh giờ đây<br>Khoé mi anh lệ tuôn thầm cay<br>Anh rất buồn nhưng không biết phải làm sao<br>Đôi khi cô đơn giết anh từng cơn em hỡi<br>Bao nhiêu nước mắt để đổi bình yên bên em<br>Sao bao lâu quên tối nay mình anh lê bước<br>Anh ước gì cánh tay mình đừng buông ra<br>Chạy theo em ở phương trời xa lắm em ơi người ơi tình ơi<br>Chạy đi đâu để có niềm vui vùi chôn nỗi buồn<br>Hạ sang thu còn chưa kịp thay lá kia sao lòng em vội thay<br>Anh ở lại để ôm một mình nhớ thương<br>Ngày không em lòng anh tựa đông<br>Giá băng theo chiều tan màu mưa<br>Một lần xa vòng tay của em là bao bão lòng<br>Nhìn vào mắt của anh giờ đây<br>Khoé mi anh lệ tuôn thầm cay<br>Anh rất buồn nhưng không biết phải làm sao<br>Anh rất buồn nhưng anh cũng chẳng còn em",
        },
        {
            name: "Cắt Đôi Nỗi Sầu",
            singer: "Tăng Duy Tân",
            path: "./css/mp3/cat_doi_noi_sau.mp3",
            image: "./css/img/cat_doi_noi_sau.webp",
            lyric: "Cắt đôi nỗi sầu<br>Anh buông tay cắt đôi nỗi sầu<br>Anh cắt đi cả bóng hình<br>Anh mang theo bên mình bấy lâu<br>Nỗi đau đã cạn<br>Cơn mưa trong tim cũng đã tan<br>Anh bán đi mọi nỗi buồn<br>Để chẳng còn gì ngoài thanh thản<br>Em ơi anh muốn<br>Mỗi tối đến anh không phải thất tình<br>Muốn quên một bóng hình<br>Em để lại, trong tim<br>Anh không thể đếm<br>Đã có bấy nhiêu đêm phải kiếm tìm<br>Kiếm thêm một lí do<br>Cho cuộc tình không tên<br>Anh đã thức, thức xuyên đêm<br>Anh đã cố gắng để quên em<br>Nhưng anh biết<br>Trong con tim anh không đành<br>Màn đêm xuống, muốn buông tay<br>Sầu giăng kín nỗi nhớ đong đầy<br>Anh đang chết dần ngày từng ngày<br>Em ơi<br>Nhớ em rất nhiều<br>Em ơi anh nhớ em rất nhiều<br>Anh nhớ hơn cả nhớ nhà<br>Nhưng em đâu nhớ gì đến ta<br>Lúc yêu chẳng hiểu<br>Khi chia li sẽ đau rất nhiều<br>Đau đến trong tận linh hồn<br>Và cuộc đời một màu băng giá<br>Em ơi anh muốn<br>Mỗi tối đến anh không phải thất tình<br>Muốn quên một bóng hình<br>Em để lại, trong tim<br>Anh không thể đếm<br>Đã có bấy nhiêu đêm phải kiếm tìm<br>Kiếm thêm một lí do<br>Cho cuộc tình không tên<br>Anh đã thức, thức xuyên đêm<br>Anh đã cố gắng để quên em<br>Nhưng anh biết<br>Trong con tim anh không đành<br>Màn đêm xuống, muốn buông tay<br>Sầu giăng kín nỗi nhớ đong đầy<br>Anh đang chết dần ngày từng ngày<br>Em ơi",
        },
        {
            name: "Chân Ái",
            singer: "Organe",
            path: "./css/mp3/chan_ai.mp3",
            image: "./css/img/chan_ai.jpeg",
            lyric: "ahihi",
        },
        {
            name: "Đã Sai Từ Lúc Đầu",
            singer: "Bố Gấu",
            path: "./css/mp3/da_sai_tu_luc_dau.mp3",
            image: "./css/img/da_sai_tu_luc_dau.jpeg",
            lyric: "Có những nỗi đau chẳng người nào thấu<br>Em đã chọn cất sâu vào tâm trí<br>Lúc anh quay mặt đi khi tình yêu tan dần<br>Mà chẳng cần chút phân vân<br>Đã có biết bao người gieo thương nhớ<br>Mà sao em lỡ thương một người vô tâm<br>Rồi đau đớn lặng thầm giấu đi giọt nước mắt<br>Nắng tắt trên đôi mi u buồn<br>Vì em thương anh hơn anh thương em<br>Chỉ biết đành câm nín nuốt bao xót xa<br>Chuyện tình yêu hai ta rẽ đôi<br>Em đau buồn lệ tràn khóe môi<br>Người ơi anh hãy nói một lời<br>Vì em thương anh hơn anh thương em<br>Em dại khờ sao chẳng biết anh vô tình<br>Nhủ lòng mình phải cố thứ tha<br>Nhưng bây giờ em mới nhận ra<br>Rằng đã sai từ lúc đầu<br>Mãi mãi với anh là điều vô nghĩa<br>Anh đã chọn cắt chia niềm hạnh phúc<br>Chẳng quan tâm cảm xúc em buồn đau thế nào<br>Rồi lạnh lùng bước đi mau<br>Vì em thương anh hơn anh thương em<br>Chỉ biết đành câm nín nuốt bao xót xa<br>Chuyện tình yêu hai ta rẽ đôi<br>Em đau buồn lệ tràn khóe môi<br>Người ơi anh hãy nói một lời<br>Vì em thương anh hơn anh thương em<br>Em dại khờ sao chẳng biết anh vô tình<br>Nhủ lòng mình phải cố thứ tha<br>Nhưng bây giờ em mới nhận ra<br>Rằng đã sai từ lúc đầu<br>Dừng lại đây thôi em đã quá mệt rồi<br>Chẳng thể ngu ngốc mong chờ anh thay đổi (chẳng thay đổi)<br>Dừng lại đây thôi em gục ngã thật rồi<br>Chẳng còn gì đâu anh hỡi<br>Vì em thương anh hơn anh thương em<br>Chỉ biết đành câm nín nuốt bao xót xa<br>Chuyện tình yêu hai ta rẽ đôi<br>Em đau buồn lệ tràn khóe môi<br>Người ơi anh hãy nói một lời<br>Vì em thương anh hơn anh thương em<br>Em dại khờ sao chẳng biết anh vô tình<br>Nhủ lòng mình phải cố thứ tha<br>Nhưng bây giờ em mới nhận ra<br>Rằng đã sai từ lúc đầu",
        },
        {
            name: "Dự Báo Thời Tiết",
            singer: "Grey D",
            path: "./css/mp3/du_bao_thoi_tiet_hom_nay_mua.mp3",
            image: "./css/img/du_bao_thoi_tiet_hom_nay_mua.jpeg",
            lyric: "Tiếng mưa rơi bên ngoài ô kính anh nhìn ra<br>Tiếng mưa như đang nhìn thấu tâm tình ta<br>Nhành hoa hướng dương kia nhạt đi, một màu hoa khác không như mọi khi<br>Hoặc chỉ là do tiếng mưa rơi làm cảm giác ta như vậy thôi?<br>Tiếng mưa rơi bên ngoài ô kính trong chiều nay<br>Sắp tan ca rồi nhưng làm sao đón em về đây?<br>Vì anh biết em sẽ làm ngơ, bỏ mặc anh dưới mưa ôm mộng mơ<br>Rồi cùng người yêu mới lạnh lùng đi về phía xa mờ<br>Mặt trời chẳng còn cần thiết<br>Chỉ một người biết làm điều gì để mưa hết rơi<br>Và bài nhạc buồn này được viết bởi một gã si tình<br>Liệu rằng giờ này người mới<br>Đường về lạnh có thay cho em chiếc áo khi mưa ướt đôi vai?<br>Rồi nhẹ nhàng đặt một nụ hôn vào làn môi đã từng là của anh<br>Hết thứ hai ngày lại đến thứ ba<br>Gió cứ bay, dòng người vẫn cứ qua<br>Phố sẽ đông vì trời có nắng mai<br>Còn những lúc mưa ngoài đường chẳng có ai, woah<br>Những hạt mưa trên cây vẫn còn lay động<br>Ly rượu vang ở trên tay anh còn cay nồng<br>Mọi thứ vẫn cứ thế đêm ngày xoay vòng<br>Vì sao chỉ có mỗi em là thay lòng?<br>Ooh, mây màu đen ngoài ô cửa kính che từng ngôi nhà<br>Ooh, view này anh thường hay ngồi chill, em thì pha trà ấm<br>Căn phòng hai người yên bình lắm<br>Chúng ta thường ra ngồi đây và ngắm mưa<br>Nhưng giờ đâu còn nữa đâu<br>Mặt trời chẳng còn cần thiết<br>Chỉ một người biết làm điều gì để mưa hết rơi<br>Và bài nhạc buồn này được viết bởi một gã si tình<br>Liệu rằng giờ này người mới<br>Đường về lạnh có thay cho em chiếc áo khi mưa ướt đôi vai?<br>Rồi nhẹ nhàng đặt một nụ hôn vào làn môi đã từng<br>Anh đã từng nghĩ suốt cuộc đời này em chỉ trao mình anh mà thôi<br>Liệu rằng giờ này người mới<br>Đường về lạnh có thay cho em chiếc áo khi mưa ướt đôi vai?<br>Rồi nhẹ nhàng đặt một nụ hôn<br>Vào làn môi đã từng là của riêng mình anh thôi",
        },
        {
            name: "Lệ Lưu Ly",
            singer: "Vũ Phụng Tiên",
            path: "./css/mp3/le_luu_ly.mp3",
            image: "./css/img/le_luu_ly.jpeg",
            lyric: "Em có gì đâu ngoài những vết thương sâu<br>Yêu bao nhiêu lâu mà vẫn cứ thấy đau<br>Gieo bao tương tư nặng ôm những nỗi buồn<br>Em trao tim em rồi đem bán linh hồn<br>Để đổi lấy đôi phút bình yên<br>Dẫu nước mắt ướt gối hằng đêm<br>Mà em ơi hi sinh vậy có xứng đáng?Vết bầm trên người em nhiều thêm<br>Chẳng có lấy một ngày ấm êm<br>Chỉ còn tai ương thâu đêm<br>Không còn tương lai đâu em!Em ơi dừng lại khi nắng đã phai<br>Dừng lại khi em bước sai<br>Dừng lại khi chẳng có ai<br>Biết em vẫn đang tồn tạiEm ơi đừng làm lệ vương khoé mi<br>Đừng làm thân xác úa si<br>Tình tàn xin cất bước đi<br>Chớ lưu luyến thêm làm gì?<br>Cố yêu được chi<br>Chơi đùa, chơi đùa thôi à<br>Xin đừng trêu đùa tôi mà<br>Đừng giam lòng tin vào nơi vực sâu<br>Dựng xây niềm đau thành ngôi nhà<br>Luôn là luôn là tôi<br>Đau lòng nhưng mà thôi<br>Thiên hà rơi tả tơi<br>Tim là nơi lả lơi<br>Họ lại xem tôi như con cờĐạp đổ tương lai tôi mong chờ<br>Sai vì tôi mộng mơ<br>Vì tình yêu nơi tôi tôn thờ?<br>Tình tàn tình vỡ tan<br>Trở về với khuôn mặt đáng thương<br>Nhìn hành trình dở dang<br>Chê bai hay những lời tán dương.Lệ mang sầu đau trên từng vết son<br>Người thương em xưa giờ đây chẳng còn<br>Đào sương hoa mơ em còn bỡ ngỡ<br>Thời gian thoi đưa tim em tan vỡ<br>Thương khi em yêu có đâu ngờ<br>Trăng soi thân em cứ xác xơ<br>Ở đâu người em nhớ.Em ơi dừng lại khi nắng đã phai<br>Dừng lại khi em bước sai<br>Dừng lại khi chẳng có ai<br>Biết em vẫn đang tồn tạiEm ơi đừng làm lệ vương khoé mi<br>Đừng làm thân xác úa si<br>Tình tàn xin cất bước đi<br>Chớ lưu luyến thêm làm gì?<br>Cố yêu được chi<br>Một khi đã hết giá trị lợi dụng<br>Họ trói con tiên em vào xiềng gông<br>Em chỉ muốn đến góp vui cho đời<br>Họ nghĩ là em đang chờ tiền côngEm đã từng ở thời hoàng kim<br>Từng sải cánh bay cùng đàn chim<br>Giờ nhìn lại thì em có gì?<br>Không một ai biết, không người hàn huyên<br>Em trượt dài theo con dốc<br>Em đã từng là một nàng tiênKể và cười y như con ngốc<br>Anh nghe rồi khóc như một thằng điên<br>Em trượt dài theo con dốc<br>Em đã từng là một nàng tiên<br>Kể và cười y như con ngốc<br>Anh nghe rồi khóc như một thằng điên.Em không buồn, em không khóc<br>Cũng chẳng thấy đau…<br>Như cái cách mà loài người<br>Vẫn thường cứu lấy nhauEm không buồn, em không khóc<br>Cũng chẳng thấy đau…<br>Như cái cách mà loài người<br>Vẫn thường cứu lấy nhau.",
        },
        {
            name: "Ngủ Một Mình",
            singer: "HIEUTHUHAI",
            path: "./css/mp3/ngu_mot_minh.mp3",
            image: "./css/img/ngu_mot_minh.jpeg",
            lyric: "Hãy ở lại với anh thêm một ngày nữa thôi<br> Vì anh không muốn phải ngủ một mình đêm nay đâu<br> Bên ngoài và uống say hay là ta nằm đây cả đêm<br> Chỉ là anh không muốn phải ngủ một mình đêm nay<br> Yeah yeah<br> Baby nói cho anh nghe em hãy nói cho anh nghe những điều mà<br> Điều em muốn sau khi đêm nay trôi qua<br> Là một trái tim hay những món quà<br> Em muốn đôi tay anh đặt ở những nơi đâu<br> Anh đã nhắm đôi môi từ những ngày đầu<br> I'm needing all your love<br> Nhưng em sẽ chẳng thể thấy anh khi qua ngày mai<br> Bởi vì thiên bình đây chẳng thể nào bên ai mãi mãi<br> Hãy hứa không nói cho ai<br> Hình em gửi anh làm sao mà có thể yeah<br> Thay những khi mà em đằng sau nằm ôm anh<br> Hãy ở lại với anh thêm một ngày nữa thôi<br> Vì anh không muốn phải ngủ một mình đêm nay đâu<br> Bên ngoài và uống say hay là ta nằm đây cả đêm<br> Bởi vì anh không muốn phải ngủ một mình đêm nay<br> Chẳng phải đón hay đưa<br> Cứ việc lên nhà anh như cách em từng đến thôi<br> Đây đâu phải là lần duy nhất của em ở đây<br> Uh dù là ta chẳng phải của nhau<br> Nhưng chỉ mình anh được hôn lên tóc em<br> Chẳng phải quay mặt về nơi khác lúc em thay đồ<br> Hoh oh<br> Anh biết điều đó là sai nhưng không cho em gặp ai<br> Phải ở bên anh đến ngày mai yah<br> Phải ở đến ngày mai yah<br> Bởi vì chúng ta cũng chỉ là<br> Hai con người cô đơn đến với nhau<br> Hãy ở lại với anh thêm một ngày nữa thôi<br> Vì anh không muốn phải ngủ một mình đêm nay đâu<br> Bên ngoài và uống say hay là ta nằm đây cả đêm<br> Chỉ là anh không muốn phải ngủ một mình đêm nay<br> Bởi vì anh không muốn phải ngủ một mình đêm nay<br> Chỉ là anh không muốn phải ngủ một mình đêm nay<br> Yeah yeah<br> Baby nói cho anh nghe baby nói cho anh nghe những điều là",
        },
        {
            name: "Thằng Điên",
            singer: "Justa Tee",
            path: "./css/mp3/thang_dien.mp3",
            image: "./css/img/thang_dien.jpeg",
            lyric: "Giờ tôi lại lang thang<br>Tình yêu thì miên man<br>Ngày xanh cùng mây tung tăng tựa mình bên phím đàn<br>Nhìn em mình ngơ ngác<br>Lòng anh chợt hơi khác<br>Tình yêu này đến đúng lúc thấy ánh sáng vụt qua<br>Nụ cười tỏa hương nắng<br>Bình minh và mây trắng<br>Hình như đều kêu tôi ôi thôi tình yêu đến rồi<br>Chẳng ai phải thắc mắc<br>Còn tôi thì đã chắc<br>Nàng ơi nàng hãy đến chiếm lấy tâm hồn tôi<br>Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật<br>Đợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui<br>I'm in love<br>Màu nắng cuốn lấp chân mây mờ xa<br>I'm in love<br>Thành phố chỉ thấy mỗi riêng mình ta<br>I'm in love<br>Tựa đầu bên tình yêu mới thiết tha<br>Chỉ crazy man fall in love<br>I'm in love<br>Hạnh phúc chỉ hết khi anh ngừng mơ<br>I'm in love<br>Cuộc sống vốn dĩ trôi như vần thơ<br>I'm in love<br>Ngả lưng bên cành cây lá xác xơ<br>Mờ sương đưa tay anh ôm lấy em<br>Dẫu biết chỉ là mơ<br>Dẫu biết chỉ là mơ mơ<br>Dẫu biết chỉ là mơ mơ<br>Crazy man fall in love (just just just)<br>Chơi vơi nơi mà loài người nhìn anh phiêu (như thằng điên)<br>Uh thì đâu ai muốn là người bình thường khi yêu (yêu thằng điên)<br>Anh đang mơ màng về bầu trời đầy trăng với sao em như cô tiên<br>Mình ca múa như hai con điên trên đồi thảo nguyên (là la lá)<br>Here we are<br>Em như Beyoncé hát hát<br>Here we are<br>Anh như Jay-Z đang rap rap về từng ngày nắng về từng ngày gió về từng ngày tháng có em<br>But I don't know who you are<br>Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật (chẳng biết mơ hay thật huh)<br>Đợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui<br>I'm in love<br>Màu nắng cuốn lấp chân mây mờ xa<br>I'm in love<br>Thành phố chỉ thấy mỗi riêng mình ta<br>I'm in love<br>Tựa đầu bên tình yêu mới thiết tha<br>Chỉ crazy man fall in love<br>I'm in love<br>Hạnh phúc chỉ hết khi anh ngừng mơ<br>I'm in love<br>Cuộc sống vốn dĩ trôi như vần thơ<br>I'm in love<br>Ngả lưng bên cành cây lá xác xơ<br>Mờ sương đưa tay anh ôm lấy em<br>Dẫu biết chỉ là mơ<br>Wake up I'm wake up<br>Thu sang rồi em thấy không em đi rồi anh cứ mong chờ<br>Wake up and I'm wake up<br>Tiếng vỡ tan cơn mê màng đánh thức nơi thiên đàng anh mơ (mơ)<br>Nơi thiên đàng anh mơ (mơ)<br>Nơi có em là yên bình anh mãi như thằng si tình<br>Dù đôi chân anh đi mòn lối vẫn mãi không về nơi em<br>I'm in love<br>Màu nắng cuốn lấp chân mây mờ xa<br>I'm in love<br>Thành phố chỉ thấy mỗi riêng mình ta<br>I'm in love<br>Tựa đầu bên tình yêu mới thiết tha<br>Chỉ crazy man fall in love (chỉ crazy man fall in love)<br>I'm in love<br>Hạnh phúc chỉ hết khi anh ngừng mơ<br>I'm in love<br>Cuộc sống vốn dĩ trôi như vần thơ<br>I'm in love<br>Ngả lưng bên cành cây lá xác xơ<br>Mờ sương đưa tay anh ôm lấy em<br>Dẫu biết chỉ là mơ<br>Như thằng điên (chỉ là mơ)<br>Như thằng điên (dẫu biết chỉ là mơ)<br>Như thằng điên<br>Yêu thằng điên",
        },
        {
            name: "Yêu Em Dại Khờ",
            singer: "Lou Hoàng",
            path: "./css/mp3/yeu_em_dai_kho.mp3",
            image: "./css/img/yeu_em_dai_kho.jpeg",
            lyric: "Thức trắng đêm nay<br>Có lẽ do anh đang say<br>Biết nói cho ai nghe đây<br>Bởi vì không còn được bên em mỗi ngày<br>Mình từng hứa sẽ vượt qua<br>Vậy mà kết thúc rời xa<br>Cớ sao anh cứ mong chờ<br>Vì anh đã yêu dại khờ<br>Từng cùng nhau đi qua giông bão<br>Nhưng không còn thấy nhau khi mưa tan<br>Tại vì sao tình yêu luôn khiến cho mình<br>Mãi tin vào một giấc mơ<br>Ngày em quay lưng bước đi<br>Mưa rơi ướt nhòe lên trên khóe mi<br>Vì khi yêu chẳng cần lý trí<br>Mặc kệ con tim làm điều vô lí<br>Đừng trao nhau ân ái nhạt màu<br>Đừng để trái tim cứ mãi u sầu<br>Có đôi khi mệt quá và muốn rời xa<br>Hãy nhớ lí do vì sao hai ta bắt đầu<br>Lời chia tay không nói thành lời<br>Và em cũng đau khi ta xa rời<br>Phải không người ơi?<br>Lệ rơi tim anh chơi vơi...<br>Vì anh đã yêu em dại khờ, dù bơ vơ...<br>Tình yêu ấy mãi không phai mờ<br>Anh luôn tôn thờ<br>Chẳng thể xóa đi những vui cười<br>Ngày nào bên em<br>Càng không muốn tương lai<br>Yêu người nào khác em<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Thời gian qua nhiều phong ba<br>Làm cho ta tự gây ra<br>Điều buồn bã lại cãi vã rồi chia xa<br>Pick up the phone<br>Vô tình giọng em vang lên<br>Vậy nếu không nói gì thêm<br>Thôi từ nay nên quên tên<br>Stop it thôi đừng nói nhiều thêm<br>Giờ quên được chưa<br>Bây giờ đã quá trễ<br>Để có thể quay lại yêu lần nữa<br>Tạm biệt tất cả những lời hứa dối trá<br>Những gì đã trôi qua<br>Tấm hình cũ đôi ta<br>Xóa sạch hết phôi pha<br>Đừng trao nhau ân ái nhạt màu<br>Đừng để trái tim cứ mãi u sầu<br>Có đôi khi mệt quá ta muốn rời xa<br>Hãy nhớ lí do vì sao hai ta bắt đầu<br>Lời chia tay không nói thành lời<br>Và em cũng đau khi ta xa rời<br>Phải không người ơi?<br>Lệ rơi tim anh chơi vơi<br>Vì anh đã yêu em dại khờ, dù bơ vơ<br>Tình yêu ấy mãi không phai mờ<br>Anh luôn tôn thờ<br>Chẳng thể xóa đi những vui cười<br>Ngày nào bên em<br>Càng không muốn tương lai<br>Yêu người nào khác em<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Vì anh đã yêu em dại khờ, dù bơ vơ<br>Tình yêu ấy mãi không phai mờ<br>Anh luôn tôn thờ<br>Chẳng thể xóa đi những vui cười<br>Ngày nào bên em<br>Càng không muốn tương lai<br>Yêu người nào khác em<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Vì anh đã yêu em dại khờ<br>Đã yêu em dại khờ<br>Thức trắng đêm nay<br>Có lẽ do anh đang say",
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `<div class="song_item ${
                index === this.currentIndex ? "active2" : ""
            }" data-index="${index}" >
                        <img
                            src="${song.image}"
                            alt=""
                            class="song_pic"
                        />
                        <div class="song_info">
                            <h5 class="song_name">${song.name}</h5>

                            <p class="song_singer">${song.singer}</p>
                        </div>
                    </div>`;
        });
        center.innerHTML = htmls.join("\n");
    },
    renderLyrics: function () {
        lyricOfSong.innerHTML = `<p class="lyrics">${
            app.songs[this.currentIndex].lyric
        }</p>`;
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    // loadConfig: function () {
    //     this.isRandom = this.config.isRandom
    //     this.isRepeat = this.config.isRepeat
    // },
    handleEvent: function () {
        // xu ly khi click playing[]
        btnPlay.onclick = function () {
            if (app.isPlaying) {
                app.isPlaying = false;
                audio.pause();
                // player.classList.toggle("fa-play");
                player.classList.replace("fa-pause", "fa-play");
                cdthumdCircle.style.animationPlayState = "paused";
            } else {
                app.isPlaying = true;
                audio.play();
                player.classList.replace("fa-play", "fa-pause");
                // player.classList.toggle("fa-pause");
                cdthumdCircle.style.animation = `spinCricle 12s infinite linear`;
            }
        };
        //khi tien do bai hat thay doi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                range.value = progressPercent;
                // console.log(audio.duration);
                let time_start_Minutes = Math.floor(audio.currentTime / 60);
                let time_start_Seconds = Math.floor(
                    audio.currentTime - time_start_Minutes * 60
                );

                let time_end_Minutes = Math.floor(audio.duration / 60);
                let time_end_Seconds = Math.floor(
                    audio.duration - time_end_Minutes * 60
                );

                if (time_end_Minutes < 10) {
                    time_end_Minutes = "0" + time_end_Minutes;
                }
                if (time_end_Seconds < 10) {
                    time_end_Seconds = "0" + time_end_Seconds;
                }
                if (time_start_Minutes < 10) {
                    time_start_Minutes = "0" + time_start_Minutes;
                }
                if (time_start_Seconds < 10) {
                    time_start_Seconds = "0" + time_start_Seconds;
                }

                timeA.textContent = `${
                    time_start_Minutes + ":" + time_start_Seconds
                }`;
                timeB.textContent = `${
                    time_end_Minutes + ":" + time_end_Seconds
                }`;
            }
        };
        //xu ly tua bai hat
        range.onchange = function (range) {
            const sleekTime = audio.duration * (range.target.value / 100);
            audio.currentTime = sleekTime;
        };
        progress_volume.onchange = function (progress_volume) {
            const slekkVolume = progress_volume.target.value;
            // console.log(slekkVolume);
            audio.volume = slekkVolume / 100;
        };
        progress_volume.oninput = function (progress_volume) {
            progress_volume2.value = progress_volume.target.value;
        };

        // khi next bai hat
        nextBtn.onclick = function () {
            if (app.isRandom) {
                app.randomSong();
            } else {
                app.nextSong();
            }
            app.render();
            audio.play();
            player.classList.replace("fa-play", "fa-pause");
            app.isPlaying = true;
            cdthumdCircle.style.animation = `spinCricle 12s infinite linear`;
            nextBtn.classList.add("control_click");
            setTimeout(function () {
                nextBtn.classList.remove("control_click");
            }, 200);
            app.scrollToActiveSong();
            // player.classList.toggle("fa-pause");
        };
        backBtn.onclick = function () {
            if (app.isRandom) {
                app.randomSong();
            } else {
                app.backSong();
            }
            audio.play();
            app.render();
            player.classList.replace("fa-play", "fa-pause");
            app.isPlaying = true;
            cdthumdCircle.style.animation = `spinCricle 12s infinite linear`;
            backBtn.classList.add("control_click");
            setTimeout(function () {
                backBtn.classList.remove("control_click");
            }, 200);
            app.scrollToActiveSong();
        };
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };
        btnRandom.onclick = function () {
            btnRandom.classList.toggle("active");
            app.isRandom = !app.isRandom;
            // app.setConfig(isRandom, app.isRandom);

            // app.randomSong();
        };
        btnRepeat.onclick = function () {
            btnRepeat.classList.toggle("active");
            app.isRepeat = !app.isRepeat;
            // app.setConfig(isRepeat, app.isRepeat);
        };
        choiseSong.onclick = function () {
            app.changeSong();
            audio.play();
            player.classList.replace("fa-play", "fa-pause");
            app.isPlaying = true;
            cdthumdCircle.style.animation = `spinCricle 12s infinite linear`;
            // choiseSong.classList.add("control_click");

            // setTimeout(function () {
            //     choiseSong.classList.remove("control_click");
            // }, 200);
        };
        // lang nghe hang vi click vao playlist
        center.onclick = function (e) {
            if (e.target.closest(".song_item:not(.active2)")) {
                app.currentIndex = Number(e.target.getAttribute("data-index"));
                console.log(app.currentIndex);

                app.loadCurrentSong();
                audio.play();
                app.render();
                player.classList.replace("fa-play", "fa-pause");
                app.isPlaying = true;
                cdthumdCircle.style.animation = `spinCricle 12s infinite linear`;
            }
        };
    },
    loadCurrentSong: function () {
        // console.log(cdthumb, singer);
        heading.textContent = this.currentSong.name;
        cdthumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        singer.textContent = this.currentSong.singer;
        audio.src = this.currentSong.path;
    },
    backSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        this.renderLyrics();
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.renderLyrics();
    },
    changeSong: function () {
        this.currentIndex;
    },
    randomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        this.renderLyrics();
    },
    repeatSong: function () {
        this.currentIndex = this.currentIndex;
        // this.loadCurrentSong();
    },
    scrollToActiveSong: function () {
        setTimeout(function () {
            $(".song_item.active2").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 150);
    },
    start: function () {
        //dinh nghia cac thuoc tinh cho ob
        this.defineProperties();

        // lang nghe vaf su ly su kien (DOM event)
        this.render();
        //load current song, tia bai hat dau tien khi chay ung dung
        this.loadCurrentSong();
        this.handleEvent();
        this.nextSong();
        this.backSong();
    },
};
app.start();
