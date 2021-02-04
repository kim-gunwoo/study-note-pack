### Docker

```
- 이미지 실행파일 컨테이너
- docker docker-engine docker.io

- docker version , docker -v : 도커 버젼 확인
- docker search {} : {} 안의 내역 조회
- docker pull {이미지이름}:latest
- docker run --name {} -d -it {} 도커 이미지 실행
- docker ps -a : 실행컨테이너 조회
- docker stop {컨테이너아이디} : 컨테이너 종료


- sudo systemctl status docker
- sudo systemctl start docker
- sudo systemctl enable docker

- touch Dockerfile
- docker build -t app .
- docker run -p 8000:8000 -d app

- docker exec -it {컨테이너아이디}

```
