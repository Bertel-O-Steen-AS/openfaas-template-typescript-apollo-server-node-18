<!-- @format -->

# Typescript Apollo template for OpenFaaS

This template is based on the official `express` template from OpenFaaS. It allows you to write your function in Typescript, that will be compiled to javascript during the build process. 
```
Node 18 version used for template & docker image is `18.18.2-alpine3.17`
```


## Usage

```shell
faas-cli template pull https://github.com/Bertel-O-Steen-AS/openfaas-template-typescript-apollo-server-node-18
faas-cli new my-typescript-function --lang ts-apollo-server-node-18
```