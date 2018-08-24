## vue 单页面项目中让自己的插件在`.vue`文件中有提示

#### 步骤
1. 创建一个 `xxx.d.ts`
```tyepscript
declare module '@/utils/cTools' {
  /** 顶级命名空间 */
  namespace cTools {
    /** 工具集合 */
    namespace Util {
      /** 颜色相关操作 */
      namespace color {
      }
    }
  }
  export default cTools
}
```
   
2. `package.json` 添加 `types`

```
"types": "./src/utils/cTools/typings/cTools.d.ts"
```
 
3. `.vue` 文件中引入
```
import cTools from '@/utils/cTools';
```

4. 效果展示

![](https://note.youdao.com/yws/public/resource/3857c51abb6eae3c660dc482f956ed97/xmlnote/WEBRESOURCE7644a3f965c7b37c6f073d32672ab17d/6238)


## 参考资料
+ [发布](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html)
