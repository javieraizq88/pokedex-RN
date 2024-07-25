```bash
nvm use v18
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install react-native-gesture-handler


npm i react-native-prompt-android --save


cd ios && pod install && cd ..
```

# solucion a error
```bash
nvm alias default 18

rm -rf node_modules && npm install

cd ios && pod install && cd ..

npx react-native run-android
```
