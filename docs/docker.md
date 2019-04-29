# Docker

拉取docker镜像
```
docker pull sdag/sdag_testnet_dev
```
启动docker镜像
```
docker run --rm -d --name sdag -p 6615:6615 -p 8080:8080 sdag/sdag_testnet_dev
```

这时，你可以访问 http://localhost:8080 来查看SDAG的运行状况。