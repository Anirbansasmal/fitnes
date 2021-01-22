import React from 'react';
import SideMenu from './SideMenu';
import {Dimensions, Text} from 'react-native';

var {height, width} = Dimensions.get('window');

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import WorkoutsScreen from '../screens/Workouts';
import Head from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const HeaderComp = (navigation, titleTxt) => (
//   <Head navigation={navigation} titleTxt={titleTxt} />
// );

// import ExercisesScreen from '../screens/Exercises';
import DietsScreen from '../screens/Diets';
import PostsScreen from '../screens/Posts';
import DiatesPlan from '../screens/DiatesPlan';
import My_program from '../screens/My_program';
import Diabetes from '../screens/Diabetes';
import height_profile from '../screens/height_profile';
// import EBodypartsScreen from '../screens/EBodyparts';
// import EquipmentsScreen from '../screens/Equipments';
// import WGoalsScreen from "../screens/WGoals";
// import WLevelsScreen from "../screens/WLevels";
// import ExercisesByMuscleScreen from "../screens/ExercisesByMuscle";
// import ExercisesByEquipmentScreen from "../screens/ExercisesByEquipment";
// import WorkoutsByGoalScreen from "../screens/WorkoutsByGoal";
// import WorkoutsByLevelScreen from "../screens/WorkoutsByLevel";
// import PostsByTagScreen from "../screens/PostsByTag";
import DietsByCategoryScreen from '../screens/DietsByCategory';
// import WorkoutDetailsScreen from "../screens/WorkoutDetails";
// import ExerciseDetailsScreen from "../screens/ExerciseDetails";
import DietDetailsScreen from '../screens/DietDetails';
import PostDetailsScreen from '../screens/PostDetails';
import My_billing from '../screens/My_billing';
// import VideoExerciseScreen from "../screens/VideoExercise";
// import Day1Screen from "../screens/Day1";
// import Day2Screen from "../screens/Day2";
// import Day3Screen from "../screens/Day3";
// import Day4Screen from "../screens/Day4";
// import Day5Screen from "../screens/Day5";
// import Day6Screen from "../screens/Day6";
// import Day7Screen from "../screens/Day7";
import ProfileScreen from '../screens/Profile';
import LogoutScreen from '../screens/Logout';
import Profile_custo from '../screens/Profile_custo';
import Profile_details from '../screens/Profile_details';
import Profile_health from '../screens/Profile_health';
import My_Calender from '../screens/My_Calender';
import My_task from '../screens/My_task';
import More_option from '../screens/More_option';
// import WorkoutSearchScreen from "../screens/WorkoutSearch";
// import WorkoutResultsScreen from "../screens/WorkoutResults";
// import CalculatorScreen from "../screens/Calculator";
// import QuotesScreen from "../screens/Quotes";
// import SettingsScreen from "../screens/Settings";
// import TermsScreen from "../screens/Terms";
// import AboutUsScreen from "../screens/AboutUs";
// import TagsScreen from "../screens/Tags";
// import CategoriesScreen from "../screens/Categories";
// import ContactUsScreen from "../screens/ContactUs";
import OfflineBar from '../components/OfflineBar';
import PostDetails from '../screens/PostDetails';

// const leftIcon = (navigation, icon) => <Icon
// 	name={icon}
// 	style={{marginLeft: 20}}
// 	size={27}
// 	color="white"
// 	onPress={() => navigation.navigate('DrawerOpen')}
// />;

// const navigationOptions = {
//   navigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f39c12',
//       shadowOpacity: 0,
//       elevation: 0,
//     },
//     headerBackTitle: null,
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       textAlign: 'center',
//       alignSelf: 'center',
//       fontSize: 18,
//       color: '#fff',
//       fontWeight: 'bold'
//     }
//   }
// };

// const HomeNavigator = StackNavigator(
// {
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
// 	  headerLeft: leftIcon(navigation, 'md-menu')
// 	})
//   },
//   WorkoutsScreen: {
//     screen: WorkoutsScreen
//   },
//   ExercisesScreen: {
//     screen: ExercisesScreen
//   },
//   DietsScreen: {
//     screen: DietsScreen
//   },
//   PostsScreen: {
//     screen: PostsScreen
//   },
//   EBodypartsScreen: {
//     screen: EBodypartsScreen
//   },
//   EquipmentsScreen: {
//     screen: EquipmentsScreen
//   },
//   ExercisesByMuscleScreen: {
//     screen: ExercisesByMuscleScreen
//   },
//   ExercisesByEquipmentScreen: {
//     screen: ExercisesByEquipmentScreen
//   },
//   WorkoutsByGoalScreen: {
//     screen: WorkoutsByGoalScreen
//   },
//   WorkoutsByLevelScreen: {
//     screen: WorkoutsByLevelScreen
//   },
//   PostsByTagScreen: {
//     screen: PostsByTagScreen
//   },
//   DietsByCategoryScreen: {
//     screen: DietsByCategoryScreen
//   },
//   TagsScreen: {
//     screen: TagsScreen
//   },
//   CategoriesScreen: {
//     screen: CategoriesScreen
//   },
//   WGoalsScreen: {
//     screen: WGoalsScreen
//   },
//   WLevelsScreen: {
//     screen: WLevelsScreen
//   },
//   Day1Screen: {
//     screen: Day1Screen
//   },
//   Day2Screen: {
//     screen: Day2Screen
//   },
//   Day3Screen: {
//     screen: Day3Screen
//   },
//   Day4Screen: {
//     screen: Day4Screen
//   },
//   Day5Screen: {
//     screen: Day5Screen
//   },
//   Day6Screen: {
//     screen: Day6Screen
//   },
//   Day7Screen: {
//     screen: Day7Screen
//   },
//   WorkoutDetailsScreen: {
//     screen: WorkoutDetailsScreen
//   },
//   VideoExerciseScreen: {
//     screen: VideoExerciseScreen
//   },
//   ExerciseDetailsScreen: {
//     screen: ExerciseDetailsScreen
//   },
//   DietDetailsScreen: {
//     screen: DietDetailsScreen
//   },
//   PostDetailsScreen: {
//     screen: PostDetailsScreen
//   },
//   ProfileScreen: {
//     screen: ProfileScreen
//   },
//   LogoutScreen: {
//     screen: LogoutScreen
//   },
//   WorkoutSearchScreen: {
//     screen: WorkoutSearchScreen
//   },
//   WorkoutResultsScreen: {
//     screen: WorkoutResultsScreen
//   },
//   CalculatorScreen: {
//     screen: CalculatorScreen
//   },
//   QuotesScreen: {
//     screen: QuotesScreen
//   },
//   SettingsScreen: {
//     screen: SettingsScreen
//   },
//   AboutUsScreen: {
//     screen: AboutUsScreen
//   },
//   TermsScreen: {
//     screen: TermsScreen
//   },
//   ContactUsScreen: {
//     screen: ContactUsScreen
//   },
// }, navigationOptions

// );

// const MainNavigator = DrawerNavigator({
// Home: {
//     screen: HomeNavigator,
//   },
// }, {
//   contentComponent: SideMenu,
//   drawerWidth: width * .7,
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle',
// });

// export default MainNavigator;

/**
 * Tab Navigator
 */
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home-circle-outline' : 'home-circle-outline';
            break;

          case 'ProfileScreen':
            iconName = focused ? 'account-circle' : 'account-circle';
            break;
          case 'Chat':
            iconName = focused ? 'message-reply-text' : 'message-reply-text';
            break;
          case 'Moreoption':
            iconName = focused
              ? 'dots-horizontal-circle-outline'
              : 'dots-horizontal-circle-outline';
            break;

          default:
            break;
        }

        // You can return any component that you like here!
        if (route.name === 'Home') {
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            style={{color: '#ffff', alignSelf: 'center', marginTop: 10}}
            size={30}
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ff1a1a',
      inactiveTintColor: 'gray',
      labelStyle: {paddingBottom: 0},
      style: {height: 50, backgroundColor: '#035048', justifyContent: 'center'},
    }}>
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{tabBarLabel: ''}}
    />
    <Tabs.Screen
      name="ProfileScreen"
      component={HomeStackScreenNav}
      options={{tabBarLabel: ''}}
    />
    <Tabs.Screen
      name="Chat"
      component={HomeStackScreen}
      options={{tabBarLabel: ''}}
    />
    <Tabs.Screen
      name="Moreoption"
      component={HomeStackOption}
      options={{tabBarLabel: ''}}
    />
  </Tabs.Navigator>
);

