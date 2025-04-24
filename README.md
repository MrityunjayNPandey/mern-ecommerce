# A fork of https://github.com/mohamedsamara/mern-ecommerce

This project deals with the containerized deployment in Kubernetes Cluster. 

## Additional changes: 

1. Optimized Docker Images
2. Added health check API
3. Auto connect to database when health check fails.
4. Updated frontend nginix configuration to hide backend url.

## Architecture Diagram:

-- This is only a rough architecture diagram.
![alt text](image-1.png)

This project is deployed on AKS.

## Configuration rationale:

### Database: 

The Mongodb backend is a single pod which has the functionality to scale vertically. Setting up a horizontally scaling is tricky because it involves several other factors as well. It is set up with a persistent volume, so as if there are some issues, the data remains on it. I didn't deploy it in stateful set as this also does the job well. I've not used mongo creds because db url is not supposed to be exposed. Also it makes the implementation easier.

### Backend:

The NodeJs backend is deployed as a group of multiple pods. So as to reduce the workload if there are any such load requirements. It scales horizontally.

### Frontend: 

The frontend is deployed with a nginix server for reverse proxying backend requests. When there is an increase to the load, the pods scale horizontally.



To seed the data use, after updating the db url in server/utils/db.js: 
//npm run seed:db admin@example.com admin123
