
const { gql } = require("apollo-server");
const typeDefs = gql`
  scalar DateTime

  directive @isAuthorized on FIELD | FIELD_DEFINITION
  directive @hasRole(role: String) on FIELD | FIELD_DEFINITION

  input InputRegisterUser{
   
    first_name:String
    last_name:String
    email:String 
    password:String
    
  }
  input UpdatePassword{
  
    email:String 
    password:String
    token:String!
  }

  input LoginInput {
    email: String!
    password: String!
}

  type User {
    
    first_name: String
    last_name: String
    email: String
    password:String
    
  
  }
  type updatePassword{
    email:String
    password:String
  }

  type LoginResponse{
    token:String!
  }

  type ResponseUsers {       
    data: [User]
  }
  

  type Query {
    listUsers: ResponseUsers!
  }

  type Mutation {
    registerUser(input:InputRegisterUser): User!
    login(input: LoginInput!): LoginResponse 
    updatePassword(input:UpdatePassword!):updatePassword @isAuthorized

  }
`;

module.exports = typeDefs;
