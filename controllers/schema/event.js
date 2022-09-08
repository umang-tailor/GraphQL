const {gql}=require("apollo-server")
const typeDefs = gql`


scalar DateTime

directive @isAuthorized on FIELD | FIELD_DEFINITION
directive @hasRole(role: String) on FIELD | FIELD_DEFINITION

input createInput{

  event_name:String!
}

input updateEvent{
    id:Int
    event_name:String!
}
    
type event{
    id:Int
    event_name:String
    
}
type user {
    user_id:Int
}
type ResponseList{
    data:[event]
   
}

type CreateEventResponse {
    status: String
    message: String
    data: event
}


type Mutation {
    createEvent(input:createInput): CreateEventResponse! @isAuthorized
    updateEvent(input:updateEvent):event! @isAuthorized
}

type Query{
    listEvents:ResponseList! @isAuthorized
}

`
module.exports = typeDefs;