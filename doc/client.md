# client





* * *

## Class: Client
This is our basic client

**apiKey**:  , This is our basic client
**endpoint**:  , This is our basic client
**logger**:  , This is our basic client
**sessionToken**:  , This is our basic client
**credentials**:  , This is our basic client
### client.Client.setEndpoint(endpoint) 

Overrides the endpoint to use. I.e: You can make this client point to
any url you want (e.g: http://127.0.0.1:1025/myMock).

**Parameters**

**endpoint**: `string`, Overrides the endpoint to use. I.e: You can make this client point to
any url you want (e.g: http://127.0.0.1:1025/myMock).

**Returns**: `Client`

### client.Client.setApiKey(apiKey) 

Sets an API key to use.

**Parameters**

**apiKey**: `string`, Sets an API key to use.

**Returns**: `Client`

### client.Client.setCredentials(username, password) 

Sets a username and password. Use this instead of setting an api key if
you prefer to use a session authentication.

**Parameters**

**username**: `string`, Sets a username and password. Use this instead of setting an api key if
you prefer to use a session authentication.

**password**: `string`, Sets a username and password. Use this instead of setting an api key if
you prefer to use a session authentication.

**Returns**: `Client`

### client.Client.setLogger(logger) 

Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Parameters**

**logger**: `Object`, Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Returns**: `Client`

### client.Client.run(endpoint, method, contentType, body, authType) 

Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Parameters**

**endpoint**: `string`, Relative to the base endpoint (e.g: "login")

**method**: `HttpMethod`, Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**contentType**: `string`, E.g: "application/json"

**body**: `string`, Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**authType**: `AuthMethod`, If not supplied, will be automatically chosen.

**Returns**: `Promise`

### client.Client.execute(descriptor) 

Executes the given request through the underlying implementation.

**Parameters**

**descriptor**: `Descriptor`, The request descriptor.

**Returns**: `Promise`



* * *










