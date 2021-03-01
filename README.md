# next と contentful と netlify

## Contentfulの設定

- netlifyのアプリを入れる
  - netlifyのほうにincoming web hookが作られる
  - それをcontentfulで設定する

## Netlifyの設定

- 指示に従い設定する
- output dirは`out`でOK
- nextのpluginを入れる
- これのおかげでoutput dirはなんでもよくなる

## nextでやること

- contentfulからデータをフェッチする
- rich textならnpmがある

## Preview Mode

[これ見ればわかる](https://nextjs.org/docs/advanced-features/preview-mode)