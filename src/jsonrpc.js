jsonRPC =new Object({
    version: '2.0',
    endPoint: null,
    namespace: null,
    setup: function(params) {
        this.endPoint = params["endPoint"];
        this.namespace = params["namespace"];
        this.cache = params["cache"] !== undefined ? params["cache"] : true;
        return this;
    },
    request: function(method, options) {
        if (options === undefined) {
            options = {"id": 1};
        }
        if (options["id"] === undefined) {
            options["id"] = 1;
        }
        if (options["cache"] === undefined) {
            options["cache"] = this.cache;
        }

        this._doRequest(JSON.stringify(this._requestDataObj(method, options["params"], options["id"])), options);
        return true;
    },
    // Creates an RPC suitable request object
    _requestDataObj: function(method, params, id) {
        var dataObj = {
            "jsonrpc": this.version,
            "method": this.namespace ? this.namespace +'.'+ method : method,
            "id": id
        }
        if(params !== undefined) {
            dataObj["params"] = params;
        }
        return dataObj;
    },

    _requestUrl: function(url, cache) {
        url = url || this.endPoint;
        if (!cache) {
            if (url.indexOf("?") < 0) {
                url += '?tm=' + new Date().getTime();
            }
            else {
                url += "&tm=" + new Date().getTime();
            }
        }
        return url;
    },
    _doRequest: function(data, options) {
        var _that = this;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState==4) {
                if (xmlhttp.status==200) {
                    _that._requestSuccess.call(_that, xmlhttp.responseText, options["success"], options["error"]);
                } else {
                    _that._requestError.call(_that, xmlhttp.responseText, options["error"]);
                }
            }
        };
        xmlhttp.open("POST",this._requestUrl((this.endPoint || options["url"]), options["cache"]), false);

        var headers=[
            {"name":"Accept","type":"application/json, text/javascript, */*;"},
            {"name":"Content-Type","type":"application/json-rpc"}
        ];
        for (var i=0;i<headers.length;i++) {
            xmlhttp.setRequestHeader( headers[i]["name"], headers[i]["type"]);
        }

        xmlhttp.send(data);
    },
    // Handles calling of error callback function
    _requestError: function(responseText, error) {
        if (error !== undefined && typeof(error) === 'function') {
            if(typeof(responseText) === 'string') {
                try {
                    error(eval ( '(' + responseText + ')' ));
                }
                catch(e) {
                    error(this._response());
                }
            }
            else {
                error(this._response());
            }
        }
    },
    _requestSuccess: function(responseText, success, error) {
        var response = this._response(responseText);

        if(response.error && typeof(error) === 'function') {
            error(response);
            return;
        }

        // Otherwise, successful request, run the success request if it exists
        if(typeof(success) === 'function') {
            success(response);
        }
    },
    _response: function(responseText) {
        if (responseText === undefined) {
            return {
                error: 'Internal server error',
                version: '2.0'
            };
        }
        else {
          try {
              if(typeof(responseText) === 'string') {
                  responseText = eval ( '(' + responseText + ')' );
              }
              return responseText;
          }
          catch (e) {
              return {
                  error: 'Internal server error: ' + e,
                  version: '2.0'
              }
          }
        }
    }
});

