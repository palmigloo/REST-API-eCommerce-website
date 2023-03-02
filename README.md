
# Table of Contents 
[Project Description](#project-description)

[Overview](#overview)

[Deployment](#deployment)

[Load Testing](#testing)

- [Local Load Testing](#local-load-testing)
- [Cloud-based Load Testing](#cloud-based-load-testing)


[Performance Tuning & Optimization](#performance-tuning--optimization)

[Technologies Used](#technologies-used)

[Author](#author)


# Project Description

The mission for this project is to redesign and implement REST API services of Question&Answer module for an appareal eCommerce platform to support production level traffic. 
The newly inplemented service is able to handle up to 3K randomized Request per second with only 0.1% error rate and reduced response time by 96%(to 67ms).

This project was developed with NodeJS, Express and MongoDB, deployed on AWS EC2 with load-balancer NGINX(cache feature enabled), and load tested with various tools such as: Artillery, K6, loader.io, etc. 

# Overview
The Q&A API services includes following endpoints: 
### List Questions
##### Retrieves a list of questions for a particular product. This list does not include any reported questions.
     GET /qa/questions
<img width="600" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/222243313-930e0607-aa1d-4472-8a86-2b2bafdcc853.png">

### Answers List
##### Return all answers for a given question. This list does not include any reported answers.
    GET /qa/questions/:question_id/answers
<img width="600" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/222246040-f0fd332b-521c-41d8-bded-d80eb6008bf3.png">
<img width="600" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/222245746-251b41ca-9013-40ee-8189-2026c401ab43.png">

### Add a Question
##### Adds a question for the given product
    POST /qa/questions
<img width="600" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/222244381-b4b95ace-189e-46c5-8e74-1bdeb883e1ca.png">


### Add an Answer
##### Add an answer for a given question
    POST /qa/questions/:question_id/answers

### Mark Question as Helpful
##### Updates a question to show it was found helpful.
    PUT /qa/questions/:question_id/helpful
    
### Report Question
##### Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
    PUT /qa/questions/:question_id/report

### Mark Answer as Helpful
##### Updates an answer to show it was found helpful 
    PUT /qa/answers/:answer_id/helpful
    
### Report Answer
##### Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request
     PUT /qa/answers/:answer_id/report

# Deployment

# Load Testing 
The goal of load testing is to determine new API server's capacity, scalability, and stability under different levels of load, record system's response time, throughput, and resource utilization to identify any performance bottlenecks or other issues that may affect the system's reliability or user experience. 

It composes of 2 different phases: local testing and cloud-based testing, local testing aims to set up a baseline for server's capacity in a local setting, while Cloud-based load testing focus on testing deployed server's capacity and push it to its maximum for future optimization.

### Local Load Testing 
During local testing, the load is increased incrementally until the system reaches its maximum capacity using Autocannon and K6, and the maximum load the server can handle is around **1k**. 
##### Tools : Autocannon, K6
```jsx
autocannon -c 1000 http://localhost:3000/qa/questions?product_id=7&count=5
```
<img width="600" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/222520702-2d59a0ab-16bd-418e-95ea-2f92b7983bb7.png">

### Cloud-based Load Testing 
After deployment onf AWS EC2, I utilized loader.io to incrementally test the server and find out the maximum load capacity was around 300 RPS, which is the baseline for future improvement 
##### Tools: Loader.io
<img width="450" alt="Screen Shot 2023-03-02 at 11 02 16 AM" src="https://user-images.githubusercontent.com/3084586/222526478-39fc22f9-6dae-42fe-ac93-bc1bd90013ed.png">   <img width="450" src="https://user-images.githubusercontent.com/3084586/222526493-c5156841-ef69-40c8-918a-90c51aa66582.png">

# Performance Tuning & Optimization
Performance Tuning is the most important part of this project, it helped the server from only supporting 300RPS to 3000RPS by adding additional EC2 servers, implementing NGINX load balancer, setting up Cache on reverse proxy and adding more worker connection on NGINX, etc.
##### Steps:
     - Adding additional servers 
     - Setup NGINX
     - Setup Cache
     - Increase amount of worker connection

# Installation 
  To **build** and install all the dependencies
```
  npm install 
```


  To start **backend** 
 ```
  npm run server-dev 
```

  To **test** 
  ```
  npm run test 
```
  To check test **coverage**
  ```
  npm run test-coverage
  ```


# Technologies Used 
  - Development
    - Express 
    - Node.js
    - MongoDB
    - Docker

  - Load & Pressure Testing
    - Autocannon
    - K6
    - Loader.io
     
  - Deployment 
    - AWS EC2 
  
  - Performance Tuning & Optimization 
    - NGINX
    - Caching
    - NewRelic

# Author 
<a href="https://github.com/palmigloo"><kbd><img width="175" alt="Abigail" src="https://user-images.githubusercontent.com/3084586/208263347-363a0895-7ede-40f6-8f82-83434178ed66.png"></kbd></a>

Trilingual Software engineer professional based in Mountain View, CA.

8 years international working experience in high tech and luxury retail, proficient in Full-stack development, with creativity and cross-cultural communication skills. 

Start-up experience with multitasking abilities, working with client across Gaming, Media, eCommerce and Telecom industries.




