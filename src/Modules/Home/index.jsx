import React, { Component } from "react";
import Button from "antd/lib/button";
import qs from "qs";
import axios from "axios";
class Home extends Component {
  getData = () => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    };
    axios(options)
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  };
  postData = () => {
    const data = { bar: 123 };
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url
    };
    axios(options)
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  };
  patchData = () => {
    const data = JSON.stringify({
      title: "foo"
    });
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const options = {
      method: "PATCH",
      data,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      url
    };
    axios(options)
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  };
  deleteData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const options = {
      method: "DELETE",
      url
    };
    axios(options)
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  };
  render() {
    return (
      <section>
        <h1> Axios Http Request</h1>
        <Button onClick={this.getData}>Get</Button>
        <Button onClick={this.postData}>Post</Button>
        <Button onClick={this.patchData}>Patch</Button>
        <Button onClick={this.deleteData}>Delete</Button>
      </section>
    );
  }
}

export default Home;
