docker stop next-app && docker rm next-app

docker image rm next-app

docker build -t next-app .

docker run -d --name next-app --net=my-net -p 3000:3000 next-app