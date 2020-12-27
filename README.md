# k8s-learn
This is just a simple project to learn about the ins and outs of deploying apps with Kubernetes.

## Prereqs
* Docker Desktop on Windows 10
* [Kubernetes enabled in Docker Desktop](https://dev.to/devcrafter91/how-to-install-kubernetes-on-windows-10-55b6)( this is what I used, if you want to set up Kubernetes some other way good on you, but I cant help you with that)
    - I don't have the Kubernetes dashboard running

## How to deploy locally
1. [Setup a Local Docker Registry](https://medium.com/htc-research-engineering-blog/setup-local-docker-repository-for-local-kubernetes-cluster-354f0730ed3a)
2. Build and tag Docker images for both `app/` and `backend/`
    - tag the `app/` image as `localhost:5000/shw`
    - tag the `backend/` image as `localhost:5000/shw-backend`
3. Push `app` and `backend` images to local repository, reference article from step 1 on how to do this.
4. From project root run `kubectl apply -f self_hello_world.yml`

## Accessing the application
After deploying the application locally you can access it by navigating to `http://localhost:1738/` and you should hopefully be presented with a message similar to this one:
```
Who is the man? provided by communication between: self-hello-kubernetes-5b7bf8cd88-rpzgj and self-hello-backend-586f4d7d69-dxgqk
```