/**
 * All Stack navigators
 */
const HomeStack = createStackNavigator();

const HomeStack_nav = createStackNavigator();

const HomeStack_option = createStackNavigator();

const HomeStackScreenNav = ({navigation}) => (
  <HomeStack_nav.Navigator initialRouteName="ProfileScreen">
    {/* <HomeStack.Screen
      name="Home_nav"
      component={TabsScreen}
      options={{
        headerShown: false,
      }}
    /> */}
    <HomeStack_nav.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="diet"
      component={DietsScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="LogoutScreen"
      component={LogoutScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="offline"
      component={OfflineBar}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="PostsScreen"
      component={PostsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="PostDetailsScreen"
      component={PostDetails}
      options={{
        headerShown: true,
      }}
    />

    <HomeStack_nav.Screen
      name="Profile_custo"
      component={Profile_custo}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Profile_details"
      component={Profile_details}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Profile_health"
      component={Profile_health}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="DietDetails"
      component={DietDetailsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="DiatesPlan"
      component={DiatesPlan}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_program"
      component={My_program}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_Calender"
      component={My_Calender}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Diabetes"
      component={Diabetes}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="height_profile"
      component={height_profile}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_task"
      component={My_task}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_billing"
      component={My_billing}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Moreoption"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack_nav.Navigator>
);
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />

    <HomeStack.Screen
      name="workout"
      component={WorkoutsScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="diet"
      component={DietsScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="LogoutScreen"
      component={LogoutScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="offline"
      component={OfflineBar}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="PostsScreen"
      component={PostsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="PostDetailsScreen"
      component={PostDetails}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Profile_custo"
      component={Profile_custo}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Profile_details"
      component={Profile_details}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Profile_health"
      component={Profile_health}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="DietDetails"
      component={DietDetailsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="DiatesPlan"
      component={DiatesPlan}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="My_program"
      component={My_program}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="My_Calender"
      component={My_Calender}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Diabetes"
      component={Diabetes}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="height_profile"
      component={height_profile}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="My_task"
      component={My_task}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_billing"
      component={My_billing}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Moreoption"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* <HomeStack_nav.Screen
      name="More_option"
      component={HomeStackoption}
      options={{
        headerShown: false,
      }}
    /> */}
    {/* <HomeStack.Screen
      name="Home_nav"
      component={HomeStackScreenNav}
      options={{
        headerShown: false,
      }}
    /> */}
  </HomeStack.Navigator>
);
const HomeStackOption = ({navigation}) => {
  <HomeStack_option.Navigator initialRouteName="Moreoption">
    
    {/* <HomeStack_option.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    /> */}
    <HomeStack_option.Screen
      name="Moreoption"
      component={More_option}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_option.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_option.Screen
      name="diet"
      component={DietsScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="LogoutScreen"
      component={LogoutScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="offline"
      component={OfflineBar}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="PostsScreen"
      component={PostsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="PostDetailsScreen"
      component={PostDetails}
      options={{
        headerShown: true,
      }}
    />

    <HomeStack_nav.Screen
      name="Profile_custo"
      component={Profile_custo}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Profile_details"
      component={Profile_details}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Profile_health"
      component={Profile_health}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="DietDetails"
      component={DietDetailsScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack_nav.Screen
      name="DiatesPlan"
      component={DiatesPlan}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_program"
      component={My_program}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_Calender"
      component={My_Calender}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="Diabetes"
      component={Diabetes}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="height_profile"
      component={height_profile}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_task"
      component={My_task}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="My_billing"
      component={My_billing}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack_nav.Screen
      name="More_option"
      component={More_option}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack_option.Navigator>;
};

/**
 * Drawer Navigator
 */
// const Drawer = createDrawerNavigator();
// const DrawerScreen = () => (
//   <Drawer.Navigator
//     // initialRouteName="Home"
//     drawerPosition="left"
//     drawerContent={(props) => <SideMenu {...props} />}
//     drawerStyle={{width: '90%'}}
//     drawerContentOptions={{
//       labelStyle: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginTop: -5,
//         color: '#000000',
//       },
//       activeTintColor: '#4d4d4d',
//       itemStyle: {
//         borderBottomColor: '#cccccc',
//         borderBottomWidth: 0.5,
//         height: 40,
//       },
//     }}>
//     <Drawer.Screen name="Home" component={TabsScreen} />
//     {/* <Drawer.Screen name="Home_nav" component={HomeStackScreenNav} /> */}
//   </Drawer.Navigator>
// );

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Auth" component={TabsScreen} />
  </RootStack.Navigator>
);

export default ({userToken}) => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);
