import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: 'https://studio--petmets-w801k.us-central1.hosted.app/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
