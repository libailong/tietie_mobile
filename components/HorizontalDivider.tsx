import { View, Text, FlatList, TouchableOpacity, ListRenderItem, Image, Button, RefreshControl, Alert, StyleSheet, ScrollView } from 'react-native';

import React, { useState, useEffect } from "react";

type Props = {
      text?: string;
}

export default function HorizontalDivider(props: Props) {
      return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: '#C4C4C4' }} />
                  <View>
                  </View>
                  <View style={{ flex: 1, height: 1, backgroundColor: '#C4C4C4' }} />
            </View>
      )
}