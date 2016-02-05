# Centralized monitoring with ELK 

The ELK stack is composed of :
- [Elasticsearch][] for indexing the logs
- [Logstash][] to manage and process the logs
- [Kibana][] to visualize the logs with a nice interface

# Start ELK with docker

To start ELK :

    docker-compose -f elk.yml up -d

You can now access Kibana at http://localhost:5601
It should automatically receive logs from your applications.

To stop ELK :

    docker-compose -f elk.yml stop

# Start ELK without docker

If you don't want to use docker you will need to install and start Elasticsearch, Logstash and Kibana yourself following the instructions on their official documentation and then use the provided logstash configuration.

# Logstash configuration

Logstash is configured to listen to syslog messages on UDP port 5000. You can change this behaviour in `logstash/logstash.conf`. It is also configured to send the logs it receives to the Elasticsearch instance it's default port 9200.

# Logback configuration

The logging configuration can be modified in the spring-logback.xml file.

So that Logstash can retrieve logs from all running applications, Logback (the logging framework used by JHipster) is configured on each application to use a [LogstashSocketAppender](https://github.com/logstash/logstash-logback-encoder#udp) to send logs through a socket instead of writing to a file.

The log events are also managed using [AsyncAppender](http://logback.qos.ch/manual/appenders.html#AsyncAppender) which buffer log events prior to sending them in an asynchronous way. This setup was chosen for performance concerns. By default it might start dropping non WARN and ERROR events if the queue becomes 80% full. Have a look at the [discardingThreshold property](http://logback.qos.ch/manual/appenders.html#asyncDiscardingThreshold) if you want to change that default.


# Add additional data to the logs

You can add JSON fields to the customField property to have it log data from a Spring environment property.

```
    <springProperty name="app_name" source="eureka.instance.appname"/>
    <springProperty name="instance_id" source="eureka.instance.instanceId"/>
    <springProperty name="server_port" source="server.port"/>

    <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashSocketAppender">
        <syslogHost>localhost</syslogHost>
        <port>5000</port>
        <customFields>{"app_name":"${app_name}","port":"${server_port}","pid":"${PID}"}</customFields>
    </appender>
```

[JHipster]: https://jhipster.github.io/
[Elasticsearch]: https://www.elastic.co/products/elasticsearch
[Logstash]: https://www.elastic.co/products/logstash
[Kibana]: https://www.elastic.co/products/kibana

