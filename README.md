# RNLocalWebDemo

## commit message

1. react-native init
  * just init from react-native command
2. local source
  * add local html
3. iOS support
  * 在Xcode中，把上一步添加的HTML拖进工程文件中。（文件还在原来位置）。读取路径直接 "index.html" 就会读取到打包APP根目录内文件。
4. Android support
  * 把HTML文件复制到 `/android/app/src/main/assets/` 下，此时文件在安卓项目对应 `file:///android_asset/index.html` 。
