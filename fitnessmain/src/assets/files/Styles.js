'use strict';

import {Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';

var React = require('react-native');

var {StyleSheet} = React;

var {height, width} = Dimensions.get('window');

export const PrimaryColor = '#035048';

module.exports = StyleSheet.create({
  //////////////////////// GENERAL

  padding_general: {
    padding: 20,
    backgroundColor: '#FFF',
  },

  background_general: {
    backgroundColor: '#FFF',
  },

  card_general: {
    width: width,
  },

  gradient_general: {
    position: 'absolute',
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title_general: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle_general: {
    color: PrimaryColor,
    fontSize: 16,
    fontWeight: '300',
  },

  touchBookmark: {
    backgroundColor: PrimaryColor,
    width: 50,
    height: 50,
    position: 'absolute',
    right: 15,
    bottom: -25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  touchBookmarkTran: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 15,
    top: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //////////////////////// CATEGORIES

  title_categories: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  title_categories_background: {
    width: width,
    alignItems: 'center',
    padding: 15,
  },

  title_categories_border: {
    height: 2,
    backgroundColor: PrimaryColor,
    width: 50,
  },

  gradient_categories: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 4.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  background_categories: {
    width: width,
    height: height / 4.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  gradient_2columns: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 4.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title_2columns_background: {
    width: width * 0.5,
    alignItems: 'center',
    padding: 15,
  },

  background_2columns: {
    width: width * 0.5,
    height: height / 4.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  background_exercises: {
    width: width * 0.5,
    height: height / 4.35,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  //////////////////////// POSTS

  title_posts_categories: {
    color: '#000',
    fontSize: 23,
    padding: 10,
    fontWeight: 'bold',
    paddingTop: 2,
  },
  desc_posts_categories:{
    color: '#000',
    fontSize: 13,
    padding: 10,
    fontWeight: 'bold',
    marginEnd:20,
    // paddingTop: 2,
  },
  date_posts: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 11,
    padding: 10,
    paddingBottom: 0,
    fontWeight: 'bold',
  },

  gradient_posts_2columns: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.15,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  background_posts_2columns: {
    width: width * 0.46,
    height: height * 0.24,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius:7,
    marginStart: 7,
    marginTop: 7,
    marginBottom: 7,
  },

  postDetail_background: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  postDetail_gradient: {
    position: 'absolute',
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  postDetail_title: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 5,
    lineHeight: 30,
  },

  postDetail_tag: {
    fontSize: 18,
    fontWeight: 'normal',
    color: PrimaryColor,
    lineHeight: 30,
  },

  postDetail_date: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
    marginLeft: 0,
    paddingLeft: 8,
  },

  postCommentButton: {
    backgroundColor: PrimaryColor,
    elevation: 0,
    shadowOpacity: 0,
  },

  postCommentText: {
    color: '#FFFFFF',
  },

  //////////////////////// DIETS

  title_diets: {
    color: '#FFF',
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  title_diets_categories: {
    color: '#FFF',
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
  },

  category_diets: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: PrimaryColor,
    padding: 5,
  },

  subcategory_diets: {
    color: '#FFF',
    fontSize: 15,
    opacity: 0.8,
    marginBottom: 10,
  },

  gradient_diets: {
    position: 'absolute',
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.29,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  background_diets: {
    width: width,
    height: height * 0.29,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 15,
  },

  gradient_diets_2columns: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.15,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  background_diets_2columns: {
    width: width * 0.46,
    height: height * 0.15,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  background_diets_col: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  info_diets: {
    backgroundColor: 'rgba(0,0,0,0.70)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    paddingBottom: 11,
    paddingTop: 11,
  },

  title_diets_detail: {
    fontSize: 20,
    fontWeight: 'normal',
    lineHeight: 30,
  },

  gtitle_diets_detail: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description_diets_detail: {
    fontSize: 14,
  },

  col_diets: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlecol_diets: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    color: PrimaryColor,
  },

  tabs_diets: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#e0dbda',
    // flex:1,
    width: 90,
  },

  activetabs_diets: {
    backgroundColor: '#11ba11',
    flex: 1,
    width: 90,
  },

  tabs_text_diets: {
    color: 'rgba(0,0,0,0.3)',
    fontWeight: 'normal',
  },

  activetabs_text_diets: {
    color: '#333',
    fontWeight: 'normal',
  },

  //////////////////////// CARDS

  title_card: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },

  category_card: {
    color: PrimaryColor,
    marginBottom: 3,
    fontSize: 14,
  },

  subcategory_card: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },

  gradient_card: {
    position: 'absolute',
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.23,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  background_card: {
    width: width,
    height: height * 0.23,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 15,
  },

  //////////////////////// WORKOUT DETAILS

  title_workout: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 3,
    fontWeight: 'bold',
  },

  category_workout: {
    color: PrimaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },

  gradient_workout: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background_workout: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  col_workout: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlecol_workout: {
    fontWeight: 'bold',
    fontSize: 18,
    color: PrimaryColor,
  },

  icon_workout: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ddd',
    position: 'absolute',
    right: 15,
  },

  textButton_workout: {
    color: '#000',
  },

  button_workout: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'rgba(0,0,0,0.02)',
    height: 48,
    paddingLeft: 15,
    elevation: 0,
    shadowOpacity: 0,
  },

  //////////////////////// EXERCISE

  footer_exercise: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    marginTop: 10,
    marginBottom: 5,
    elevation: 0,
    shadowOpacity: 0,
  },

  start_exercise: {
    backgroundColor: '#fff',
    borderColor: PrimaryColor,
    borderWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
    borderRadius: 5,
    width: width * 0.9,
  },

  textStart_exercise: {
    color: PrimaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },

  col_exercise: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlecol_exercise: {
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 6,
    fontSize: 16,
  },

  title_exercise_background: {
    width: width,
    alignItems: 'flex-start',
    padding: 15,
  },

  subtitle_exercise: {
    color: PrimaryColor,
  },

  icon_get: {
    fontSize: 14,
    fontWeight: 'bold',
    color: PrimaryColor,
  },

  icon_exercise: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginBottom: 7,
  },

  icon_videoexercise: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 7,
  },

  playButton: {
    backgroundColor: PrimaryColor,
    elevation: 0,
    shadowOpacity: 0,
  },

  playCol_exercise: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  //////////////////////// START

  button_start: {
    minWidth: 250,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: PrimaryColor,
    marginBottom: 11,
    height: 53,
  },

  logo_start: {
    width: 250,
    height: 140,
    marginTop: 15,
    marginBottom: 30,
  },

  //////////////////////// LOGIN & SIGNUP

  button_auth: {
    minWidth: 250,
    backgroundColor: PrimaryColor,
    marginBottom: 8,
    height: 53,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  text_auth: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    minWidth: 200,
    marginTop: 5,
    color: '#808080',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  //////////////////////// HOME

  listitem_home: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon_home: {
    fontSize: 20,
    color: '#ddd',
  },

  note_home: {
    fontSize: 13,
  },

  //////////////////////// MENU

  container_menu: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  item_menu: {
    borderBottomWidth: 0,
    borderBottomColor: '#f7f8f9',
    marginLeft: 0,
    paddingRight: 20,
    paddingLeft: 20,
  },

  text_menu: {
    fontSize: 16,
  },

  thumbnail_menu: {
    marginRight: 10,
    maxWidth: 40,
  },

  icon_menu: {
    fontSize: 20,
    color: '#ddd',
  },

  footer_menu: {
    padding: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  home_more: {
    minWidth: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    // borderColor: PrimaryColor,
    marginBottom: 11,
    borderColor: 'red',
    height: 50,
    color: '#000',
    borderRadius: 5,
  },
  homeTitle: {
    padding: 5,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  stepView: {
    textAlign: 'center',
  },
  stepText: {
    textAlign: 'center',
    color: '#378ff0',
    fontWeight: '700',
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  // image: {
  //   marginTop: 50
  // },
  // heading: {
  //     marginTop: 40

  // },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
    textAlign: 'center',
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 19,
    fontWeight: '700',
  },
  task: {
    color: '#035048',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 35,
    marginBottom: 30,
  },
  counterText: {
    color: '#035048',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 5,
    paddingRight: 15,
  },
  homeEvent: {
    backgroundColor: '#d8cecd',
  },
  homeText: {
    borderLeftWidth: 3,
    borderLeftColor: '#77b942',
    paddingLeft: 6,
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  childView: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 120,
    height: 20,
    borderWidth: 2,
    borderColor: '#707070',
    borderRadius: 10,
    padding: 20,
  },

  More_text: {
    fontSize: 13,
    color: '#387069',
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 16,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  cardTitle_food: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
    // alignContent: 'center',
    textAlign: 'center',
    // justifyContent: 'center',
    marginTop: 20,
  },
  needs_setting: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardTitle_report: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
    // alignContent: 'center',
    textAlign: 'center',
    // justifyContent: 'center',
    marginLeft: 10,
    // backgroundColor: '#d8cecd',
    // width:'100%',
    // marginTop: 20,
  },
  cardTitle_dislike: {
    width: 60,
    height: 60,
    elevation: 1,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 6,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  card_dislikeimg: {
    height: 40,
    width: 40,
    marginEnd: 20,
    alignSelf: 'center',
    marginStart: 18,
    // padding:6,
    // marginTop: 10,
  },
  profileTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 26,
    marginStart: 30,
    marginTop: 10,
  },
  suggestedTitle: {
    color: '#ffff',
    fontWeight: '700',
    fontSize: 18,
    // marginStart: 30,
    // marginTop: 10,
    padding: 6,
  },
  suggestedTitleweek: {
    color: '#ffff',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    // marginEnd: 20,
    textAlign: 'center',
  },
  needs_title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  needs_circle_red: {
    flexDirection: 'row',
    backgroundColor: '#e32114',
    height: 10,
    width: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  needs_circle_green: {
    backgroundColor: '#10a31c',
    height: 10,
    width: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  profileTitledesc: {
    color: '#035048',
    fontWeight: '400',
    fontSize: 16,
    marginStart: 10,
  },
  needs_titlecolor: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menstrual_title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
    marginBottom: 20,
  },
  cardTitle_health: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 16,
    alignItems: 'center',
    marginStart: 10,
  },
  profileTitle_sugg: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    alignItems: 'center',
    marginStart: 30,
    marginTop: 20,
  },
  revenueTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 14,
    alignItems: 'center',
    marginStart: 30,
    marginTop: 20,
  },
  cardTitle_programs: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 16,
    alignItems: 'center',
    marginStart: 10,
    marginTop: 0,
  },
  cardTitle_date: {
    color: '#035048',
    fontWeight: '400',
    fontSize: 16,
    alignItems: 'center',
    marginStart: 10,
    marginTop: 0,
  },
  inner_bar: {
    width: '100%',
    height: 12,
    borderRadius: 15,
    backgroundColor: '#11ba11',
    // marginTop:20,
    // marginStart:10,
  },
  inner_barpro: {
    marginTop: 20,
    // marginStart:10,
    borderColor: '#2c2e2c',
    borderWidth: 3,
    flexDirection: 'row',
    borderRadius: 30,
    width: '100%',
    // marginRight:10,
  },
  weightTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 20,
    // alignItems:"center",
    marginStart: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  stepsTitle: {
    color: '#035048',
    fontWeight: '500',
    fontSize: 18,
    // alignItems:"center",
    marginStart: 10,
    // marginTop:10,
    // marginBottom:20,
  },
  Titletoday: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 24,
    // alignItems:"center",
    marginStart: 24,
    marginTop: 20,
    // marginBottom:20,
  },
  flatButton: {
    alignSelf: 'flex-end',
    marginTop: -30,
    marginBottom: 20,
  },
  flatPopup: {
    // alignSelf: 'flex-end',
    // borderWidth: 1,
    borderRadius: 20,
    // elevation: 4,
    // height: 250,
    // width: 150,
    marginEnd: 10,
    marginTop: -170,
    textAlignVertical: 'top',
    alignSelf: 'flex-start',
    backgroundColor: '#ffff',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 9,
  },
  stepsLog: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    marginStart: 10,
    marginTop: 20,
    marginEnd: 10,
  },
  stepsLogdislike:{
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    marginStart: 10,
    // marginTop: 20,
    marginEnd: 10,
  },
  stepsSetting: {
    color: '#035048',
    // fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    marginStart: 10,
    marginTop: 10,
    marginEnd: 10,
    // marginBottom:10,
  },
  stepsSetting_bottom: {
    color: '#035048',
    // fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    marginStart: 10,
    marginTop: 10,
    marginEnd: 10,
    marginBottom: 18,
  },
  stepsLogs: {
    color: '#035048',
    fontWeight: '500',
    fontSize: 18,
    marginStart: 10,
    marginTop: 10,
    // marginBottom:20,
    marginEnd: 20,
  },
  stepsLogs_weight: {
    color: '#035048',
    fontWeight: '500',
    fontSize: 18,
    marginStart: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  title_MENSTRUATION: {
    margin: 10,
    marginStart: 30,
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
  },
  title_subCate: {
    // margin: 10,
    // marginStart: 30,
    color: '#035048',
    fontWeight: '400',
    fontSize: 14,
    alignSelf: 'center',
  },
  dietTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    // alignSelf:"center",
    marginStart: 30,
    // marginTop: 10,
  },
  tabdays: {
    width: 40,
    height: 40,
    borderRightWidth: 1,
    borderColor: '#e0dbda',
    justifyContent: 'center',
  },
  tabdaysend: {
    width: 40,
    height: 40,
    // borderRightWidth:1,
    borderColor: '#e0dbda',
    justifyContent: 'center',
  },
  cardTitle_days: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    // alignSelf:"center",
    marginStart: 10,
    marginTop: 6,
  },
  cardTitle_desc: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 14,
    // alignSelf:"center",
    marginStart: 10,
    marginTop: 6,
    // textAlign:"center"
  },
  cardTitle_like: {
    width: 60,
    height: 60,
    // elevation: 1,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 6,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  diabetesTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    marginStart: 30,
    marginTop: 6,
  },
  diationTitle: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 14,
    alignItems: 'center',
    marginStart: 10,
    marginEnd: 40,
    // marginTop: 20,
    // textAlign:"center",
  },
  cardTitle_healthnote: {
    color: '#035048',
    fontWeight: '400',
    fontSize: 18,
    alignItems: 'center',
    marginStart: 30,
    marginEnd: 40,
    marginTop: 20,
  },
  cardTitle_days1: {
    padding: 10,
    paddingTop: 10,
    marginTop: 20,
  },
  card_each: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6,
    flex: 1,
  },
  cardTitle_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  card_likeimg: {
    height: 40,
    width: 40,
    marginEnd: 20,
    alignSelf: 'center',
    marginStart: 18,
    padding: 6,
    // marginTop: 10,
  },
  card_likeimgad:{
    height: 40,
    width: 40,
    marginEnd: 20,
    alignSelf: 'center',
    marginStart: 18,
    padding: 6,
    marginTop: 10,
  },
  stepsdeviation: {
    color: '#035048',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: 'center',
    // marginStart: 10,
    marginTop: 10,
  },
  card_eachitem: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6,
    flex: 1,
    // marginTop: 10,
    backgroundColor: '#11ba11',
  },
  stepsEdit: {
    color: '#035048',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: 'flex-start',
    // marginStart: 10,
    marginTop: 10,
  },
  stepsView: {
    color: '#035048',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'flex-start',
    // marginStart: 10,
    marginTop: 10,
  },
});
