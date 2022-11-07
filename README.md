# Protobuf API definitions for VML


### Requirements
Have buf installed
```bash
brew install bufbuild/buf/buf
```
### Generate

Generation is now done with a dockerfile

```bash
make
```

The files in the `proto/` directory are automatically formatted by the [Buf's linter](https://docs.buf.build/lint/overview).

Code is checked for breaking changes against the `master` branch. If generation fails at the `buf breaking` command during the `make` process, follow the instructions from the output to make the new code backwards-compatible.
