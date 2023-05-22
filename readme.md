https://www.phind.com/search?cache=b185ba09-873a-4d66-9a17-b1a6cef652bd  
https://dev.to/narasimha1997/communication-between-microservices-in-a-kubernetes-cluster-1n41

```
const axios = require('axios');

const serviceAHost = process.env.MICROSERVICE_A_HOST;
const serviceAPort = process.env.MICROSERVICE_A_PORT;

const response = await axios.get(`http://${serviceAHost}:${serviceAPort}/api/data`);

```