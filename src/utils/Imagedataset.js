import { Lottie, RatingScreen } from '../components';
import React from 'react';
import images from '../index';
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from '../utils';
import IconM from "react-native-vector-icons/FontAwesome5";
import IconT from "react-native-vector-icons/MaterialIcons";
import IconF from "react-native-vector-icons/Feather";
import IconO from 'react-native-vector-icons/Octicons';
import { RouteName } from '../routes';
import { HomeTabStyles, Style } from '../styles';

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiperfirst',
    title: "Swipertitle",
    animation: <Lottie
      source={images.First_Swiper}
    />,

  },
  {
    key: 's2',
    text: 'SwiperFirstTwo',
    title: 'SwiperTitleTwo',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'SwiperFirstThree',
    title: 'Swipertitlethree',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },

]
export const Countrydata = [
  {
    "id": 1,
    "textsimple": 'Afghanistan',
    "digit": '+ 93',
  },
  {
    "id": 2,
    "textsimple": 'Albania',
    "digit": '+ 355',
  },
  {
    "id": 3,
    "textsimple": 'Algeria',
    "digit": '+ 213',
  },
  {
    "id": 1,
    "textsimple": 'Belgium',
    "digit": '+ 32',
  },
  {
    "id": 4,
    "textsimple": 'Belize',
    "digit": '+ 501',
  },
  {
    "id": 5,
    "textsimple": 'Benin',
    "digit": '+ 229',
  },
  {
    "id": 6,
    "textsimple": 'Gambia',
    "digit": '+ 220',
  },
  {
    "id": 7,
    "textsimple": 'Georgia',
    "digit": '+ 995',
  },
  {
    "id": 8,
    "textsimple": 'Greece',
    "digit": '+ 30',
  },
  {
    "id": 9,
    "textsimple": 'Hong Kong',
    "digit": '+ 852',
  },
  {
    "id": 10,
    "textsimple": 'Iceland',
    "digit": '+ 354',
  },
  {
    "id": 11,
    "textsimple": 'India',
    "digit": '+ 91',
  },
  {
    "id": 12,
    "textsimple": 'Japan',
    "digit": '+ 81',
  },
  {
    "id": 13,
    "textsimple": 'Kazakhstan',
    "digit": '+ 7',
  },
  {
    "id": 14,
    "textsimple": 'Lebanon',
    "digit": '+ 961',
  },
  {
    "id": 15,
    "textsimple": 'Liberia',
    "digit": '+ 231',
  },
  {
    "id": 16,
    "textsimple": 'Liechtenstein',
    "digit": '+ 423',
  },
  {
    "id": 17,
    "textsimple": 'Luxembourg',
    "digit": '+ 352',
  },
  {
    "id": 18,
    "textsimple": 'Malawi',
    "digit": '+ 256',
  },
  {
    "id": 19,
    "textsimple": 'Maldives',
    "digit": '+ 960',
  },
  {
    "id": 20,
    "textsimple": 'Mexico',
    "digit": '+ 52',
  },
]

