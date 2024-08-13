# Protobuf API definitions for VML

## Requirements

- `cd` into the cloned `vmlapis` directory
- Run docker on your computer
- Have `buf` installed
- Have `buf` [account](https://buf.build/signup)
- Have buf token generated and set as environment variable named BUF_TOKEN `export BUF_TOKEN=<your_token>`

```bash
brew install bufbuild/buf/buf
```

## Code generation

Generation is done with a dockerfile (docker command is included in the makefile). Just run:

```bash
make
```
### Adding new service

If you added new file with service to the proto-definitions. Add it to the Makefile.
Search:
```bash
	buf build proto -o gen/descriptor.bin \
```

### Linting and breaking changes

The files in the `proto/` directory are automatically formatted by the [Buf's linter](https://docs.buf.build/lint/overview).

Code is checked for breaking changes against the `master` branch. If generation fails at the `buf breaking` command during the `make` process, follow the instructions from the output to make the new code backwards-compatible.

> :warning: **If you're getting breaking-changes in dependencies:** We're currently using quite strict breaking-changes check and it can happen that Buf will complain about a dependency introducing breaking-changes into our code. Use common sense here, based on the check's error messages. If it's an acceptable "breaking change" just comment out the `buf breaking proto` line in the `Makefile`, re-generate the code, and de-comment the line again (so the check will run again next time, skipping the current version).

### Updating dependecies

Dependencies are currently updated manually. They should be be updated periodically when new changes are rolled out with newer versions of vml-apis. To update them:

- Remote dependencies - Run `buf mod update proto` in the cloned `vmlapis` directory. This will update the `buf.lock` file and download the newest version of the remote dependencies.
- Local dependencies - You need to copy the new `.proto` files into the `/deps` directory. You'll find the newer files in the respective github repositories or documentation of the dependency provider.

After that, re-generate the code again.

### Examples
In the `examples` directory you can find examples of how to use the generated code. You can find in-depth documentation [here](http://docs.vml.visma.ai/)

### Publishing
We're currently publishing packages for Python and Java(Maven) to Artifact Registry and NuGet package to NuGet.org under the `VMLAssets` organization.

