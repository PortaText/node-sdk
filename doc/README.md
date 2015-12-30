## Modules

<dl>
<dt><a href="#module_client_http">client_http</a></dt>
<dd></dd>
<dt><a href="#module_client">client</a></dt>
<dd></dd>
<dt><a href="#module_acl">acl</a></dt>
<dd></dd>
<dt><a href="#module_blacklist">blacklist</a></dt>
<dd></dd>
<dt><a href="#module_campaign_lifecycle">campaign_lifecycle</a></dt>
<dd></dd>
<dt><a href="#module_me">me</a></dt>
<dd></dd>
<dt><a href="#module_sms">sms</a></dt>
<dd></dd>
<dt><a href="#module_tariffs">tariffs</a></dt>
<dd></dd>
<dt><a href="#module_templates">templates</a></dt>
<dd></dd>
<dt><a href="#module_timezones">timezones</a></dt>
<dd></dd>
<dt><a href="#module_command">command</a></dt>
<dd></dd>
<dt><a href="#module_null_logger">null_logger</a></dt>
<dd></dd>
</dl>

<a name="module_client_http"></a>
## client_http

* [client_http](#module_client_http)
    * [~ClientHttp](#module_client_http..ClientHttp) ⇐ <code>Client</code>
        * [new ClientHttp()](#new_module_client_http..ClientHttp_new)

<a name="module_client_http..ClientHttp"></a>
### client_http~ClientHttp ⇐ <code>Client</code>
**Kind**: inner class of <code>[client_http](#module_client_http)</code>  
**Extends:** <code>Client</code>  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  
<a name="new_module_client_http..ClientHttp_new"></a>
#### new ClientHttp()
This is our basic client

<a name="module_client"></a>
## client

* [client](#module_client)
    * [~Client](#module_client..Client)
        * [new Client()](#new_module_client..Client_new)
        * [.apiKey](#module_client..Client+apiKey)
        * [.endpoint](#module_client..Client+endpoint)
        * [.logger](#module_client..Client+logger)
        * [.sessionToken](#module_client..Client+sessionToken)
        * [.credentials](#module_client..Client+credentials)
        * [.DEFAULT_ENDPOINT](#module_client..Client+DEFAULT_ENDPOINT) : <code>string</code>
        * [.setEndpoint(endpoint)](#module_client..Client+setEndpoint) ⇒ <code>Client</code>
        * [.setApiKey(apiKey)](#module_client..Client+setApiKey) ⇒ <code>Client</code>
        * [.setCredentials(username, password)](#module_client..Client+setCredentials) ⇒ <code>Client</code>
        * [.setLogger(logger)](#module_client..Client+setLogger) ⇒ <code>Client</code>
        * [.run(endpoint, method, contentType, body, [authType])](#module_client..Client+run) ⇒ <code>Promise</code>
        * *[.execute(descriptor)](#module_client..Client+execute) ⇒ <code>Promise</code>*

<a name="module_client..Client"></a>
### client~Client
**Kind**: inner class of <code>[client](#module_client)</code>  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Client](#module_client..Client)
    * [new Client()](#new_module_client..Client_new)
    * [.apiKey](#module_client..Client+apiKey)
    * [.endpoint](#module_client..Client+endpoint)
    * [.logger](#module_client..Client+logger)
    * [.sessionToken](#module_client..Client+sessionToken)
    * [.credentials](#module_client..Client+credentials)
    * [.DEFAULT_ENDPOINT](#module_client..Client+DEFAULT_ENDPOINT) : <code>string</code>
    * [.setEndpoint(endpoint)](#module_client..Client+setEndpoint) ⇒ <code>Client</code>
    * [.setApiKey(apiKey)](#module_client..Client+setApiKey) ⇒ <code>Client</code>
    * [.setCredentials(username, password)](#module_client..Client+setCredentials) ⇒ <code>Client</code>
    * [.setLogger(logger)](#module_client..Client+setLogger) ⇒ <code>Client</code>
    * [.run(endpoint, method, contentType, body, [authType])](#module_client..Client+run) ⇒ <code>Promise</code>
    * *[.execute(descriptor)](#module_client..Client+execute) ⇒ <code>Promise</code>*

<a name="new_module_client..Client_new"></a>
#### new Client()
This is our basic client

<a name="module_client..Client+apiKey"></a>
#### client.apiKey
**Kind**: instance property of <code>[Client](#module_client..Client)</code>  
**Default**: <code></code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | The api key to use |

<a name="module_client..Client+endpoint"></a>
#### client.endpoint
**Kind**: instance property of <code>[Client](#module_client..Client)</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | The endpoint to use |

<a name="module_client..Client+logger"></a>
#### client.logger
**Kind**: instance property of <code>[Client](#module_client..Client)</code>  
**Default**: <code>{module:null_logger~NullLogger}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | The logger to use. |

<a name="module_client..Client+sessionToken"></a>
#### client.sessionToken
**Kind**: instance property of <code>[Client](#module_client..Client)</code>  
**Default**: <code></code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | The session token to use. |

<a name="module_client..Client+credentials"></a>
#### client.credentials
**Kind**: instance property of <code>[Client](#module_client..Client)</code>  
**Default**: <code></code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Array</code> | The credentials to use. The first element is the username, and the second one is the password. |

<a name="module_client..Client+DEFAULT_ENDPOINT"></a>
#### client.DEFAULT_ENDPOINT : <code>string</code>
The default base HTTP endpoint

**Kind**: instance constant of <code>[Client](#module_client..Client)</code>  
**Default**: <code>&quot;https://rest.portatext.com&quot;</code>  
<a name="module_client..Client+setEndpoint"></a>
#### client.setEndpoint(endpoint) ⇒ <code>Client</code>
Overrides the endpoint to use. I.e: You can make this client point to
any url you want (e.g: http://127.0.0.1:1025/myMock).

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 

<a name="module_client..Client+setApiKey"></a>
#### client.setApiKey(apiKey) ⇒ <code>Client</code>
Sets an API key to use.

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| apiKey | <code>string</code> | 

<a name="module_client..Client+setCredentials"></a>
#### client.setCredentials(username, password) ⇒ <code>Client</code>
Sets a username and password. Use this instead of setting an api key if
you prefer to use a session authentication.

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| password | <code>string</code> | 

<a name="module_client..Client+setLogger"></a>
#### client.setLogger(logger) ⇒ <code>Client</code>
Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| logger | <code>Object</code> | 

<a name="module_client..Client+run"></a>
#### client.run(endpoint, method, contentType, body, [authType]) ⇒ <code>Promise</code>
Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| endpoint | <code>string</code> | Relative to the base endpoint (e.g: "login") |
| method | <code>HttpMethod</code> |  |
| contentType | <code>string</code> | E.g: "application/json" |
| body | <code>string</code> |  |
| [authType] | <code>AuthMethod</code> | If not supplied, will be automatically chosen. |

<a name="module_client..Client+execute"></a>
#### *client.execute(descriptor) ⇒ <code>Promise</code>*
Executes the given request through the underlying implementation.

**Kind**: instance abstract method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| descriptor | <code>Descriptor</code> | The request descriptor. |

<a name="module_acl"></a>
## acl

* [acl](#module_acl)
    * [~Acl](#module_acl..Acl) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Acl()](#new_module_acl..Acl_new)
        * [.args](#module_command..Command+args)
        * [.add(ip, netmask, description)](#module_acl..Acl+add) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_acl..Acl"></a>
### acl~Acl ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[acl](#module_acl)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_acl ACL endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Acl](#module_acl..Acl) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Acl()](#new_module_acl..Acl_new)
    * [.args](#module_command..Command+args)
    * [.add(ip, netmask, description)](#module_acl..Acl+add) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_acl..Acl_new"></a>
#### new Acl()
The ACL endpoint.

<a name="module_command..Command+args"></a>
#### acl.args
**Kind**: instance property of <code>[Acl](#module_acl..Acl)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_acl..Acl+add"></a>
#### acl.add(ip, netmask, description) ⇒ <code>[Command](#module_command..Command)</code>
Adds an ip to the ACL.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| ip | <code>string</code> | 
| netmask | <code>integer</code> | 
| description | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### acl.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### acl.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### acl.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### acl.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *acl.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Acl](#module_acl..Acl)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### acl.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Overrides:** <code>[body](#module_command..Command+body)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### acl.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### acl.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### acl.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### acl.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### acl.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### acl.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### acl.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Acl](#module_acl..Acl)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_blacklist"></a>
## blacklist

* [blacklist](#module_blacklist)
    * [~Blacklist](#module_blacklist..Blacklist) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Blacklist()](#new_module_blacklist..Blacklist_new)
        * [.args](#module_command..Command+args)
        * [.number(number)](#module_blacklist..Blacklist+number) ⇒ <code>[Command](#module_command..Command)</code>
        * [.csv(filename)](#module_blacklist..Blacklist+csv) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_blacklist..Blacklist"></a>
### blacklist~Blacklist ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[blacklist](#module_blacklist)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#blacklistnumber Blacklist endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Blacklist](#module_blacklist..Blacklist) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Blacklist()](#new_module_blacklist..Blacklist_new)
    * [.args](#module_command..Command+args)
    * [.number(number)](#module_blacklist..Blacklist+number) ⇒ <code>[Command](#module_command..Command)</code>
    * [.csv(filename)](#module_blacklist..Blacklist+csv) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_blacklist..Blacklist_new"></a>
#### new Blacklist()
The Blacklist endpoint.

<a name="module_command..Command+args"></a>
#### blacklist.args
**Kind**: instance property of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_blacklist..Blacklist+number"></a>
#### blacklist.number(number) ⇒ <code>[Command](#module_command..Command)</code>
Sets the number.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| number | <code>string</code> | 

<a name="module_blacklist..Blacklist+csv"></a>
#### blacklist.csv(filename) ⇒ <code>[Command](#module_command..Command)</code>
Send a CSV file to blacklist contacts.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### blacklist.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### blacklist.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### blacklist.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### blacklist.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *blacklist.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### blacklist.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### blacklist.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### blacklist.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### blacklist.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### blacklist.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### blacklist.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### blacklist.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### blacklist.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_campaign_lifecycle"></a>
## campaign_lifecycle

* [campaign_lifecycle](#module_campaign_lifecycle)
    * [~CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle) ⇐ <code>[Command](#module_command..Command)</code>
        * [new CampaignLifecycle()](#new_module_campaign_lifecycle..CampaignLifecycle_new)
        * [.args](#module_command..Command+args)
        * [.forCountry(countryIso)](#module_campaign_lifecycle..CampaignLifecycle+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_campaign_lifecycle..CampaignLifecycle"></a>
### campaign_lifecycle~CampaignLifecycle ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[campaign_lifecycle](#module_campaign_lifecycle)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_campaigns_lifecycle CampaignLifecycle endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle) ⇐ <code>[Command](#module_command..Command)</code>
    * [new CampaignLifecycle()](#new_module_campaign_lifecycle..CampaignLifecycle_new)
    * [.args](#module_command..Command+args)
    * [.forCountry(countryIso)](#module_campaign_lifecycle..CampaignLifecycle+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_campaign_lifecycle..CampaignLifecycle_new"></a>
#### new CampaignLifecycle()
The CampaignLifecycle endpoint.

<a name="module_command..Command+args"></a>
#### campaignLifecycle.args
**Kind**: instance property of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_campaign_lifecycle..CampaignLifecycle+forCountry"></a>
#### campaignLifecycle.forCountry(countryIso) ⇒ <code>[Command](#module_command..Command)</code>
Sets the tariff country ISO code.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| countryIso | <code>string</code> | 2-letter ISO code. |

<a name="module_command..Command+setArgument"></a>
#### campaignLifecycle.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### campaignLifecycle.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### campaignLifecycle.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### campaignLifecycle.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *campaignLifecycle.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### campaignLifecycle.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### campaignLifecycle.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### campaignLifecycle.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### campaignLifecycle.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### campaignLifecycle.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### campaignLifecycle.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### campaignLifecycle.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### campaignLifecycle.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_me"></a>
## me

* [me](#module_me)
    * [~Me](#module_me..Me) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Me()](#new_module_me..Me_new)
        * [.args](#module_command..Command+args)
        * [.name(first, last)](#module_me..Me+name) ⇒ <code>[Command](#module_command..Command)</code>
        * [.company(company)](#module_me..Me+company) ⇒ <code>[Command](#module_command..Command)</code>
        * [.email(email)](#module_me..Me+email) ⇒ <code>[Command](#module_command..Command)</code>
        * [.callbackUrl(callbackUrl)](#module_me..Me+callbackUrl) ⇒ <code>[Command](#module_command..Command)</code>
        * [.timezone(timezone)](#module_me..Me+timezone) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_me..Me"></a>
### me~Me ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[me](#module_me)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_me Me endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Me](#module_me..Me) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Me()](#new_module_me..Me_new)
    * [.args](#module_command..Command+args)
    * [.name(first, last)](#module_me..Me+name) ⇒ <code>[Command](#module_command..Command)</code>
    * [.company(company)](#module_me..Me+company) ⇒ <code>[Command](#module_command..Command)</code>
    * [.email(email)](#module_me..Me+email) ⇒ <code>[Command](#module_command..Command)</code>
    * [.callbackUrl(callbackUrl)](#module_me..Me+callbackUrl) ⇒ <code>[Command](#module_command..Command)</code>
    * [.timezone(timezone)](#module_me..Me+timezone) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_me..Me_new"></a>
#### new Me()
The Me endpoint.

<a name="module_command..Command+args"></a>
#### me.args
**Kind**: instance property of <code>[Me](#module_me..Me)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_me..Me+name"></a>
#### me.name(first, last) ⇒ <code>[Command](#module_command..Command)</code>
Sets the name.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| first | <code>string</code> | 
| last | <code>string</code> | 

<a name="module_me..Me+company"></a>
#### me.company(company) ⇒ <code>[Command](#module_command..Command)</code>
Sets the company.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| company | <code>string</code> | 

<a name="module_me..Me+email"></a>
#### me.email(email) ⇒ <code>[Command](#module_command..Command)</code>
Sets the email.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="module_me..Me+callbackUrl"></a>
#### me.callbackUrl(callbackUrl) ⇒ <code>[Command](#module_command..Command)</code>
Sets the callback url.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| callbackUrl | <code>string</code> | 

<a name="module_me..Me+timezone"></a>
#### me.timezone(timezone) ⇒ <code>[Command](#module_command..Command)</code>
Sets the timezone.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| timezone | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### me.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### me.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### me.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### me.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *me.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Me](#module_me..Me)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### me.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### me.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### me.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### me.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### me.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### me.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### me.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### me.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Me](#module_me..Me)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_sms"></a>
## sms

* [sms](#module_sms)
    * [~Sms](#module_sms..Sms) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Sms()](#new_module_sms..Sms_new)
        * [.args](#module_command..Command+args)
        * [.id(id)](#module_sms..Sms+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.to(to)](#module_sms..Sms+to) ⇒ <code>[Command](#module_command..Command)</code>
        * [.from(from)](#module_sms..Sms+from) ⇒ <code>[Command](#module_command..Command)</code>
        * [.useTemplate(templateId, variables)](#module_sms..Sms+useTemplate) ⇒ <code>[Command](#module_command..Command)</code>
        * [.text(text)](#module_sms..Sms+text) ⇒ <code>[Command](#module_command..Command)</code>
        * [.clientRef(text)](#module_sms..Sms+clientRef) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_sms..Sms"></a>
### sms~Sms ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[sms](#module_sms)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_sms SMS endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Sms](#module_sms..Sms) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Sms()](#new_module_sms..Sms_new)
    * [.args](#module_command..Command+args)
    * [.id(id)](#module_sms..Sms+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.to(to)](#module_sms..Sms+to) ⇒ <code>[Command](#module_command..Command)</code>
    * [.from(from)](#module_sms..Sms+from) ⇒ <code>[Command](#module_command..Command)</code>
    * [.useTemplate(templateId, variables)](#module_sms..Sms+useTemplate) ⇒ <code>[Command](#module_command..Command)</code>
    * [.text(text)](#module_sms..Sms+text) ⇒ <code>[Command](#module_command..Command)</code>
    * [.clientRef(text)](#module_sms..Sms+clientRef) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_sms..Sms_new"></a>
#### new Sms()
The Sms endpoint.

<a name="module_command..Command+args"></a>
#### sms.args
**Kind**: instance property of <code>[Sms](#module_sms..Sms)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_sms..Sms+id"></a>
#### sms.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the id.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="module_sms..Sms+to"></a>
#### sms.to(to) ⇒ <code>[Command](#module_command..Command)</code>
Sets the message destination number.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| to | <code>string</code> | 

<a name="module_sms..Sms+from"></a>
#### sms.from(from) ⇒ <code>[Command](#module_command..Command)</code>
Sets the message source number.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| from | <code>string</code> | 

<a name="module_sms..Sms+useTemplate"></a>
#### sms.useTemplate(templateId, variables) ⇒ <code>[Command](#module_command..Command)</code>
Sets the template id to use.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| templateId | <code>integer</code> | 
| variables | <code>Object</code> | 

<a name="module_sms..Sms+text"></a>
#### sms.text(text) ⇒ <code>[Command](#module_command..Command)</code>
Sets the message text.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_sms..Sms+clientRef"></a>
#### sms.clientRef(text) ⇒ <code>[Command](#module_command..Command)</code>
Set a specific custom client reference.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### sms.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### sms.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### sms.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### sms.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *sms.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Sms](#module_sms..Sms)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### sms.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### sms.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### sms.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### sms.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### sms.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### sms.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### sms.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### sms.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Sms](#module_sms..Sms)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_tariffs"></a>
## tariffs

* [tariffs](#module_tariffs)
    * [~Tariffs](#module_tariffs..Tariffs) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Tariffs()](#new_module_tariffs..Tariffs_new)
        * [.args](#module_command..Command+args)
        * [.forCountry(countryIso)](#module_tariffs..Tariffs+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_tariffs..Tariffs"></a>
### tariffs~Tariffs ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[tariffs](#module_tariffs)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_tariffs Tariffs endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Tariffs](#module_tariffs..Tariffs) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Tariffs()](#new_module_tariffs..Tariffs_new)
    * [.args](#module_command..Command+args)
    * [.forCountry(countryIso)](#module_tariffs..Tariffs+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_tariffs..Tariffs_new"></a>
#### new Tariffs()
The Timezones endpoint.

<a name="module_command..Command+args"></a>
#### tariffs.args
**Kind**: instance property of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_tariffs..Tariffs+forCountry"></a>
#### tariffs.forCountry(countryIso) ⇒ <code>[Command](#module_command..Command)</code>
Sets the tariff country ISO code.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| countryIso | <code>string</code> | 2-letter ISO code. |

<a name="module_command..Command+setArgument"></a>
#### tariffs.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### tariffs.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### tariffs.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### tariffs.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *tariffs.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### tariffs.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### tariffs.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### tariffs.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### tariffs.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### tariffs.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### tariffs.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### tariffs.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### tariffs.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Tariffs](#module_tariffs..Tariffs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_templates"></a>
## templates

* [templates](#module_templates)
    * [~Templates](#module_templates..Templates) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Templates()](#new_module_templates..Templates_new)
        * [.args](#module_command..Command+args)
        * [.name(name)](#module_templates..Templates+name) ⇒ <code>[Command](#module_command..Command)</code>
        * [.description(description)](#module_templates..Templates+description) ⇒ <code>[Command](#module_command..Command)</code>
        * [.text(text)](#module_templates..Templates+text) ⇒ <code>[Command](#module_command..Command)</code>
        * [.id(id)](#module_templates..Templates+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_templates..Templates"></a>
### templates~Templates ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[templates](#module_templates)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_templates Templates endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Templates](#module_templates..Templates) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Templates()](#new_module_templates..Templates_new)
    * [.args](#module_command..Command+args)
    * [.name(name)](#module_templates..Templates+name) ⇒ <code>[Command](#module_command..Command)</code>
    * [.description(description)](#module_templates..Templates+description) ⇒ <code>[Command](#module_command..Command)</code>
    * [.text(text)](#module_templates..Templates+text) ⇒ <code>[Command](#module_command..Command)</code>
    * [.id(id)](#module_templates..Templates+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_templates..Templates_new"></a>
#### new Templates()
The Templates endpoint.

<a name="module_command..Command+args"></a>
#### templates.args
**Kind**: instance property of <code>[Templates](#module_templates..Templates)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_templates..Templates+name"></a>
#### templates.name(name) ⇒ <code>[Command](#module_command..Command)</code>
Sets the name.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_templates..Templates+description"></a>
#### templates.description(description) ⇒ <code>[Command](#module_command..Command)</code>
Sets the description.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| description | <code>string</code> | 

<a name="module_templates..Templates+text"></a>
#### templates.text(text) ⇒ <code>[Command](#module_command..Command)</code>
Sets the template text.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_templates..Templates+id"></a>
#### templates.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the id.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>integer</code> | 

<a name="module_command..Command+setArgument"></a>
#### templates.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### templates.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### templates.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### templates.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *templates.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Templates](#module_templates..Templates)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### templates.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### templates.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### templates.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### templates.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### templates.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### templates.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### templates.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### templates.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Templates](#module_templates..Templates)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_timezones"></a>
## timezones

* [timezones](#module_timezones)
    * [~Timezones](#module_timezones..Timezones) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Timezones()](#new_module_timezones..Timezones_new)
        * [.args](#module_command..Command+args)
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_timezones..Timezones"></a>
### timezones~Timezones ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[timezones](#module_timezones)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_timezones Timezones endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Timezones](#module_timezones..Timezones) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Timezones()](#new_module_timezones..Timezones_new)
    * [.args](#module_command..Command+args)
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_timezones..Timezones_new"></a>
#### new Timezones()
The Timezones endpoint.

<a name="module_command..Command+args"></a>
#### timezones.args
**Kind**: instance property of <code>[Timezones](#module_timezones..Timezones)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_command..Command+setArgument"></a>
#### timezones.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### timezones.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### timezones.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### timezones.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *timezones.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### timezones.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### timezones.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### timezones.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### timezones.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### timezones.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### timezones.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### timezones.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### timezones.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Timezones](#module_timezones..Timezones)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_command"></a>
## command

* [command](#module_command)
    * [~Command](#module_command..Command)
        * [new Command()](#new_module_command..Command_new)
        * [.args](#module_command..Command+args)
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_command..Command"></a>
### command~Command
**Kind**: inner class of <code>[command](#module_command)</code>  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Command](#module_command..Command)
    * [new Command()](#new_module_command..Command_new)
    * [.args](#module_command..Command+args)
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_command..Command_new"></a>
#### new Command()
A base command.

<a name="module_command..Command+args"></a>
#### command.args
**Kind**: instance property of <code>[Command](#module_command..Command)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_command..Command+setArgument"></a>
#### command.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### command.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### command.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### command.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *command.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Command](#module_command..Command)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### command.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### command.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### command.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### command.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### command.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### command.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### command.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### command.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Command](#module_command..Command)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_null_logger"></a>
## null_logger

* [null_logger](#module_null_logger)
    * [~NullLogger](#module_null_logger..NullLogger)
        * [new NullLogger()](#new_module_null_logger..NullLogger_new)
        * [.log(message)](#module_null_logger..NullLogger+log) ⇒ <code>null</code>

<a name="module_null_logger..NullLogger"></a>
### null_logger~NullLogger
**Kind**: inner class of <code>[null_logger](#module_null_logger)</code>  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~NullLogger](#module_null_logger..NullLogger)
    * [new NullLogger()](#new_module_null_logger..NullLogger_new)
    * [.log(message)](#module_null_logger..NullLogger+log) ⇒ <code>null</code>

<a name="new_module_null_logger..NullLogger_new"></a>
#### new NullLogger()
This is our null logger, used in case none is setup.

<a name="module_null_logger..NullLogger+log"></a>
#### nullLogger.log(message) ⇒ <code>null</code>
Discards the log message when called. This is the only method used by us.

**Kind**: instance method of <code>[NullLogger](#module_null_logger..NullLogger)</code>  
**Returns**: <code>null</code> - Always returns null.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The message to log. |

