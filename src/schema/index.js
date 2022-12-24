const graphql =  require('graphql')
const Product = require('../models/products')

const  {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
  } = graphql
  

const ProductType = new GraphQLObjectType({
    name: 'Products',
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
        resolve(parent,args){
            return Product.find({})
        } 
      },
      productByCategory:{
        type: new GraphQLList(ProductType),
        args: {category :{type: GraphQLString}},
        resolve(parent,args){
            return Product.find({category:args.category})
        }
      }
    },
  })


const schema = new GraphQLSchema({
    query: RootQuery
  });

module.exports = schema