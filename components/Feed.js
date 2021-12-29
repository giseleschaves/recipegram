import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import { Tile, Icon } from "react-native-elements";

import Loading from "./Loading";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

class Feed extends Component {
  //static keyword sets a method on the class itself rather then the object wich instatiate the method
  static navigationOptions = {
    title: "Feed",
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderPostItem = ({ item }) => {
      return (
        <Card>
          <Card.Title style={styles.post__cardtitle}>
            <View style={styles.post__container}>
              <Image
                style={styles.avatar}
                resizeMode="cover"
                source={require("./images/avatar.jpg")}
              />
              <Text style={styles.post__username}>we.love.raw.chocolate</Text>
            </View>
          </Card.Title>
          <Card.Image
            source={require("./images/tart.jpg")}
            transition
            containerStyle={styles.post__image}
          />
          <View style={styles.post__features}>
            <Icon
              style={styles.post__feature}
              name="heart-o"
              type="font-awesome"
            />
            <Icon
              style={styles.post__feature}
              name="comment-o"
              type="font-awesome"
            />
            <Icon
              style={styles.post__feature}
              name="bookmark-o"
              type="font-awesome"
            />
          </View>
          <View style={styles.post__description}>
            <Text style={styles.post__username}>we.love.raw.chocolate</Text>
            <Text>{item.description}</Text>
          </View>
          <View>
            <Text>View all comments</Text>
            <Text>5 HOURS AGO</Text>
          </View>
          <Card.Divider />
          <View style={styles.post__features}>
            <Icon name="smile-o" type="font-awesome" />
            <Text style={styles.post__addcomment}>Add comment...</Text>
            <Text style={styles.post__postcomment}>Post</Text>
          </View>
        </Card>
      );
    };

    if (this.props.posts.isLoading) {
      return <Loading />;
    }
    if (this.props.posts.errMess) {
      return (
        <View>
          <Text>{props.posts.errMess}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.posts.posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  post__cardtitle: {
    textAlign: "left",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  post__container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  post__username: {
    fontWeight: "bold",
    marginRight: 5,
  },
  post__features: {
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  post__feature: {
    marginLeft: 5,
  },
  post__description: {
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
  },
  post__addcomment: {
    marginLeft: 15,
    color: "grey",
  },
  post__postcomment: {
    marginLeft: 15,
    color: "#0095f6",
  },
  post__image: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default connect(mapStateToProps)(Feed);
