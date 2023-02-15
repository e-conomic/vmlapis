Insert following snippet into your pom.xml to import vmlapis package into your project

```
<project>
  <dependencies>
    <dependency>
      <groupId>ai.visma</groupId>
      <artifactId>vml-apis</artifactId>
      <version><!-- current version --></version>
    </dependency>
  </dependencies>

  <distributionManagement>
    <snapshotRepository>
      <id>artifact-registry</id>
      <url>artifactregistry://europe-west4-maven.pkg.dev/dev-vml-cm/vml-apis-java</url>
    </snapshotRepository>
    <repository>
      <id>artifact-registry</id>
      <url>artifactregistry://europe-west4-maven.pkg.dev/dev-vml-cm/vml-apis-java</url>
    </repository>
  </distributionManagement>

  <repositories>
    <repository>
      <id>artifact-registry</id>
      <url>artifactregistry://europe-west4-maven.pkg.dev/dev-vml-cm/vml-apis-java</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
  </repositories>

  <build>
    <extensions>
      <extension>
        <groupId>com.google.cloud.artifactregistry</groupId>
        <artifactId>artifactregistry-maven-wagon</artifactId>
        <version>2.1.0</version>
      </extension>
    </extensions>
    </plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>8</source>
          <target>8</target>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.4.1</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
            <configuration>
              <shadedArtifactAttached>true</shadedArtifactAttached>
              <transformers>
                <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer">
                </transformer>
                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                  <mainClass>org.example.Client</mainClass>
                </transformer>
              </transformers>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

You can find in-depth documentation here:
http://docs.vml.visma.ai/

### To run the examples
Run this command from example folder to compile and run the snippet
```bash
mvn install && java -jar target/grpc_client-1.0-SNAPSHOT-shaded.jar
```
