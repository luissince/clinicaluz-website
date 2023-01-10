docker stop nextapp && docker rm nextapp

docker image rm nextapp

docker build -t nextapp .

docker run -d --name nextapp --net=my-net -p 3000:3000 nextapp