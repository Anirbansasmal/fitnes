import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export default class API {
  // static contextType = AuthContext;
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.blogUrl = options.blogUrl;
  }
  get(endpoint, params) {
    return this.httpRequest('GET', this.baseUrl + endpoint, params);
  }

  put(endpoint, params) {
    return this.httpRequest('PUT', this.baseUrl + endpoint, params);
  }

  post(endpoint, params) {
    return this.httpRequest('POST', this.baseUrl + endpoint, params);
  }
  postlog(endpoint, params) {
    return this.httpRequestlog('POST', this.baseUrl + endpoint, params);
  }
  
  delete(endpoint, params) {
    return this.httpRequest('DELETE', this.baseUrl + endpoint, params);
  }

  upload(endpoint, params) {
    return this.httpRequestForFormData('POST', this.baseUrl + endpoint, params);
  }

  httpRequestForFormData(method, url, params) {
    return new Promise(async (resolve, reject) => {
      var token = await AsyncStorage.getItem('token');
      console.log(url);
      let options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
        method: method,
        body: params,
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson);
        })
        .catch((error) => reject(error)); //to catch the errors if any
    });
  }

  httpRequest(method, url, params) {
    return new Promise(async (resolve, reject) => {
      var token = await AsyncStorage.getItem('token');
      console.log(JSON.stringify(params));
      let options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        method: method,
        body: JSON.stringify(params),
      };
      // console.log(url);
      // console.log(options);
      fetch(url, options)
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson);
          console.log(responseJson);
        })
        .catch((error) => {
          reject(error);
        }); //to catch the errors if any
    });
  }
  httpRequestlog(method, url, params) {
    return new Promise(async (resolve, reject) => {
      var token = await AsyncStorage.getItem('token');
      console.log(url);
      console.log(JSON.stringify(params));
      let options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        method: method,
        body: JSON.stringify(params),
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson);
        })
        .catch((error) => reject(error)); //to catch the errors if any
    });
  }
  getBlog(endpoint, params) {
    return this.httpBlogRequest('GET', this.blogUrl + endpoint, params);
  }
  httpBlogRequest(method, url, params) {
    return new Promise(async (resolve, reject) => {
      var token = await AsyncStorage.getItem('token');
      console.log(token);
      let options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: 'Bearer ' + token,
        },
        method: method,
        body: JSON.stringify(params),
      };
      // console.log(url);
      // console.log(options);
      fetch(url, options)
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson);
        })
        .catch((error) => {
          reject(error);
        }); //to catch the errors if any
    });
  }
}