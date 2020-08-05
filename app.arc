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
buydata rate(6 hours)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
