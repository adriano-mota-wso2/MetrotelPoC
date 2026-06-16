# MetrotelPoC
Metrotel PoC Using APIM + Integrator

## Information
In this repository we have the WSO2 Integrator (profile MI) for simulate the backends and in the APIM folder, we have the Swagger Definition of the API to be used on WSO2 API Platform

### Payload example
```
{
  "customer_id": "100245"
}
```

### Payload example - DataMapper API
```
curl -X POST http://localhost:8290/datamapersample/ \
  -H "Content-Type: application/xml" \
  -d '<?xml version="1.0" encoding="UTF-8"?>
<Person>
  <id>1</id>
  <firstName>John</firstName>
  <lastName>Doe</lastName>
  <email>john.doe@example.com</email>
  <age>30</age>
  <address>
    <street>123 Main St</street>
    <city>Springfield</city>
    <country>USA</country>
  </address>
</Person>'
```
