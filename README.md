# reference
[Tutorial For Adding Redux to a React App](https://code.likeagirl.io/tutorial-for-adding-redux-to-a-react-app-1a94cc1738e5)  
[Reduxチュートリアル動画を見ながらReduxを基礎の基礎から](https://qiita.com/insight3110/items/4d212ecef6992e8eaee5)  
[最短で学ぶReactとReduxの基礎から実践まで](https://www.udemy.com/react-redux-from-beginning/learn/v4/t/lecture/7538812?start=45)  

# memo
- 1つのstoreオブジェクトがすべてのstateを持っている。
- 状態(State)は基本読み取りのみ。書き込むにはStoreが提供するメソッドであるDispatchでActionを投げる時だけ
- pure function(純粋関数)は引数を変更しない。impure function(副作用?)は引数を変更する。reducer function はpure function である必要がある。
