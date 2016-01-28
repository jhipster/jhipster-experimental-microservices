# Centralized monitoring with ELK 

The ELK stack is composed of :
- [Elasticsearch][] for indexing the logs
- [Logstash][] to manage and process the logs
- [Kibana][] to visualize the logs with a nice interface

To start ELK :

    docker-compose -f elk.yml up -d

You can now access Kibana at http://localhost:5601
It should automatically receive logs from your applications.

To stop ELK :

    docker-compose -f elk.yml stop

# Logstash configuration

Logstash is configured to listen to syslog messages on UDP port 5000. You can change this behaviour in `logstash/logstash.conf`. It is also configured to understand Spring Boot log format and will send the logs it receives to the Elasticsearch instance.

# Configuring applications to send syslog messages to UDP port 5000

So that Logstash can retrieve logs from all running applications, Logback (the logging framework used by JHipster) is configured on each application to use a [SyslogAppender](http://logback.qos.ch/manual/appenders.html#SyslogAppender) to send logs through the syslog protocol instead of writing to a file. The log events are also managed using [AsyncAppender](http://logback.qos.ch/manual/appenders.html#AsyncAppender) which buffer log events prior to sending them in an asynchronous way. This setup was chosen for performance concerns. By default it might start dropping non-WARN events if the queue becomes 80% full. 

The logging configuration can be modified in the spring-logback.xml file.


[JHipster]: https://jhipster.github.io/
[Elasticsearch]: https://www.elastic.co/products/elasticsearch
[Logstash]: https://www.elastic.co/products/logstash
[Kibana]: https://www.elastic.co/products/kibana

