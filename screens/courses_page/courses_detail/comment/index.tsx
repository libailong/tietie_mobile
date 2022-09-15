import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import CommentCard, {CommentInfo} from './CommentCard';
import SearchBar from '../../../../components/SearchBar';

type Props = {
  info: Array<CommentInfo>;
};

const Comment = (props: Props) => {
  const commentCardDom = props.info.map(info => (
    <CommentCard
      key={info.username + info.subHeadline}
      info={info}></CommentCard>
  ));
  const onSubmit = (searchText: string) => {};
  return (
    <>
      <ScrollView>{commentCardDom}</ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={93}>
        <SearchBar onSubmit={onSubmit} />
      </KeyboardAvoidingView>
    </>
  );
};

export default Comment;

const styles = StyleSheet.create({});
