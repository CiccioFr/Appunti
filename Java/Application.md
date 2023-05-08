# Application.yaml & Application.properties

## logging
indicando i vari sotto-package possiamo adottare granulometrie diverse
```yaml
logging:
  level:
    it:
      cgmconsulting:
        # mspost nome del Package: indichiamo il livello (ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF
        msuser: info
    org:
      springframework: info
      hibernate:
        type:
          descriptor:
            sql:
              BasicBinder: trace
```