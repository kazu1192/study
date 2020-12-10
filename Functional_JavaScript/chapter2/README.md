# Chapter2

[Note.md](./Note.md)		<= 学習内容

node_dev/	<= コード実行環境

Docker開発環境 (./node_dev下で) : 

```
// docker イメージ作成
# docker image build . --tag 'node_dev'
// node環境へattach (/bin/bash)
# docker container run -it --rm -v $PWD:/app node_dev
// attachせずに node や npm を実行
# docker container run -it --rm -v $PWD:/app node_dev node src/splat.js
# docker container run -it --rm -v $PWD:/app node_dev npm install

// docker イメージ作成
# docker-compose build
// node環境へattach (/bin/bash)
# docker-compose run --rm app
// attachせずに node や npm を実行
# docker-compose run --rm app node src/splat.js
# docker-compose run --rm app npm install

// その他 (要インストール)
# docker-clean all
```

