@app
begin-app

@static
folder build

@http
get /api
post /buy

@events
buy-now

@scheduled
buydata rate(1 minute)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
