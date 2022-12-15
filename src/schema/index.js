const graphql =  require('graphql')
const  {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
  } = graphql
  

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        category: {type: GraphQLString},
        filter: {type: GraphQLString},
        price: {type: GraphQLFloat},
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world graphQL';
        },
      },
      products:{
        type: new GraphQLList(ProductType),
        resolve(){
            return []
        }
      }
    },
  })


const schema = new GraphQLSchema({
    query: RootQuery
  });

module.exports = schema