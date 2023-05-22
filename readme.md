# how to start 
build images then execute/kubernetes/start.sh  
the service-microservice-b exposes port 4000  

make a call to `http://localhost:4000/api/call-microservice-a` once everything is setup, this service (ms-b) will call microservice-a  

# architecture 
ms-b receives a call on port 4000 if it's the /api/call-microservice-a endpoint then it calls ms-a

# notes 
you need to include the proper env vars for ms-b to call ms-a hence the

```
const response = await axios.get(`http://${process.env.MICROSERVICE_A_SERVICE_HOST}:${process.env.MICROSERVICE_A_SERVICE_PORT}/api/data`);
```

another example (not used here): 
```
const axios = require('axios');

const serviceAHost = process.env.MICROSERVICE_A_HOST;
const serviceAPort = process.env.MICROSERVICE_A_PORT;

const response = await axios.get(`http://${serviceAHost}:${serviceAPort}/api/data`);

```  
## notes  
will probs make an article for bognov.tech

https://www.phind.com/search?cache=b185ba09-873a-4d66-9a17-b1a6cef652bd  
https://dev.to/narasimha1997/communication-between-microservices-in-a-kubernetes-cluster-1n41
