import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: 'https://petmets.in/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
