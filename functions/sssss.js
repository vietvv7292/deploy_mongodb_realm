exports = function() {
  console.log('222222222222')
  const http = context.services.get("myHttp");
  return http
    .get({ url: "https://www.example.com/users" })
    .then(response => {
      // The response body is encoded as raw BSON.Binary. Parse it to JSON.
      const ejson_body = EJSON.parse(response.body.text());
      return ejson_body;
    })
};