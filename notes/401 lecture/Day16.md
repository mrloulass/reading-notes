# Code 401 - Advanced Software Development

## 401 Reading Notes: Class 16 : Introduce AWS / EC2 + Elastic Beanstalk

### AWS

- what is AWS?
  - Amazon Web Services
    - tools use for web development

### Elastic Compute Cloud (EC2) + Elastic Beanstalk

Virtual Cloud Computing

EC2
  - allows developers to create and use cloud comupting hardware 
  - Old days companies were bound by their phsical hardware and needed to `scale`
    - Either scale `vertically` or  `horizontally`
      - 
EC2 allow both scaling `vertically` and  `horizontally`

Elastic Beanstalk
  - Web application platform
  - We can create a web app using web tech from a list that amazon gives us
  - Handles installing an OS, maintaining dependencies, ans load balancing

Hypervisor : load balancing software

CLI:
1. `eb init` : initialize an app only on the CLI
2. `eb create Some_Environment_Name` : Provision an environment on AWS ec2
3. `eb deploy` : runs software in the provisioned environment

### Review

### Warm Up

- Binary Search Tress
  - if no organzation is known, pick the traversal that makes the most sense to you
    - pre-order (traversal)
      - traversing the tree to find the value
      - as long as there are values on the left, keep traversing left
        - return the last nodes value

