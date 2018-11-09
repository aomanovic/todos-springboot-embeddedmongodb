# todos-springboot-embeddedmongodb
A simple todos app built with Spring boot and embedded mongodb, using Angular 6 for frontend.

# Spring Boot, Embedded MongoDB, Angular Restful API

Todo App with Spring Boot & MongoDB in the Backend and Angular in the frontend.

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - Embedded

		<dependency>
			<groupId>de.flapdoodle.embed</groupId>
			<artifactId>de.flapdoodle.embed.mongo</artifactId>
			<version>1.50.5</version>
		</dependency>
		<dependency>
			<groupId>cz.jirutka.spring</groupId>
			<artifactId>embedmongo-spring</artifactId>
			<version>RELEASE</version>
		</dependency>

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/aomanovic/todos-springboot-embeddedmongodb.git
```

**2. Build and run the backend app using maven**

```bash
cd todos-embedded-mongodb
mvn package
java -jar target/todos-embedded-mongodb-0.0.1-SNAPSHOT.jar
```

Alternatively, you can run the app without packaging it using -

```bash
mvn spring-boot:run
```

**2.1 You can also just load the project as maven project in IntelliJ and make sure you have Maven 3 bundled and Java 1.8 set up as project jdk, and just run the backend app. 

The backend server will start at <http://localhost:8080>.

**3. Run the frontend app using npm**

```bash
cd todos-angular
npm install
```

```bash
ng serve --open
```

Frontend server will run on <http://localhost:4200>

