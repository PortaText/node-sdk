## Modules

<dl>
<dt><a href="#module_client">client</a></dt>
<dd></dd>
<dt><a href="#module_client_http">client_http</a></dt>
<dd></dd>
<dt><a href="#module_acl">acl</a></dt>
<dd></dd>
<dt><a href="#module_blacklist">blacklist</a></dt>
<dd></dd>
<dt><a href="#module_campaign_lifecycle">campaign_lifecycle</a></dt>
<dd></dd>
<dt><a href="#module_campaign">campaign</a></dt>
<dd></dd>
<dt><a href="#module_cnam">cnam</a></dt>
<dd></dd>
<dt><a href="#module_contact_lists">contact_lists</a></dt>
<dd></dd>
<dt><a href="#module_credit_cards">credit_cards</a></dt>
<dd></dd>
<dt><a href="#module_did_search">did_search</a></dt>
<dd></dd>
<dt><a href="#module_did_settings">did_settings</a></dt>
<dd></dd>
<dt><a href="#module_email_verify">email_verify</a></dt>
<dd></dd>
<dt><a href="#module_jobs">jobs</a></dt>
<dd></dd>
<dt><a href="#module_me">me</a></dt>
<dd></dd>
<dt><a href="#module_my_password">my_password</a></dt>
<dd></dd>
<dt><a href="#module_recharge">recharge</a></dt>
<dd></dd>
<dt><a href="#module_settings">settings</a></dt>
<dd></dd>
<dt><a href="#module_sms">sms</a></dt>
<dd></dd>
<dt><a href="#module_sms_campaign">sms_campaign</a></dt>
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
        * [.run(endpoint, method, contentType, acceptContentType, body, outputFile, [authType])](#module_client..Client+run) ⇒ <code>Promise</code>
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
    * [.run(endpoint, method, contentType, acceptContentType, body, outputFile, [authType])](#module_client..Client+run) ⇒ <code>Promise</code>
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
#### client.run(endpoint, method, contentType, acceptContentType, body, outputFile, [authType]) ⇒ <code>Promise</code>
Sets a logger. The object to set must contain a "log" method (i.e:
compatible with the console object).

**Kind**: instance method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| endpoint | <code>string</code> | Relative to the base endpoint (e.g: "login") |
| method | <code>HttpMethod</code> |  |
| contentType | <code>string</code> | E.g: "application/json" |
| acceptContentType | <code>string</code> | E.g: "application/json" |
| body | <code>string</code> |  |
| outputFile | <code>string</code> |  |
| [authType] | <code>AuthMethod</code> | If not supplied, will be automatically chosen. |

<a name="module_client..Client+execute"></a>
#### *client.execute(descriptor) ⇒ <code>Promise</code>*
Executes the given request through the underlying implementation.

**Kind**: instance abstract method of <code>[Client](#module_client..Client)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| descriptor | <code>Descriptor</code> | The request descriptor. |

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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### acl.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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
        * [.saveTo(file)](#module_blacklist..Blacklist+saveTo) ⇒ <code>[Command](#module_command..Command)</code>
        * [.csv(filename)](#module_blacklist..Blacklist+csv) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.saveTo(file)](#module_blacklist..Blacklist+saveTo) ⇒ <code>[Command](#module_command..Command)</code>
    * [.csv(filename)](#module_blacklist..Blacklist+csv) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_blacklist..Blacklist+saveTo"></a>
#### blacklist.saveTo(file) ⇒ <code>[Command](#module_command..Command)</code>
Saves the blacklist to the given filename.

**Kind**: instance method of <code>[Blacklist](#module_blacklist..Blacklist)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| file | <code>string</code> | 

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

<a name="module_command..Command+acceptContentType"></a>
#### blacklist.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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
        * [.id()](#module_campaign_lifecycle..CampaignLifecycle+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.start()](#module_campaign_lifecycle..CampaignLifecycle+start) ⇒ <code>[Command](#module_command..Command)</code>
        * [.resume()](#module_campaign_lifecycle..CampaignLifecycle+resume) ⇒ <code>[Command](#module_command..Command)</code>
        * [.pause()](#module_campaign_lifecycle..CampaignLifecycle+pause) ⇒ <code>[Command](#module_command..Command)</code>
        * [.cancel()](#module_campaign_lifecycle..CampaignLifecycle+cancel) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.id()](#module_campaign_lifecycle..CampaignLifecycle+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.start()](#module_campaign_lifecycle..CampaignLifecycle+start) ⇒ <code>[Command](#module_command..Command)</code>
    * [.resume()](#module_campaign_lifecycle..CampaignLifecycle+resume) ⇒ <code>[Command](#module_command..Command)</code>
    * [.pause()](#module_campaign_lifecycle..CampaignLifecycle+pause) ⇒ <code>[Command](#module_command..Command)</code>
    * [.cancel()](#module_campaign_lifecycle..CampaignLifecycle+cancel) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_campaign_lifecycle..CampaignLifecycle+id"></a>
#### campaignLifecycle.id() ⇒ <code>[Command](#module_command..Command)</code>
Sets the campaign id.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_campaign_lifecycle..CampaignLifecycle+start"></a>
#### campaignLifecycle.start() ⇒ <code>[Command](#module_command..Command)</code>
Starts a campaign.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_campaign_lifecycle..CampaignLifecycle+resume"></a>
#### campaignLifecycle.resume() ⇒ <code>[Command](#module_command..Command)</code>
Resumes a campaign.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_campaign_lifecycle..CampaignLifecycle+pause"></a>
#### campaignLifecycle.pause() ⇒ <code>[Command](#module_command..Command)</code>
Pauses a campaign.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
<a name="module_campaign_lifecycle..CampaignLifecycle+cancel"></a>
#### campaignLifecycle.cancel() ⇒ <code>[Command](#module_command..Command)</code>
Cancels a campaign.

**Kind**: instance method of <code>[CampaignLifecycle](#module_campaign_lifecycle..CampaignLifecycle)</code>  
**Access:** public  
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

<a name="module_command..Command+acceptContentType"></a>
#### campaignLifecycle.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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

<a name="module_campaign"></a>
## campaign

* [campaign](#module_campaign)
    * [~Campaigns](#module_campaign..Campaigns) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Campaigns()](#new_module_campaign..Campaigns_new)
        * [.args](#module_command..Command+args)
        * [.id(id)](#module_campaign..Campaigns+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.name(name)](#module_campaign..Campaigns+name) ⇒ <code>[Command](#module_command..Command)</code>
        * [.description(description)](#module_campaign..Campaigns+description) ⇒ <code>[Command](#module_command..Command)</code>
        * [.from(from)](#module_campaign..Campaigns+from) ⇒ <code>[Command](#module_command..Command)</code>
        * [.toContactLists(contactLists)](#module_campaign..Campaigns+toContactLists) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_campaign..Campaigns"></a>
### campaign~Campaigns ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[campaign](#module_campaign)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_campaigns Campaigns endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Campaigns](#module_campaign..Campaigns) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Campaigns()](#new_module_campaign..Campaigns_new)
    * [.args](#module_command..Command+args)
    * [.id(id)](#module_campaign..Campaigns+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.name(name)](#module_campaign..Campaigns+name) ⇒ <code>[Command](#module_command..Command)</code>
    * [.description(description)](#module_campaign..Campaigns+description) ⇒ <code>[Command](#module_command..Command)</code>
    * [.from(from)](#module_campaign..Campaigns+from) ⇒ <code>[Command](#module_command..Command)</code>
    * [.toContactLists(contactLists)](#module_campaign..Campaigns+toContactLists) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_campaign..Campaigns_new"></a>
#### new Campaigns()
The Campaigns endpoint.

<a name="module_command..Command+args"></a>
#### campaigns.args
**Kind**: instance property of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_campaign..Campaigns+id"></a>
#### campaigns.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the id.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>integer</code> | 

<a name="module_campaign..Campaigns+name"></a>
#### campaigns.name(name) ⇒ <code>[Command](#module_command..Command)</code>
Sets the name.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_campaign..Campaigns+description"></a>
#### campaigns.description(description) ⇒ <code>[Command](#module_command..Command)</code>
Sets the description.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| description | <code>string</code> | 

<a name="module_campaign..Campaigns+from"></a>
#### campaigns.from(from) ⇒ <code>[Command](#module_command..Command)</code>
Specifies source telephone number for the campaign.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| from | <code>string</code> | 

<a name="module_campaign..Campaigns+toContactLists"></a>
#### campaigns.toContactLists(contactLists) ⇒ <code>[Command](#module_command..Command)</code>
Contact list IDs to use.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| contactLists | <code>Array.&lt;integer&gt;</code> | 

<a name="module_command..Command+setArgument"></a>
#### campaigns.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### campaigns.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### campaigns.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### campaigns.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *campaigns.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### campaigns.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### campaigns.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### campaigns.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### campaigns.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### campaigns.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### campaigns.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### campaigns.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### campaigns.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### campaigns.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Campaigns](#module_campaign..Campaigns)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_cnam"></a>
## cnam

* [cnam](#module_cnam)
    * [~Cnam](#module_cnam..Cnam) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Cnam()](#new_module_cnam..Cnam_new)
        * [.args](#module_command..Command+args)
        * [.forNumber(countryIso)](#module_cnam..Cnam+forNumber) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_cnam..Cnam"></a>
### cnam~Cnam ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[cnam](#module_cnam)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_cnam Cnam endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Cnam](#module_cnam..Cnam) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Cnam()](#new_module_cnam..Cnam_new)
    * [.args](#module_command..Command+args)
    * [.forNumber(countryIso)](#module_cnam..Cnam+forNumber) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_cnam..Cnam_new"></a>
#### new Cnam()
The Cnam endpoint.

<a name="module_command..Command+args"></a>
#### cnam.args
**Kind**: instance property of <code>[Cnam](#module_cnam..Cnam)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_cnam..Cnam+forNumber"></a>
#### cnam.forNumber(countryIso) ⇒ <code>[Command](#module_command..Command)</code>
Asks for CNAM info for the specific number.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| countryIso | <code>string</code> | 2-letter ISO code. |

<a name="module_command..Command+setArgument"></a>
#### cnam.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### cnam.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### cnam.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### cnam.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *cnam.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### cnam.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### cnam.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### cnam.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### cnam.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### cnam.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### cnam.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### cnam.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### cnam.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### cnam.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Cnam](#module_cnam..Cnam)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_contact_lists"></a>
## contact_lists

* [contact_lists](#module_contact_lists)
    * [~ContactLists](#module_contact_lists..ContactLists) ⇐ <code>[Command](#module_command..Command)</code>
        * [new ContactLists()](#new_module_contact_lists..ContactLists_new)
        * [.args](#module_command..Command+args)
        * [.id(id)](#module_contact_lists..ContactLists+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.name(name)](#module_contact_lists..ContactLists+name) ⇒ <code>[Command](#module_command..Command)</code>
        * [.description(description)](#module_contact_lists..ContactLists+description) ⇒ <code>[Command](#module_command..Command)</code>
        * [.csv(filename)](#module_contact_lists..ContactLists+csv) ⇒ <code>[Command](#module_command..Command)</code>
        * [.saveTo(file)](#module_contact_lists..ContactLists+saveTo) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_contact_lists..ContactLists"></a>
### contact_lists~ContactLists ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[contact_lists](#module_contact_lists)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_contact_lists ContactLists endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~ContactLists](#module_contact_lists..ContactLists) ⇐ <code>[Command](#module_command..Command)</code>
    * [new ContactLists()](#new_module_contact_lists..ContactLists_new)
    * [.args](#module_command..Command+args)
    * [.id(id)](#module_contact_lists..ContactLists+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.name(name)](#module_contact_lists..ContactLists+name) ⇒ <code>[Command](#module_command..Command)</code>
    * [.description(description)](#module_contact_lists..ContactLists+description) ⇒ <code>[Command](#module_command..Command)</code>
    * [.csv(filename)](#module_contact_lists..ContactLists+csv) ⇒ <code>[Command](#module_command..Command)</code>
    * [.saveTo(file)](#module_contact_lists..ContactLists+saveTo) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_contact_lists..ContactLists_new"></a>
#### new ContactLists()
The ContactLists endpoint.

<a name="module_command..Command+args"></a>
#### contactLists.args
**Kind**: instance property of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_contact_lists..ContactLists+id"></a>
#### contactLists.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the id.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>integer</code> | 

<a name="module_contact_lists..ContactLists+name"></a>
#### contactLists.name(name) ⇒ <code>[Command](#module_command..Command)</code>
Sets the name.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_contact_lists..ContactLists+description"></a>
#### contactLists.description(description) ⇒ <code>[Command](#module_command..Command)</code>
Sets the description.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| description | <code>string</code> | 

<a name="module_contact_lists..ContactLists+csv"></a>
#### contactLists.csv(filename) ⇒ <code>[Command](#module_command..Command)</code>
Send a CSV file to import contacts.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 

<a name="module_contact_lists..ContactLists+saveTo"></a>
#### contactLists.saveTo(file) ⇒ <code>[Command](#module_command..Command)</code>
Saves the contact list to the given filename.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| file | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### contactLists.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### contactLists.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### contactLists.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### contactLists.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *contactLists.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### contactLists.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### contactLists.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### contactLists.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### contactLists.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### contactLists.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### contactLists.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### contactLists.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### contactLists.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### contactLists.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[ContactLists](#module_contact_lists..ContactLists)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_credit_cards"></a>
## credit_cards

* [credit_cards](#module_credit_cards)
    * [~CreditCards](#module_credit_cards..CreditCards) ⇐ <code>[Command](#module_command..Command)</code>
        * [new CreditCards()](#new_module_credit_cards..CreditCards_new)
        * [.args](#module_command..Command+args)
        * [.id(id)](#module_credit_cards..CreditCards+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.nameOnCard(firstname, lastname)](#module_credit_cards..CreditCards+nameOnCard) ⇒ <code>[Command](#module_command..Command)</code>
        * [.cardInfo(number, expirationDate, code)](#module_credit_cards..CreditCards+cardInfo) ⇒ <code>[Command](#module_command..Command)</code>
        * [.address(streetAddress, city, state, zip, country)](#module_credit_cards..CreditCards+address) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_credit_cards..CreditCards"></a>
### credit_cards~CreditCards ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[credit_cards](#module_credit_cards)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_credit_cards CreditCards endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~CreditCards](#module_credit_cards..CreditCards) ⇐ <code>[Command](#module_command..Command)</code>
    * [new CreditCards()](#new_module_credit_cards..CreditCards_new)
    * [.args](#module_command..Command+args)
    * [.id(id)](#module_credit_cards..CreditCards+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.nameOnCard(firstname, lastname)](#module_credit_cards..CreditCards+nameOnCard) ⇒ <code>[Command](#module_command..Command)</code>
    * [.cardInfo(number, expirationDate, code)](#module_credit_cards..CreditCards+cardInfo) ⇒ <code>[Command](#module_command..Command)</code>
    * [.address(streetAddress, city, state, zip, country)](#module_credit_cards..CreditCards+address) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_credit_cards..CreditCards_new"></a>
#### new CreditCards()
The CreditCards endpoint.

<a name="module_command..Command+args"></a>
#### creditCards.args
**Kind**: instance property of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_credit_cards..CreditCards+id"></a>
#### creditCards.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the credit card id.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>integer</code> | 

<a name="module_credit_cards..CreditCards+nameOnCard"></a>
#### creditCards.nameOnCard(firstname, lastname) ⇒ <code>[Command](#module_command..Command)</code>
Set name on card.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| firstname | <code>string</code> | 
| lastname | <code>string</code> | 

<a name="module_credit_cards..CreditCards+cardInfo"></a>
#### creditCards.cardInfo(number, expirationDate, code) ⇒ <code>[Command](#module_command..Command)</code>
Set card information.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>string</code> |  |
| expirationDate | <code>string</code> | In format: YYYY-MM. |
| code | <code>string</code> |  |

<a name="module_credit_cards..CreditCards+address"></a>
#### creditCards.address(streetAddress, city, state, zip, country) ⇒ <code>[Command](#module_command..Command)</code>
Set card billing address.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| streetAddress | <code>string</code> | 
| city | <code>string</code> | 
| state | <code>string</code> | 
| zip | <code>string</code> | 
| country | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### creditCards.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### creditCards.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### creditCards.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### creditCards.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *creditCards.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### creditCards.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### creditCards.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### creditCards.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### creditCards.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### creditCards.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### creditCards.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### creditCards.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### creditCards.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### creditCards.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[CreditCards](#module_credit_cards..CreditCards)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_did_search"></a>
## did_search

* [did_search](#module_did_search)
    * [~DidSearch](#module_did_search..DidSearch) ⇐ <code>[Command](#module_command..Command)</code>
        * [new DidSearch()](#new_module_did_search..DidSearch_new)
        * [.args](#module_command..Command+args)
        * [.forCountry(countryIso)](#module_did_search..DidSearch+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
        * [.tollFree()](#module_did_search..DidSearch+tollFree) ⇒ <code>[Command](#module_command..Command)</code>
        * [.local()](#module_did_search..DidSearch+local) ⇒ <code>[Command](#module_command..Command)</code>
        * [.national()](#module_did_search..DidSearch+national) ⇒ <code>[Command](#module_command..Command)</code>
        * [.mobile()](#module_did_search..DidSearch+mobile) ⇒ <code>[Command](#module_command..Command)</code>
        * [.page(page)](#module_did_search..DidSearch+page) ⇒ <code>[Command](#module_command..Command)</code>
        * [.startsWith(pattern)](#module_did_search..DidSearch+startsWith) ⇒ <code>[Command](#module_command..Command)</code>
        * [.endsWith(pattern)](#module_did_search..DidSearch+endsWith) ⇒ <code>[Command](#module_command..Command)</code>
        * [.contains(pattern)](#module_did_search..DidSearch+contains) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_did_search..DidSearch"></a>
### did_search~DidSearch ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[did_search](#module_did_search)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_dids_search DidSearch endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~DidSearch](#module_did_search..DidSearch) ⇐ <code>[Command](#module_command..Command)</code>
    * [new DidSearch()](#new_module_did_search..DidSearch_new)
    * [.args](#module_command..Command+args)
    * [.forCountry(countryIso)](#module_did_search..DidSearch+forCountry) ⇒ <code>[Command](#module_command..Command)</code>
    * [.tollFree()](#module_did_search..DidSearch+tollFree) ⇒ <code>[Command](#module_command..Command)</code>
    * [.local()](#module_did_search..DidSearch+local) ⇒ <code>[Command](#module_command..Command)</code>
    * [.national()](#module_did_search..DidSearch+national) ⇒ <code>[Command](#module_command..Command)</code>
    * [.mobile()](#module_did_search..DidSearch+mobile) ⇒ <code>[Command](#module_command..Command)</code>
    * [.page(page)](#module_did_search..DidSearch+page) ⇒ <code>[Command](#module_command..Command)</code>
    * [.startsWith(pattern)](#module_did_search..DidSearch+startsWith) ⇒ <code>[Command](#module_command..Command)</code>
    * [.endsWith(pattern)](#module_did_search..DidSearch+endsWith) ⇒ <code>[Command](#module_command..Command)</code>
    * [.contains(pattern)](#module_did_search..DidSearch+contains) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_did_search..DidSearch_new"></a>
#### new DidSearch()
The DidSearch endpoint.

<a name="module_command..Command+args"></a>
#### didSearch.args
**Kind**: instance property of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_did_search..DidSearch+forCountry"></a>
#### didSearch.forCountry(countryIso) ⇒ <code>[Command](#module_command..Command)</code>
Searches for DIDs for this specific country.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| countryIso | <code>string</code> | 2-letter ISO code. |

<a name="module_did_search..DidSearch+tollFree"></a>
#### didSearch.tollFree() ⇒ <code>[Command](#module_command..Command)</code>
Search only for toll free numbers.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_did_search..DidSearch+local"></a>
#### didSearch.local() ⇒ <code>[Command](#module_command..Command)</code>
Search only for local numbers.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_did_search..DidSearch+national"></a>
#### didSearch.national() ⇒ <code>[Command](#module_command..Command)</code>
Search only for national numbers.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_did_search..DidSearch+mobile"></a>
#### didSearch.mobile() ⇒ <code>[Command](#module_command..Command)</code>
Search only for mobile numbers.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_did_search..DidSearch+page"></a>
#### didSearch.page(page) ⇒ <code>[Command](#module_command..Command)</code>
Return the specific page of results.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| page | <code>integer</code> | 

<a name="module_did_search..DidSearch+startsWith"></a>
#### didSearch.startsWith(pattern) ⇒ <code>[Command](#module_command..Command)</code>
Searches numbers that start with the specific pattern.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| pattern | <code>string</code> | 

<a name="module_did_search..DidSearch+endsWith"></a>
#### didSearch.endsWith(pattern) ⇒ <code>[Command](#module_command..Command)</code>
Searches numbers that ends with the specific pattern.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| pattern | <code>string</code> | 

<a name="module_did_search..DidSearch+contains"></a>
#### didSearch.contains(pattern) ⇒ <code>[Command](#module_command..Command)</code>
Searches numbers that contains the specific pattern.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| pattern | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### didSearch.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### didSearch.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### didSearch.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### didSearch.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *didSearch.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### didSearch.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Overrides:** <code>[body](#module_command..Command+body)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### didSearch.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### didSearch.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### didSearch.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### didSearch.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### didSearch.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### didSearch.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### didSearch.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### didSearch.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[DidSearch](#module_did_search..DidSearch)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_did_settings"></a>
## did_settings

* [did_settings](#module_did_settings)
    * [~DidSettings](#module_did_settings..DidSettings) ⇐ <code>[Command](#module_command..Command)</code>
        * [new DidSettings()](#new_module_did_settings..DidSettings_new)
        * [.args](#module_command..Command+args)
        * [.forNumber(number)](#module_did_settings..DidSettings+forNumber) ⇒ <code>[Command](#module_command..Command)</code>
        * [.enableCnam(value)](#module_did_settings..DidSettings+enableCnam) ⇒ <code>[Command](#module_command..Command)</code>
        * [.disableCnam()](#module_did_settings..DidSettings+disableCnam) ⇒ <code>[Command](#module_command..Command)</code>
        * [.dontAutoRespond()](#module_did_settings..DidSettings+dontAutoRespond) ⇒ <code>[Command](#module_command..Command)</code>
        * [.autoRespondWith(text)](#module_did_settings..DidSettings+autoRespondWith) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_did_settings..DidSettings"></a>
### did_settings~DidSettings ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[did_settings](#module_did_settings)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_did_settings DidSettings endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~DidSettings](#module_did_settings..DidSettings) ⇐ <code>[Command](#module_command..Command)</code>
    * [new DidSettings()](#new_module_did_settings..DidSettings_new)
    * [.args](#module_command..Command+args)
    * [.forNumber(number)](#module_did_settings..DidSettings+forNumber) ⇒ <code>[Command](#module_command..Command)</code>
    * [.enableCnam(value)](#module_did_settings..DidSettings+enableCnam) ⇒ <code>[Command](#module_command..Command)</code>
    * [.disableCnam()](#module_did_settings..DidSettings+disableCnam) ⇒ <code>[Command](#module_command..Command)</code>
    * [.dontAutoRespond()](#module_did_settings..DidSettings+dontAutoRespond) ⇒ <code>[Command](#module_command..Command)</code>
    * [.autoRespondWith(text)](#module_did_settings..DidSettings+autoRespondWith) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_did_settings..DidSettings_new"></a>
#### new DidSettings()
The DidSettings endpoint.

<a name="module_command..Command+args"></a>
#### didSettings.args
**Kind**: instance property of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_did_settings..DidSettings+forNumber"></a>
#### didSettings.forNumber(number) ⇒ <code>[Command](#module_command..Command)</code>
Selects DID.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| number | <code>string</code> | 

<a name="module_did_settings..DidSettings+enableCnam"></a>
#### didSettings.enableCnam(value) ⇒ <code>[Command](#module_command..Command)</code>
Enables CNAM lookup.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| value | <code>integer</code> | 

<a name="module_did_settings..DidSettings+disableCnam"></a>
#### didSettings.disableCnam() ⇒ <code>[Command](#module_command..Command)</code>
Disables CNAM lookup.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_did_settings..DidSettings+dontAutoRespond"></a>
#### didSettings.dontAutoRespond() ⇒ <code>[Command](#module_command..Command)</code>
Disables autoresponder.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_did_settings..DidSettings+autoRespondWith"></a>
#### didSettings.autoRespondWith(text) ⇒ <code>[Command](#module_command..Command)</code>
Enables autoresponder.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### didSettings.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### didSettings.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### didSettings.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### didSettings.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *didSettings.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### didSettings.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### didSettings.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### didSettings.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### didSettings.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### didSettings.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### didSettings.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### didSettings.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### didSettings.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### didSettings.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[DidSettings](#module_did_settings..DidSettings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_email_verify"></a>
## email_verify

* [email_verify](#module_email_verify)
    * [~EmailVerify](#module_email_verify..EmailVerify) ⇐ <code>[Command](#module_command..Command)</code>
        * [new EmailVerify()](#new_module_email_verify..EmailVerify_new)
        * [.args](#module_command..Command+args)
        * [.withNonce(nonce)](#module_email_verify..EmailVerify+withNonce) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_email_verify..EmailVerify"></a>
### email_verify~EmailVerify ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[email_verify](#module_email_verify)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_email_verify EmailVerify endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~EmailVerify](#module_email_verify..EmailVerify) ⇐ <code>[Command](#module_command..Command)</code>
    * [new EmailVerify()](#new_module_email_verify..EmailVerify_new)
    * [.args](#module_command..Command+args)
    * [.withNonce(nonce)](#module_email_verify..EmailVerify+withNonce) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_email_verify..EmailVerify_new"></a>
#### new EmailVerify()
The EmailVerify endpoint.

<a name="module_command..Command+args"></a>
#### emailVerify.args
**Kind**: instance property of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_email_verify..EmailVerify+withNonce"></a>
#### emailVerify.withNonce(nonce) ⇒ <code>[Command](#module_command..Command)</code>
Use this nonce to verify.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| nonce | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### emailVerify.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### emailVerify.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### emailVerify.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### emailVerify.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *emailVerify.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### emailVerify.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### emailVerify.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### emailVerify.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### emailVerify.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### emailVerify.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### emailVerify.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### emailVerify.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### emailVerify.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### emailVerify.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[EmailVerify](#module_email_verify..EmailVerify)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_jobs"></a>
## jobs

* [jobs](#module_jobs)
    * [~Jobs](#module_jobs..Jobs) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Jobs()](#new_module_jobs..Jobs_new)
        * [.args](#module_command..Command+args)
        * [.id(id)](#module_jobs..Jobs+id) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_jobs..Jobs"></a>
### jobs~Jobs ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[jobs](#module_jobs)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_jobs Jobs endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Jobs](#module_jobs..Jobs) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Jobs()](#new_module_jobs..Jobs_new)
    * [.args](#module_command..Command+args)
    * [.id(id)](#module_jobs..Jobs+id) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_jobs..Jobs_new"></a>
#### new Jobs()
The Jobs endpoint.

<a name="module_command..Command+args"></a>
#### jobs.args
**Kind**: instance property of <code>[Jobs](#module_jobs..Jobs)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_jobs..Jobs+id"></a>
#### jobs.id(id) ⇒ <code>[Command](#module_command..Command)</code>
Sets the id.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| id | <code>integer</code> | 

<a name="module_command..Command+setArgument"></a>
#### jobs.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### jobs.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### jobs.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### jobs.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *jobs.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### jobs.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### jobs.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### jobs.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### jobs.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### jobs.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### jobs.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### jobs.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### jobs.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### jobs.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Jobs](#module_jobs..Jobs)</code>  
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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### me.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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

<a name="module_my_password"></a>
## my_password

* [my_password](#module_my_password)
    * [~MyPassword](#module_my_password..MyPassword) ⇐ <code>[Command](#module_command..Command)</code>
        * [new MyPassword()](#new_module_my_password..MyPassword_new)
        * [.args](#module_command..Command+args)
        * [.withNonce(nonce, newPassword)](#module_my_password..MyPassword+withNonce) ⇒ <code>[Command](#module_command..Command)</code>
        * [.forEmail(email)](#module_my_password..MyPassword+forEmail) ⇒ <code>[Command](#module_command..Command)</code>
        * [.change(oldPassword, newPassword)](#module_my_password..MyPassword+change) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_my_password..MyPassword"></a>
### my_password~MyPassword ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[my_password](#module_my_password)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_me_password Me/Password endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~MyPassword](#module_my_password..MyPassword) ⇐ <code>[Command](#module_command..Command)</code>
    * [new MyPassword()](#new_module_my_password..MyPassword_new)
    * [.args](#module_command..Command+args)
    * [.withNonce(nonce, newPassword)](#module_my_password..MyPassword+withNonce) ⇒ <code>[Command](#module_command..Command)</code>
    * [.forEmail(email)](#module_my_password..MyPassword+forEmail) ⇒ <code>[Command](#module_command..Command)</code>
    * [.change(oldPassword, newPassword)](#module_my_password..MyPassword+change) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_my_password..MyPassword_new"></a>
#### new MyPassword()
The Me/Password endpoint.

<a name="module_command..Command+args"></a>
#### myPassword.args
**Kind**: instance property of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_my_password..MyPassword+withNonce"></a>
#### myPassword.withNonce(nonce, newPassword) ⇒ <code>[Command](#module_command..Command)</code>
Use this nonce to reset a password.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| nonce | <code>string</code> | 
| newPassword | <code>string</code> | 

<a name="module_my_password..MyPassword+forEmail"></a>
#### myPassword.forEmail(email) ⇒ <code>[Command](#module_command..Command)</code>
Ask to reset the password for this email.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="module_my_password..MyPassword+change"></a>
#### myPassword.change(oldPassword, newPassword) ⇒ <code>[Command](#module_command..Command)</code>
Sets the name.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| oldPassword | <code>string</code> | 
| newPassword | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### myPassword.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### myPassword.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### myPassword.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### myPassword.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *myPassword.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### myPassword.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### myPassword.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### myPassword.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### myPassword.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### myPassword.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### myPassword.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### myPassword.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### myPassword.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### myPassword.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[MyPassword](#module_my_password..MyPassword)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_recharge"></a>
## recharge

* [recharge](#module_recharge)
    * [~Recharge](#module_recharge..Recharge) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Recharge()](#new_module_recharge..Recharge_new)
        * [.args](#module_command..Command+args)
        * [.withCard(cardId)](#module_recharge..Recharge+withCard) ⇒ <code>[Command](#module_command..Command)</code>
        * [.total(total)](#module_recharge..Recharge+total) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_recharge..Recharge"></a>
### recharge~Recharge ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[recharge](#module_recharge)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_recharge Recharge endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Recharge](#module_recharge..Recharge) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Recharge()](#new_module_recharge..Recharge_new)
    * [.args](#module_command..Command+args)
    * [.withCard(cardId)](#module_recharge..Recharge+withCard) ⇒ <code>[Command](#module_command..Command)</code>
    * [.total(total)](#module_recharge..Recharge+total) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_recharge..Recharge_new"></a>
#### new Recharge()
The Recharge endpoint.

<a name="module_command..Command+args"></a>
#### recharge.args
**Kind**: instance property of <code>[Recharge](#module_recharge..Recharge)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_recharge..Recharge+withCard"></a>
#### recharge.withCard(cardId) ⇒ <code>[Command](#module_command..Command)</code>
Sets the card id to use for recharge.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| cardId | <code>integer</code> | 

<a name="module_recharge..Recharge+total"></a>
#### recharge.total(total) ⇒ <code>[Command](#module_command..Command)</code>
Amount of money to recharge.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| total | <code>float</code> | 

<a name="module_command..Command+setArgument"></a>
#### recharge.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### recharge.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### recharge.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### recharge.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *recharge.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### recharge.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### recharge.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### recharge.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### recharge.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### recharge.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### recharge.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### recharge.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### recharge.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### recharge.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Recharge](#module_recharge..Recharge)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| client | <code>[Client](#module_client..Client)</code> | 

<a name="module_settings"></a>
## settings

* [settings](#module_settings)
    * [~Settings](#module_settings..Settings) ⇐ <code>[Command](#module_command..Command)</code>
        * [new Settings()](#new_module_settings..Settings_new)
        * [.args](#module_command..Command+args)
        * [.dontAlertOnLowCredit()](#module_settings..Settings+dontAlertOnLowCredit) ⇒ <code>[Command](#module_command..Command)</code>
        * [.alertWhenCreditLessThan(value)](#module_settings..Settings+alertWhenCreditLessThan) ⇒ <code>[Command](#module_command..Command)</code>
        * [.dontSendInboundByEmail()](#module_settings..Settings+dontSendInboundByEmail) ⇒ <code>[Command](#module_command..Command)</code>
        * [.sendInboundByEmail(email)](#module_settings..Settings+sendInboundByEmail) ⇒ <code>[Command](#module_command..Command)</code>
        * [.disableAutoRecharges()](#module_settings..Settings+disableAutoRecharges) ⇒ <code>[Command](#module_command..Command)</code>
        * [.enableAutoRecharges(whenCredit, cardId, total)](#module_settings..Settings+enableAutoRecharges) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_settings..Settings"></a>
### settings~Settings ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[settings](#module_settings)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_settings Settings endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~Settings](#module_settings..Settings) ⇐ <code>[Command](#module_command..Command)</code>
    * [new Settings()](#new_module_settings..Settings_new)
    * [.args](#module_command..Command+args)
    * [.dontAlertOnLowCredit()](#module_settings..Settings+dontAlertOnLowCredit) ⇒ <code>[Command](#module_command..Command)</code>
    * [.alertWhenCreditLessThan(value)](#module_settings..Settings+alertWhenCreditLessThan) ⇒ <code>[Command](#module_command..Command)</code>
    * [.dontSendInboundByEmail()](#module_settings..Settings+dontSendInboundByEmail) ⇒ <code>[Command](#module_command..Command)</code>
    * [.sendInboundByEmail(email)](#module_settings..Settings+sendInboundByEmail) ⇒ <code>[Command](#module_command..Command)</code>
    * [.disableAutoRecharges()](#module_settings..Settings+disableAutoRecharges) ⇒ <code>[Command](#module_command..Command)</code>
    * [.enableAutoRecharges(whenCredit, cardId, total)](#module_settings..Settings+enableAutoRecharges) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_settings..Settings_new"></a>
#### new Settings()
The Settings endpoint.

<a name="module_command..Command+args"></a>
#### settings.args
**Kind**: instance property of <code>[Settings](#module_settings..Settings)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_settings..Settings+dontAlertOnLowCredit"></a>
#### settings.dontAlertOnLowCredit() ⇒ <code>[Command](#module_command..Command)</code>
Dont send an alert by email on low credit.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_settings..Settings+alertWhenCreditLessThan"></a>
#### settings.alertWhenCreditLessThan(value) ⇒ <code>[Command](#module_command..Command)</code>
Sends an alert by email when credit reaches the given threshold.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| value | <code>integer</code> | 

<a name="module_settings..Settings+dontSendInboundByEmail"></a>
#### settings.dontSendInboundByEmail() ⇒ <code>[Command](#module_command..Command)</code>
Don't send emails on inbound messages.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_settings..Settings+sendInboundByEmail"></a>
#### settings.sendInboundByEmail(email) ⇒ <code>[Command](#module_command..Command)</code>
Set email where to send inbound messages to.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="module_settings..Settings+disableAutoRecharges"></a>
#### settings.disableAutoRecharges() ⇒ <code>[Command](#module_command..Command)</code>
Disables auto recharges.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_settings..Settings+enableAutoRecharges"></a>
#### settings.enableAutoRecharges(whenCredit, cardId, total) ⇒ <code>[Command](#module_command..Command)</code>
Enables auto recharges.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| whenCredit | <code>integer</code> | 
| cardId | <code>integer</code> | 
| total | <code>number</code> | 

<a name="module_command..Command+setArgument"></a>
#### settings.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### settings.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### settings.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### settings.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *settings.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[Settings](#module_settings..Settings)</code>  
**Overrides:** <code>[endpoint](#module_command..Command+endpoint)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### settings.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### settings.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### settings.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### settings.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### settings.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### settings.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### settings.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### settings.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### settings.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[Settings](#module_settings..Settings)</code>  
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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### sms.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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

<a name="module_sms_campaign"></a>
## sms_campaign

* [sms_campaign](#module_sms_campaign)
    * [~SmsCampaign](#module_sms_campaign..SmsCampaign) ⇐ <code>[Command](#module_command..Command)</code>
        * [new SmsCampaign()](#new_module_sms_campaign..SmsCampaign_new)
        * [.args](#module_command..Command+args)
        * [.useTemplate(templateId, variables)](#module_sms_campaign..SmsCampaign+useTemplate) ⇒ <code>[Command](#module_command..Command)</code>
        * [.text(text)](#module_sms_campaign..SmsCampaign+text) ⇒ <code>[Command](#module_command..Command)</code>
        * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
        * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
        * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
        * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
        * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
        * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
        * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
        * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
        * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
        * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
        * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
        * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="module_sms_campaign..SmsCampaign"></a>
### sms_campaign~SmsCampaign ⇐ <code>[Command](#module_command..Command)</code>
**Kind**: inner class of <code>[sms_campaign](#module_sms_campaign)</code>  
**Extends:** <code>[Command](#module_command..Command)</code>  
**Link**: https://github.com/PortaText/docs/wiki/REST-API#api_campaigns Campaigns endpoint.  
**Author:** Marcelo Gornstein <marcelog@portatext.com>  
**License**: Apache-2.0  
**Copyright**: 2015 PortaText  

* [~SmsCampaign](#module_sms_campaign..SmsCampaign) ⇐ <code>[Command](#module_command..Command)</code>
    * [new SmsCampaign()](#new_module_sms_campaign..SmsCampaign_new)
    * [.args](#module_command..Command+args)
    * [.useTemplate(templateId, variables)](#module_sms_campaign..SmsCampaign+useTemplate) ⇒ <code>[Command](#module_command..Command)</code>
    * [.text(text)](#module_sms_campaign..SmsCampaign+text) ⇒ <code>[Command](#module_command..Command)</code>
    * [.setArgument(method)](#module_command..Command+setArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.delArgument(method)](#module_command..Command+delArgument) ⇒ <code>[Command](#module_command..Command)</code>
    * [.getArgument(method)](#module_command..Command+getArgument) ⇒ <code>\*</code>
    * [.getArguments(method)](#module_command..Command+getArguments) ⇒ <code>Object</code>
    * *[.endpoint(method)](#module_command..Command+endpoint) ⇒ <code>string</code>*
    * [.body(method)](#module_command..Command+body) ⇒ <code>string</code>
    * [.contentType(method)](#module_command..Command+contentType) ⇒ <code>string</code>
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
    * [.get()](#module_command..Command+get) ⇒ <code>Promise</code>
    * [.post()](#module_command..Command+post) ⇒ <code>Promise</code>
    * [.patch()](#module_command..Command+patch) ⇒ <code>Promise</code>
    * [.delete()](#module_command..Command+delete) ⇒ <code>Promise</code>
    * [.put()](#module_command..Command+put) ⇒ <code>Promise</code>
    * [.setClient(client)](#module_command..Command+setClient) ⇒ <code>[Command](#module_command..Command)</code>

<a name="new_module_sms_campaign..SmsCampaign_new"></a>
#### new SmsCampaign()
The Campaigns endpoint (SMS).

<a name="module_command..Command+args"></a>
#### smsCampaign.args
**Kind**: instance property of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Default**: <code>{}</code>  
**Read only**: true  
**Properties**

| Type | Description |
| --- | --- |
| <code>Object</code> | Arguments for this command. |

<a name="module_sms_campaign..SmsCampaign+useTemplate"></a>
#### smsCampaign.useTemplate(templateId, variables) ⇒ <code>[Command](#module_command..Command)</code>
Sets the template id to use.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| templateId | <code>integer</code> | 
| variables | <code>Object</code> | 

<a name="module_sms_campaign..SmsCampaign+text"></a>
#### smsCampaign.text(text) ⇒ <code>[Command](#module_command..Command)</code>
Sets the message text.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_command..Command+setArgument"></a>
#### smsCampaign.setArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Sets the given argument to the given value.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+delArgument"></a>
#### smsCampaign.delArgument(method) ⇒ <code>[Command](#module_command..Command)</code>
Deletes an argument.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArgument"></a>
#### smsCampaign.getArgument(method) ⇒ <code>\*</code>
Returns the value for the given argument name.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+getArguments"></a>
#### smsCampaign.getArguments(method) ⇒ <code>Object</code>
Returns an associative array with the arguments.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** protected  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+endpoint"></a>
#### *smsCampaign.endpoint(method) ⇒ <code>string</code>*
Returns a string with the endpoint for the given command.

**Kind**: instance abstract method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+body"></a>
#### smsCampaign.body(method) ⇒ <code>string</code>
Returns the body for this endpoint.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+contentType"></a>
#### smsCampaign.contentType(method) ⇒ <code>string</code>
Returns the content type for this endpoint.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+acceptContentType"></a>
#### smsCampaign.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  

| Param | Type |
| --- | --- |
| method | <code>HttpMethod</code> | 

<a name="module_command..Command+get"></a>
#### smsCampaign.get() ⇒ <code>Promise</code>
Runs this command with a GET method and returns the result.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  
<a name="module_command..Command+post"></a>
#### smsCampaign.post() ⇒ <code>Promise</code>
Runs this command with a POST method and returns the result.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  
<a name="module_command..Command+patch"></a>
#### smsCampaign.patch() ⇒ <code>Promise</code>
Runs this command with a PATCH method and returns the result.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  
<a name="module_command..Command+delete"></a>
#### smsCampaign.delete() ⇒ <code>Promise</code>
Runs this command with a DELETE method and returns the result.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  
<a name="module_command..Command+put"></a>
#### smsCampaign.put() ⇒ <code>Promise</code>
Runs this command with a PUT method and returns the result.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
**Access:** public  
<a name="module_command..Command+setClient"></a>
#### smsCampaign.setClient(client) ⇒ <code>[Command](#module_command..Command)</code>
Returns a command to use.

**Kind**: instance method of <code>[SmsCampaign](#module_sms_campaign..SmsCampaign)</code>  
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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### tariffs.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### templates.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### timezones.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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
        * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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
    * [.acceptContentType(method)](#module_command..Command+acceptContentType) ⇒ <code>string</code>
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

<a name="module_command..Command+acceptContentType"></a>
#### command.acceptContentType(method) ⇒ <code>string</code>
Returns the Accept header for this endpoint.

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

