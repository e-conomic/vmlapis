Insert following snippet into your pom.xml to import vmlapis
```
<project>
  <dependencies>
    <dependency>
      <groupId>ai.visma</groupId>
      <artifactId>vml-apis</artifactId>
      <version>1.0.10</version>
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
  </build>
</project>

You can find in-depth documentation here: 
http://docs.vml.visma.ai/
