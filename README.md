# Protobuf API definitions for VML

### Generate

Generation is now done with a dockerfile

``` bash
make
```

If new truth values are added to dataservice updating bigquery is done via terraform.

Do

```bash
make bigquery
```

 to copy the generated schema to the ssn-terraform folder and then terraform.
