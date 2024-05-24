# Rest

What is Rest?

Rest means Representational State Transfer. It is an architectural style that defines a set of constraints and properties based on HTTP. Web services that conform to the REST architectural style, or RESTful web services, provide interoperability between computer systems on the Internet. REST-compliant web services allow requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.

## Verbs

### GET

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

### POST

The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

### PUT

The PUT method replaces all current representations of the target resource with the request payload.

### DELETE

The DELETE method deletes the specified resource.

### PATCH

The PATCH method is used to apply partial modifications to a resource.

## Status Codes

### 200 OK

The request has succeeded.

### 201 Created

The request has been fulfilled, resulting in the creation of a new resource.

### 204 No Content

The server has successfully fulfilled the request, but there is no content to send in the response.

### 400 Bad Request

The server could not understand the request due to invalid syntax.

### 401 Unauthorized

Although the HTTP standard specifies "unauthorized", semantically, this response means "unauthenticated".

### 403 Forbidden

The client does not have access rights to the content.

### 404 Not Found

The server can not find the requested resource.

### 500 Internal Server Error

The server has encountered a situation it doesn't know how to handle.

### 503 Service Unavailable
