import { SchemaComposer } from 'graphql-compose';

// import db from '../config/db'; 

const graphQLSchemaComposer = new SchemaComposer();

import { ProductQuery, ProductMutation } from './product';
import { CarQuery, CarMutation } from './car';


graphQLSchemaComposer.Query.addFields({
    ...ProductQuery,
    ...CarQuery
});

graphQLSchemaComposer.Mutation.addFields({
    ...ProductMutation,
    ...CarMutation
});

export default graphQLSchemaComposer.buildSchema();