import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://app.petmets.in/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
