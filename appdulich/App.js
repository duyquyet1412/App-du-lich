/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button,
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    AppRegistry,
    ScrollView,
    TextInput,
    Image,
    ImageBackground
  } from 'react-native';
import { StackNavigator } from 'react-navigation'; 


var StudentData = [
    {
        "id": "Tam Dao",
        "name": "Tam Đảo (Việt Nam)",
        "avata":
        "https://www.vntrip.vn/cam-nang/wp-content/uploads/2017/12/kinh-nghiem-du-lich-tam-dao.jpg",
        "thongtin" : "Tam Đảo là huyện cực bắc của tỉnh Vĩnh Phúc, Việt Nam. Diện tích: 236 km²,Tỉnh: Vĩnh Phúc.Thị trấn Tam Đảo có diện tích hơn 214ha, gồm 2 thôn, trong đó, đa phần những địa điểm du lịch nổi tiếng đều nằm ở thôn 1. Khu du lịch Tam Đảo được bao bọc bởi những cánh rừng nguyên sinh nên có khí hậu mát mẻ, kết hợp với cảnh sắc thiên nhiên vừa thơ mộng, vừa huyền ảo đem lại cho du khách nhiều cung bậc cảm xúc. "
    },
    {
        "id": "Da Lat",
        "name": "Đà Lạt (Việt Nam)",
        "avata":
        "https://saigonstartravel.com/wp-content/uploads/2019/05/tour-da-lat-2n2d-3.jpg",
        "thongtin" : "Thành phố Đà Lạt là tỉnh lỵ của tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, thuộc vùng Tây Nguyên, Việt Nam.Có độ cao 1500m so với mực nước biển nên thời tiết mát mẻ, dễ chịu, “thành phố ngàn hoa” chính là điểm nghỉ dưỡng lý tưởng nhất cho tất cả đối tượng khách du lịch có nhu cầu đặt phòng khách sạn tại Đà Lạt. Những “ cái không” thú vị của thành phố xinh đẹp có thể kể ra như: không hệ thống đèn giao thông, không có cảnh sát túc trực tại các nút thắt giao thông, không có xe xích lô chở khách du lịch, không điều hòa, không thức khuya, không có báo Lâm Đồng tại các sạp báo ở Đà Lạt "
    },
    {
        "id": "London (UK)",
        "name": "London (Vương quốc Anh)",
        "avata":
        "https://cdn.pixabay.com/photo/2016/12/11/23/26/london-1900570_960_720.jpg",
        "thongtin" : "Luân Đôn là thủ đô của Anh và Vương quốc Liên hiệp Anh và Bắc Ireland, đồng thời là thành phố lớn nhất Vương quốc Liên hiệp Anh và cũng là khu vực đô thị rộng thứ hai về diện tích trong Liên minh châu Âu.bạn sẽ có cơ hội được tham quan miễn phí một số địa điểm du lịch. Bảo tàng Anh trên đường Great Russell như một phòng trưng bày bộ sưu tập đồ tạo tác từ mọi nơi trên thế giới, tiêu biểu là bộ tượng cẩm thạch Elgin Marbles,  phiến đá Rosetta và xác ướp Ai Cập"
    },
    {
        "id": "Fuji Mountain",
        "name": "Núi Phú sĩ (Nhật Bản)",
        "avata":
        "https://www.tugo.com.vn/wp-content/uploads/i-mua-thu-thien-nhien-phu-si-810x459.png",
        "thongtin" : "Núi Phú Sĩ hay Núi Fuji nằm trên đảo Honshu là ngọn núi cao nhất Nhật Bản với 3.776,24 mét, là đỉnh núi cao thứ 2 trên một hòn đảo tại châu Á và thứ 7 trên thế giới. Núi Phú Sĩ (núi Fuji) nằm ở thành phố Hakone, nhưng các điểm đẹp nhất để ngắm núi Phú Sĩ lại là ở khúc 5 Fuji Lakes, hồ Kawaguno, chùa Chureito chứ không phải trung tâm Hakone."
    },
    {
        "id": "Eiffel Tower (France)",
        "name": "Tháp Eiffel (Pháp)",
        "avata":
        "https://www.welcome.vn/wp-content/uploads/2019/07/eiffel-968x635.jpg",
        "thongtin" : "Tháp Eiffel là một công trình kiến trúc bằng thép nằm trên công viên Champ-de-Mars, cạnh sông Seine, thành phố Paris.Dù ở mùa đông hay mùa hè, thời điểm nào bạn cũng có thể khám phá và ngắm nhìn thành phố từ đỉnh tháp Eiffel. Cảnh tượng và vẻ đẹp của thành phố sẽ thay đổi tùy thuộc vào mùa và thời gian khác nhau, mang mỗi một vẻ đẹp riêng đến nao lòng khiến cho du khách như bị say đắm. Bên cạnh đó, giờ mở cửa của tháp Eiffel thay đổi thường xuyên nên các bạn cũng cần tìm hiểu và kiểm tra thông tin trước khi đến đây nhé."
    },
    {
        "id": "Ha Long Bay (Vietnam)",
        "name": "Vịnh Hạ Long (Việt Nam)",
        "avata":
        "https://wiki-travel.com.vn/Uploads/picture/camnhi-193909093958-ha-long-kham-pha-nhung-dia-danh-noi-tieng.jpg",
        "thongtin" : "Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo thuộc thành phố Hạ Long, thành phố Cẩm Phả và một phần huyện đảo Vân Đồn của tỉnh Quảng Ninh"
    },
    {
        "id": "Pisa Tower (Italy)",
        "name": "Tháp Nghiêng Pisa (Ý)",
        "avata":
        "https://i.khoahoc.tv/photos/image/2017/10/04/thap-nghieng-pisa.jpg",
        "thongtin" : "Tháp nghiêng Pisa kì quan thế giới làm nên tên tuổi cho đất nước Ý xinh đẹp. Nếu bạn có cơ hội tới Ý thì hãy đặt chân tới Pisa để một lần được chiêm ngưỡng vẻ đẹp của công trình kiến trúc độc đáo nhất thế giới này. Để tới được tháp nghiêng Pisa thì bạn nên tới thành phố Florence trước sau đó mua vé tàu tới Pisa để tham quan tháp nghiêng."
    },
    {
        "id": "Anfitea tro Flavio (Italy)",
        "name": "Đấu trường La Mã (Ý)",
        "avata":
        "http://vyctravel.com/libs/upload/ckfinder/images/La%20M%C3%A3/Colosseum%206.png",
        "thongtin" : "Thành phố Rome là biểu tượng của nước Ý và cũng là một trong những thành phố được nhiều du khách yêu thích nhất Châu Âu. Ở thành phố này có rất nhiều những địa điểm du lịch hấp dẫn thu hút khách du lịch. Đấu trường La Mã là một trong những địa điểm được khách du rất yêu thích khi đến với thành phố này. Đấu trường bắt đầu mở của tham quan từ 8h30 đến trước kh mặt trời lặn khoảng một giờ. Bạn cũng có thể kết hợp giữa việc mua vé vào đấu trường với quảng trường La Mã và đồi Palatine với giá vé khoảng 12 euro ( tương ứng khoảng 335.000 đồng) ."
    },
    {
        "id": "Iguazu waterfall (Brazil)",
        "name": "Thác nước Iguazu",
        "avata":
        "https://trithucvn.net/wp-content/uploads/2016/08/thac-nuoc-tu-nhien-iguazu.jpg",
        "thongtin" : "Nằm giữa biên giới Brazil và Argentina, thác Iguazu được cả hai quốc gia ra sức bảo vệ và thu hút hàng trăm nghìn du khách đến đây tham quan và nghỉ dưỡng.Thác nước hình thành từ sự phun trào của núi lửa, tạo nên khe nứt trong lòng đất. Dòng dung nham rực lửa ngày trước bây giờ đã biến thành những dải nước nối nhau chảy xuống dòng sông xanh mát."
    },
    {
        "id": "Jeju island (South Korea)",
        "name": "Đảo Jeju (Hàn Quốc)",
        "avata":
        "https://univietravel.com/uploads/diem-den/nuocngoai/hanquoc/jejuisland/dao-jeju-han-quoc-2.jpg",
        "thongtin" : "Tỉnh Jeju hay Jeju-do viết tắt của 제주특별자치도, Hanja: 濟州特別自治道, Hán Việt là Tế Châu Đặc biệt Tự trị đạo là một đơn vị hành chính hàng tỉnh thuộc Hàn Quốc và cũng là đảo Tế Châu, hải đảo lớn nhất Hàn Quốc. Jeju nằm trong eo biển Triều Tiên phía tây-nam tỉnh Jeollanam-do"
    },
    {
        "id": "La Liberté éclairant le monde (US)",
        "name": "Tượng nữ thần tự do (Mỹ)",
        "avata":
        "https://vietsuntravel.com/t/800x0/1/r/content/tour-du-lich-my-cao-cap-rung-dong-truoc-ve-dep-sang-trong-nuoc-my-1457268434.jpg",
        "thongtin" : "Tượng Nữ thần tự do được kiến trúc sư người Pháp Frédéric Bartholdi thiết kế và chính thức khánh thành ngày 28/10/1886. Đây là tặng vật của người dân Pháp gửi đến nước Mỹ được đặt tại Đảo Liberty, New York. Nó cũng là niềm tự hào của người dân ở đây bởi lẽ trên thế giới có rất nhiều bức tượng lớn và ý nghĩa, song chưa có bức tượng nào lại nói lên nhiều ý nghĩa, gắn với nhiều câu chuyện và được ghi nhận nhiều kỷ lục như tượng Nữ thần tự do. "
    },
    {
        "id": "Phoenix Town (China)",
        "name": "Phượng Hoàng Cổ Trấn",
        "avata":
        "http://bizweb.dktcdn.net/100/027/217/products/phuong-hoang-co-tran-trung-quoc-ve-dem.jpg?v=1508308138673",
        "thongtin" : "Phượng Hoàng cổ trấn hay thành cổ Phượng Hoàng là trấn nhỏ nằm ở huyện Phượng Hoàng, phía tây tỉnh Hồ Nam, Trung Quốc. Đây là thành cổ có niên đại hơn 1300 năm, là nơi cư trú của nhiều dân tộc thiểu số như Thổ Gia, Miêu, Hồi, Hán… Nơi đây thu hút khách du lịch đi tour Phượng Hoàng cổ trấn bởi nét trầm mặc, đơn sơ, cổ kính của những ngôi nhà gỗ cổ, những ngõ nhỏ đường lát đá, nằm lặng lẽ bên dòng Đà Giang xanh trong êm ả. Cuộc sống nơi núi rừng sông nước này yên bình tới nỗi khiến những du khách từ thành thị “8 tiếng nhìn màn hình” như lạc vào cảnh phim cổ trang, quyến luyến chẳng muốn rời. "
    },
     {
        "id": "Wat Traimit (Thailand)",
        "name": "Chùa Phật Vàng (Thái Lan)",
        "avata":
        "http://vevatour.com/pic/Tour/THAI-1_636595566832043425_HasThumb_Thumb.jpg.ashx",
        "thongtin" : "Nằm ngay gần với trung tâm của thủ đô Bangkok, chùa Vàng Thái Lan chính là một ngôi chùa lộng lẫy nằm ngay cuối đường Yaowarat. Ngôi chùa này lộng lẫy vì trong ánh nắng vàng rực rỡ giữa thời tiết nắng nóng quanh năm của Thái Lan, những mái chùa được dát vàng như phản chiếu lại ánh nắng ra toàn bộ không gian xung quanh tạo nên một góc trời bừng sáng. "
    },
     {
        "id": "Gardens by the Bay (Singapore)",
        "name": "Gardens by the Bay (Singapore)",
        "avata":
        "https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/01/marina-bay-sands-singapore-11-noi-nhat-dinh-phai-den15.jpg",
        "thongtin" : "Gardens By The Bay là một trong những điểm thu hút hàng đầu của Singapore. Gardens By The Bay được chia thành ba khu vườn bên bờ sông đặc biệt – Vịnh Tây, Vịnh Nam (nơi có Supertrees, Flower Dome và Cloud Forest) và Vịnh Trung tâm. Hãy ở lại đến tối và thư giãn với màn trình diễn âm nhạc và ánh sáng thú vị vào lúc 7.45 tối và 8.45 tối hàng ngày bởi Bay Garden Rhapsody tại Supertree Grove. "
    }
];
module.export = StudentData;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass:'',
      checkuser:'',
      checkpass:''
    };
  }
  _getTextuser(text){
    this.setState({user:text})
  }
  _getTextpass(text){
    this.setState({pass:text})
  }
  _onPress(){
    this.setState({
      checkuser:this.state.user,
      checkpass:this.state.pass,
    })
    if (this.state.user == "quyet123" && this.state.pass =="123456") {
       this.props.navigation.navigate('List')
    }else{
      alert('Sai mất rồi')
    }
  }
  facebook(){
    this.props.navigation.navigate('List')
  }
