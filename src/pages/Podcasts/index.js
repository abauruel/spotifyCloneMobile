import React, { Component } from "react";

import { View } from "react-native";

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author
} from "./styles";

export default class Podcasts extends Component {
  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam("Podcasts", "teste");
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background souce={{ uri: podcast.cover }} blurRadius={5} />
              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={() => {}}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          Keyextractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}
