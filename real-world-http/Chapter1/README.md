# Chapter1

```
$ go run server.go
```

## HTTP/0.9

```
$ curl --http1.0 http://localhost:18888/greeting
$ curl --http1.0 --get --data-urlencode "search word" http://localhost:18888
```

## HTTP/1.0

```
$ curl -v --http1.0 http://localhost:18888/greeting
```

## HTTP : headers

- User-Agent
- Referer
- Authorization
- Content-Type
- Content-Length
- Content-Encoding
- Date

```
# send header
$ curl --http1.0 -H "X-Test: Hello" http://localhost:18888
$ curl -v --http1.0 -A "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)" http://localhost:18888
$ curl -v --http1.0 -H "User-Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)" http://localhost:18888

# request method
$ curl --http1.0 -X POST http://localhost:18888
```

## HTTP : status

- 100
- 200
- 300
- 400
- 500

## URL

scheme://hostname/path

- scheme  https
- hostname  www.oreilly.co.jp
- path  index.shtml

## HTTP : body

```
# send body data
$ curl -d "{\"hello\": \"world\"}" -H "Content-Type: application/json" http://localhost:18888

# GET request body
$ curl -X GET --data "hello=world" http://localhost:18888
```

chapter1 end

