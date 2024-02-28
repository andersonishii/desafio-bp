
  
  const schema = {
    title: 'Test Schema v1',
    type: 'object',
    required: ['userId', 'id', 'title', 'body'],
    properties: {
      userId: {
        type: 'number',
        minimum: 1,
      },
      id: {
        type: 'number',
        minimum: 1,
      },
      title: {
        type: 'string',
      },
      body: {
        type: 'string',
      },
 
    },
  };

  
  
  const schemaPost = {
    title: 'Test Schema v1',
    type: 'object',
    required: ['id', 'title', 'body'],
    properties: {
      userId: {
        type: 'id',
        minimum: 1,
      },
      title: {
        type: 'string',
      },
      body: {
        type: 'string',
      },
 
    },
  };


  
  export default {schema,schemaPost};
  