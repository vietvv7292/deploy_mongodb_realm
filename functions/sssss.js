exports = function() {
  console.log('123')
  console.log('567')
  console.log('789')
  const http = context.services.get("myHttp");
  return http
    .get({ url: "https://www.example.com/users" })
    .then(response => {
      // The response body is encoded as raw BSON.Binary. Parse it to JSON.
      const ejson_body = EJSON.parse(response.body.text());
      return ejson_body;
    })
};