export const Messagelistdata = [
  {
    "id": 1,
    "image": images.UXdEsigner_one,
    "text": 'Alastair_Cook',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 2,
    "image": images.Chat_image_one,
    "text": 'Graham_Gooch',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 3,
    "image": images.Fan_Service_image_2,
    "text": 'Andrew_Flintoff',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 4,
    "image": images.Chat_image_saven,
    "text": 'Ian_Botham',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 5,
    "image": images.Chat_image_five,
    "text": 'Sophia_Dunkley',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_41',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 6,
    "image": images.Chat_image_six,
    "text": 'Lauren_Bell',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 7,
    "image": images.Chat_image_saven,
    "text": 'Charlie_Dean',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_1',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 8,
    "image": images.Chat_image_five,
    "text": 'Danni_Wyatt',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_3',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
];
export const Faqdataset = [
  {
    "id": 1,
    "paymentparegraph": "FAQ_paregraph_One",
    "smalltext": 'FAQ_paregraph_Two',
  },
  {
    "id": 2,
    "paymentparegraph": "FAQ_paregraph_Three",
    "smalltext": 'FAQ_paregraph_Four',
  },
  {
    "id": 3,
    "paymentparegraph": "FAQ_paregraph_Five",
    "smalltext": 'FAQ_paregraph_Six',
  },
  {
    "id": 4,
    "paymentparegraph": "FAQ_Paregraph_Saven",
    "smalltext": 'FAQ_Paregraph_Aeight',
  },
  {
    "id": 5,
    "paymentparegraph": "FAQ_Paregraph_Nine",
    "smalltext": 'FAQ_Paregraph_Ten',
  },
  {
    "id": 6,
    "paymentparegraph": "FAQ_Paregraph_Eleven",
    "smalltext": 'FAQ_One',
  },
  {
    "id": 7,
    "paymentparegraph": "FAQ_Two",
    "smalltext": 'FAQ_Three',
  },
  {
    "id": 8,
    "paymentparegraph": "FAQ_Four",
    "smalltext": 'FAQ_Five',
  },
]
export const MessageBox = [
  {
    "id": 1,
    "text": 'Mennage_Text',
    "iconname": <Icon name="woman" size={20} color={Colors.theme_background} />
  },
  {
    "id": 2,
    "text": 'Clean_Text',
    "iconname": <IconT name="cleaning-services" size={20} color={Colors.theme_background} />
  },
  {
    "id": 3,
    "text": 'Repair_Text',
    "iconname": <IconT name="home-repair-service" size={20} color={Colors.theme_background} />
  },
  {
    "id": 4,
    "text": 'Fan_Text',
    "iconname": <IconM name="fan" size={20} color={Colors.theme_background} />
  },
]
export const OurService = [
  {
    "id": 1,
    "text": 'AC_Service',
    "Acimage": images.AC_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 2,
    "text": 'Fan_Service',
    "Acimage": images.FanAc_Image,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 3,
    "text": 'Order_History_2',
    "Acimage": images.Plumber_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 4,
    "text": 'Order_History_7',
    "Acimage": images.Clining_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
]
export const OurServiceViewAll = [
  {
    "id": 1,
    "text": 'AC_Service',
    "Acimage": images.AC_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 2,
    "text": 'Fan_Service',
    "Acimage": images.FanAc_Image,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 3,
    "text": 'Order_History_2',
    "Acimage": images.Plumber_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 4,
    "text": 'Order_History_7',
    "Acimage": images.Clining_Animation,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 5,
    "text": 'Order_History_4',
    "Acimage": images.Home_Security,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 6,
    "text": 'Order_History_3',
    "Acimage": images.Electric_Service,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
]
export const HiNewsViewdata = [
  {
    "id": 1,
    "text": 'AC_News',
    "newsparegraph": 'News_Paregraph',
    "Acimage": images.Fan_Service_image_1,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 2,
    "text": 'AC_Clean_News',
    "newsparegraph": 'News_Paregraph_two',
    "Acimage": images.Computer_service,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 3,
    "text": 'AC_Fan_News',
    "newsparegraph": 'News_Paregraph_three',
    "Acimage": images.cleaning,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
  {
    "id": 4,
    "text": 'AC_Service_News',
    "newsparegraph": 'News_Paregraph_four',
    "Acimage": images.Fan_Service_image_4,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />
  },
]
export const OrderHistoryData = [
  {
    "id": 1,
    "image": images.UXdEsigner_one,
    "text": 'Alastair_Cook',
    "texttwo": 'Order_History_1',
    "ButtonText": 'Days_four'
  },
  {
    "id": 2,
    "image": images.Chat_image_one,
    "text": 'Graham_Gooch',
    "texttwo": 'Order_History_2',
    "ButtonText": 'Open_Text'
  },
  {
    "id": 3,
    "image": images.Computer_service,
    "text": 'Andrew_Flintoff',
    "texttwo": 'Order_History_3',
    "ButtonText": 'Open_Text'
  },
  {
    "id": 4,
    "image": images.Fan_Service_image_3,
    "text": 'Ian_Botham',
    "texttwo": 'Order_History_4',
    "ButtonText": 'Days_four'
  },
  {
    "id": 5,
    "image": images.Chat_image_five,
    "text": 'Sophia_Dunkley',
    "texttwo": 'Order_History_5',
    "ButtonText": 'Days_13'
  },
  {
    "id": 6,
    "image": images.Chat_image_six,
    "text": 'Lauren_Bell',
    "texttwo": 'Order_History_6',
    "ButtonText": 'Days_3'
  },
  {
    "id": 7,
    "image": images.Chat_image_saven,
    "text": 'Charlie_Dean',
    "texttwo": 'Order_History_7',
    "ButtonText": 'Days_18'
  },
  {
    "id": 8,
    "image": images.cleaning,
    "text": 'Danni_Wyatt',
    "texttwo": 'Order_History_8',
    "ButtonText": 'Open_Text'
  },
]
export const OrderDetailsData = [
  {
    "id": 1,
    "title": 'Order_History_6',
    "Charge": '$ 15/',
    "digit": 0,
    "Acimage": images.Chat_image_six,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />,
    "description": 'Order_Detail_Description_1'
  },
  {
    "id": 2,
    "title": 'Order_History_3',
    "Charge": '$ 30/',
    "digit": 1,
    "Acimage": images.Computer_service,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />,
    "description": 'Order_Detail_Description_2'
  },
  {
    "id": 3,
    "title": 'Order_History_5',
    "Charge": '$ 12/',
    "digit": 0,
    "Acimage": images.Chat_image_five,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />,
    "description": 'Order_Detail_Description_3'
  },
  {
    "id": 4,
    "title": 'Order_History_2',
    "Charge": '$ 20/',
    "digit": 0,
    "Acimage": images.Chat_image_one,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />,
    "description": 'Order_Detail_Description_4'
  },
  {
    "id": 5,
    "title": 'AC_News',
    "Charge": '$ 35/',
    "digit": 1,
    "Acimage": images.Fan_Service_image_1,
    "iconname": <Icon name="message1" size={20} color={Colors.theme_background} />,
    "description": 'Order_Detail_Description_5'
  },
]

export const ForBeginnersData = [
  {
    id: 1,
    bgImg: images.beginnerimg1,
    title: "Title_1",
    subTitle: "SubTitle_1",
    workoutName: "WorkoutName_1",
    week: "Week_1",
    followers: "Followers_1",
    rating: "Rating_1"
  },
  {
    id: 2,
    bgImg: images.beginnerimg2,
    title: "Title_2",
    subTitle: "SubTitle_2",
    workoutName: "WorkoutName_1",
    week: "Week_2",
    followers: "Followers_2",
    rating: "Rating_2"
  },
  {
    id: 3,
    bgImg: images.beginnerimg3,
    title: "Title_3",
    subTitle: "SubTitle_3",
    workoutName: "WorkoutName_3",
    week: "Week_3",
    followers: "Followers_4",
    rating: "Rating_3"
  },
  {
    id: 4,
    bgImg: images.beginnerimg4,
    title: "Title_4",
    subTitle: "SubTitle_4",
    workoutName: "WorkoutName_4",
    week: "Week_4",
    followers: "Followers_4",
    rating: "Rating_4"
  },
]

export const advanceProgrameData = [
  {
    id: 1,
    bgImg: images.advanceProgrameimg1,
    title: "Advance_Program_Title_1",
    subTitle: "Advance_Program_SubTitle_1",
    workoutName: "Advance_Program_WorkoutName_1",
    week: "Advance_Program_Week_1",
    followers: "Advance_Program_Followers_1",
    rating: "Advance_Program_Rating_1"
  },
  {
    id: 2,
    bgImg: images.advanceProgrameimg2,
    title: "Advance_Program_Title_2",
    subTitle: "Advance_Program_SubTitle_2",
    workoutName: "Advance_Program_WorkoutName_1",
    week: "Advance_Program_Week_2",
    followers: "Advance_Program_Followers_2",
    rating: "Advance_Program_Rating_2"
  },
  {
    id: 3,
    bgImg: images.advanceProgrameimg3,
    title: "Advance_Program_Title_3",
    subTitle: "Advance_Program_SubTitle_3",
    workoutName: "Advance_Program_WorkoutName_3",
    week: "Advance_Program_Week_3",
    followers: "Advance_Program_Followers_4",
    rating: "Advance_Program_Rating_3"
  },
  {
    id: 4,
    bgImg: images.advanceProgrameimg4,
    title: "Advance_Program_Title_4",
    subTitle: "Advance_Program_SubTitle_4",
    workoutName: "Advance_Program_WorkoutName_4",
    week: "Advance_Program_Week_4",
    followers: "Advance_Program_Followers_4",
    rating: "Advance_Program_Rating_4"
  },
]

export const trainingFocusData = [
  {
    id: 1,
    workoutImg: images.focusImg1,
    Workname: "Workname_1"
  },
  {
    id: 2,
    workoutImg: images.focusImg2,
    Workname: "Workname_2"
  },
  {
    id: 32,
    workoutImg: images.focusImg3,
    Workname: "Workname_3"
  },
  {
    id: 4,
    workoutImg: images.focusImg4,
    Workname: "Workname_4"
  },
]

export const Calenderdata = [
  {
    id: 1,
    title: "Sun_Label",
    digit: "5",
    icon: true,
  },
  {
    id: 2,
    title: "Mon_Label",
    digit: "6",
    icon: true,
  },
  {
    id: 3,
    title: "Tue_Label",
    digit: "7",
    icon: true,
  },
  {
    id: 4,
    title: "Wed_Label",
    digit: "8",
    icon: false,
  },
  {
    id: 5,
    title: "Thu_Label",
    digit: "9",
    icon: false,
  },
  {
    id: 6,
    title: "Fri_Label",
    digit: "10",
    icon: false,
  },

]

export const workoutData = [
  {
    id: 1,
    VecIcon: "MaterialCommunityIcons",
    IconName: "timer-outline",
    workoutInfo: "WorkoutInfo_1"
  },
  {
    id: 2,
    VecIcon: "MaterialCommunityIcons",
    IconName: "timer-outline",
    workoutInfo: "WorkoutInfo_2"
  },
  {
    id: 3,
    VecIcon: "MaterialCommunityIcons",
    IconName: "timer-outline",
    workoutInfo: "WorkoutInfo_3"
  },
]

export const lineData = [
  { value: 0, dataPointText: '0' },
  { value: 20, dataPointText: '20' },
  { value: 18, dataPointText: '18' },
  { value: 40, dataPointText: '40' },
  { value: 36, dataPointText: '36' },
  { value: 60, dataPointText: '60' },
  { value: 50, dataPointText: '50' },
  { value: 55, dataPointText: '55' }
]

export const listingData = [
  { id: "1", title: "workout_List_Label_1", image: images.frog_press },
  { id: "2", title: "workout_List_Label_2", image: images.abs_crunches },
  { id: "3", title: "workout_List_Label_3", image: images.side_plank },
  { id: "4", title: "workout_List_Label_4", image: images.lunges },
  { id: "5", title: "workout_List_Label_5", image: images.cobras }
]

export const mealTodayDaya = [
  {
    id: 1,
    mealIcon: images.todayMeal_1,
    mealTitle: "MealTitle_1",
    mealInfo: "MealInfo_1",
    burnedkcalNum: "408"
  },
  {
    id: 1,
    mealIcon: images.todayMeal_2,
    mealTitle: "MealTitle_2",
    mealInfo: "MealInfo_2",
    burnedkcalNum: "545"
  },
  {
    id: 1,
    mealIcon: images.todayMeal_3,
    mealTitle: "MealTitle_3",
    mealInfo: "MealInfo_3",
    burnedkcalNum: "705"
  },
]

export const dieatSearchData = [
  { id: 1, title: "recent_title_1", info: "dish_info_1", KcalGet: "KcalGet_1" },
  { id: 2, title: "recent_title_2", info: "dish_info_2", KcalGet: "KcalGet_2" },
  { id: 3, title: "recent_title_3", info: "dish_info_3", KcalGet: "KcalGet_3" }
]

export const nutritionData = [
  { id: 1, leftTitle: "leftTitle_1", nutriion: "nutriion_1", },
  { id: 2, leftTitle: "leftTitle_2", nutriion: "nutriion_2", },
  { id: 3, leftTitle: "leftTitle_3", nutriion: "nutriion_3", },
]

export const nutritionCarbData = [
  { id: 1, leftTitle: "leftTitle_4", nutriion: "nutriion_4", },
  { id: 2, leftTitle: "leftTitle_5", nutriion: "nutriion_5", },

]

export const dataArray = [
  {
    id: '1',
    title: "Lose_Weight",
    content: "Get_Learn"
  },
  {
    id: '2',
    title: "Get_Stronger",
    content: "Level_Fitness"
  },
  {
    id: '3',
    title: "Gain_Weight",
    content: "Helping_Fitness"
  }
];

export const ChatDataText = [
  {
    "id": 1,
    "ChatSelf": 'ChatText_Let_Me',
    "ChatTime": '03:16',
    "DateText": 'Ten_Oct',
    "DateText_Actually": 'Chattext_Actually_I_Have',
    "ChatTime_User": '03:18',
  },
  {
    "id": 2,
    "ChatSelf": 'Chat_Can_You_Just',
    "ChatTime": '03:19',
    "DateText": 'Ten_Oct',
    "DateText_Actually": 'Chat_Multipal_Project',
    "ChatTime_User": '03:19',
  },
  {
    "id": 3,
    "ChatSelf": 'Chat_Excellent',
    "ChatTime": '03:20',
    "DateText": 'Ten_Oct',
    "DateText_Actually": 'Chat_Multipal_Project',
    "ChatTime_User": '03:19',
  },
  {
    "id": 4,
    "ChatSelf": 'Chat_Excellent',
    "ChatTime": '03:20',
    "DateText": 'Ten_Oct',
    "DateText_Actually": 'Chat_Last_Paregraph',
    "ChatTime_User": '03:20',
  },
]

export const DataofDropdown = [
  { label: "English_Label", value: 'en' },
  { label: "Arabic_Label", value: 'ara' },
  { label: "Spanish_Label", value: 'Spa' },
  { label: "French_Label", value: 'Fr' },
];