render() {
  return (
<ImageBackground source={require('./wallapp.png')} style={{width:'100%',height:'100%'}}>
<ScrollView style={{padding: 20}}>
  <Text 
    style={{fontSize: 20,   marginVertical: 15, fontWeight:'bold',textAlign: 'center', color:'darkblue',fontStyle:'italic'}}>
    Welcome to World Travel
  </Text>
  <TextInput onChangeText ={this._getTextuser.bind(this)} placeholder='Your email'  id='Email' keyboardType="email-address" style={{backgroundColor:'lightblue',
    borderRadius: 15,fontWeight:'bold',opacity:0.7}}/>
  <TextInput onChangeText ={this._getTextpass.bind(this)} placeholder='Password'  id='Password'  secureTextEntry={true} style={{backgroundColor:'lightblue',
    borderRadius: 15, marginTop:10,fontWeight:'bold',opacity:0.7}}/>
  <View style={{margin:7,}} />
  <Button 
    // onPress={()=>this.props.navigation.navigate('List')}
    onPress = {this._onPress.bind(this)}
    title="Login"/>
    <Text style={{textAlign:"center",marginTop:10,fontSize:10,color:'white'}}>------------ OR CONNECT WITH ------------</Text>
    <TouchableOpacity onPress = {this.facebook.bind(this)}>
      <Image  source={require('./face.png')} style={{width:30,height:30,marginLeft:150,marginTop:10}}></Image>
    </TouchableOpacity>
</ScrollView>
</ImageBackground>
    )
  }
}
class FlatListStudent extends React.Component {
    static navigationOptions =
    {
        header: null
    };
    render(){
        return(
<ImageBackground source={require('./wallapp.png')} style={{width:'100%',height:'100%'}}>  
  <View style={{flex:1, marginTop:3,marginLeft: 8,marginRight: 3,}}>     
  <FlatList
    data={StudentData}
    renderItem={({item, index})=>{
    return(
      <TouchableHighlight onPress={() =>{this.props.navigation.navigate('Details',{ ten: item.name, anh: item.avata,id:item.id,thongtin:item.thongtin } ) }}>

        <View style={{flex:1,opacity:0.85, flexDirection:'row', backgroundColor: index % 2 == 0 ? 'lightblue': 'white', height: 90,padding: 5,}}>
          <Image 
            source={{uri: item.avata}}
            style={{width: 70, height:70,margin:5}}/>
          <View style={{flex:1}}>
            <Text style={{fontSize: 18,
              fontWeight: 'bold',
              color: 'darkred'}}> {item.id} </Text>
            <Text style={{color:'black', fontSize:17}}> {item.name}  </Text>
          </View>
        </View>

      </TouchableHighlight>
  );
}}
/>
  </View>
</ImageBackground>        
        );
    }
}


class DetailsScreen extends React.Component {
  render() {

    return (
      <ImageBackground source={require('./wall2.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={{ alignItems: 'center', justifyContent: 'center'}} >
      <View>
        <Text  style={{fontSize:20,fontWeight:'bold',margin:10, alignItems: 'center', justifyContent: 'center',color:'black'}}>Thông Tin</Text>
        </View>
        
              <View>
                    <Image
                        style={{ width: 250, height: 250}}
                        source={{ uri: this.props.navigation.state.params.anh }}
                    />
                
                  
                    </View>
                    <Text   style={{ fontSize: 20, color: '#000', marginTop: 10,fontWeight:'bold',color:'#ff0000' }}>  {this.props.navigation.state.params.id}</Text>
                   <Text
                        style={{ fontSize: 20, color: '#000' }}
                    >
                        {this.props.navigation.state.params.ten}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000'}}>Mô Tả : {this.props.navigation.state.params.thongtin}</Text>

        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()
          }
        />
      </View>
      </ImageBackground>
    );
  }
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Details: {
      screen: DetailsScreen,
    },
    List:{
      screen:FlatListStudent,
    },
  },
  {

    headerMode:'none',  }
);
export default class App extends React.Component {
  render() {  
    return <RootStack />;
  }
}
